import React, {
  useState,
  useEffect,
  useMemo,
  useCallback,
  useRef,
} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  FlatList,
  KeyboardAvoidingView,
  Platform,
  ActivityIndicator,
} from 'react-native';
import { useRoute, RouteProp } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { supabase } from '../../services/supabase';
import type { AppStackParamList } from '../../navigation/types';
import { styles } from './style';
import { format, isSameDay, isToday, isYesterday } from 'date-fns';
import { ptBR } from 'date-fns/locale';
import Toast from '../../components/Toast';
import { useToast } from '../../hooks/useToast';
import LoadingScreen from '../../components/LoadingScreen';

type Message = {
  id: number;
  content: string;
  sender_id: string;
  created_at: string;
};

type ListItem =
  | { type: 'message'; data: Message }
  | { type: 'date'; date: string };

type ChatRouteProp = RouteProp<AppStackParamList, 'Chat'>;

/**
 * Hook para gerenciar mensagens do chat
 */
const useChatMessages = (conversationId: number) => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [loading, setLoading] = useState(true);
  const [userId, setUserId] = useState<string | null>(null);
  const { showToast } = useToast();

  useEffect(() => {
    const fetchUser = async () => {
      const {
        data: { user },
      } = await supabase.auth.getUser();
      setUserId(user?.id || null);
    };
    fetchUser();
  }, []);

  useEffect(() => {
    if (!conversationId || !userId) return;

    const fetchMessages = async () => {
      try {
        const { data, error } = await supabase
          .from('messages')
          .select('*')
          .eq('conversation_id', conversationId)
          .order('created_at', { ascending: false });

        if (error) throw error;
        setMessages(data || []);
      } catch {
        showToast('Erro ao carregar mensagens', 'error');
      } finally {
        setLoading(false);
      }
    };

    fetchMessages();

    const channel = supabase
      .channel(`chat_room_${conversationId}`)
      .on(
        'postgres_changes',
        {
          event: 'INSERT',
          schema: 'public',
          table: 'messages',
          filter: `conversation_id=eq.${conversationId}`,
        },
        payload => {
          if (payload.new.sender_id !== userId) {
            setMessages(prev => [payload.new as Message, ...prev]);
          }
        },
      )
      .subscribe();

    return () => {
      supabase.removeChannel(channel);
    };
  }, [conversationId, userId, showToast]);

  return { messages, setMessages, loading, userId };
};

/**
 * Separador de data
 */
const DateSeparator = ({ date }: { date: string }) => (
  <View style={styles.dateSeparator}>
    <Text style={styles.dateSeparatorText}>{date}</Text>
  </View>
);

/**
 * Bolha de mensagem
 */
const MessageBubble = ({
  message,
  isMyMessage,
}: {
  message: Message;
  isMyMessage: boolean;
}) => (
  <View
    style={[
      styles.bubbleContainer,
      isMyMessage ? styles.myBubbleContainer : styles.recipientBubbleContainer,
    ]}
  >
    <View
      style={[
        styles.messageBubble,
        isMyMessage ? styles.myBubble : styles.recipientBubble,
      ]}
    >
      <Text
        style={isMyMessage ? styles.myMessageText : styles.recipientMessageText}
      >
        {message.content}
      </Text>
    </View>
    <Text
      style={[
        styles.timestamp,
        isMyMessage ? styles.myTimestamp : styles.recipientTimestamp,
      ]}
    >
      {format(new Date(message.created_at), 'HH:mm')}
    </Text>
  </View>
);

/**
 * Estado vazio (sem mensagens)
 */
const EmptyState = ({ recipientName }: { recipientName: string }) => (
  <View style={styles.emptyContainer}>
    <Ionicons name="chatbubbles-outline" size={64} color="#CBD5E1" />
    <Text style={styles.emptyTitle}>Inicie a conversa</Text>
    <Text style={styles.emptySubtitle}>
      Envie uma mensagem para {recipientName} para começar
    </Text>
  </View>
);

/**
 * Tela de chat com mensagens em tempo real
 */
const ChatScreen: React.FC = () => {
  const route = useRoute<ChatRouteProp>();
  const { conversationId, recipient } = route.params;
  const insets = useSafeAreaInsets();
  const { showToast, toastProps } = useToast();
  const { messages, setMessages, loading, userId } =
    useChatMessages(conversationId);

  const [newMessage, setNewMessage] = useState('');
  const [sending, setSending] = useState(false);
  const flatListRef = useRef<FlatList>(null);

  const processedMessages = useMemo(() => {
    const items: ListItem[] = [];
    let lastDate: Date | null = null;

    messages.forEach(message => {
      const messageDate = new Date(message.created_at);
      if (!lastDate || !isSameDay(messageDate, lastDate)) {
        let dateString;
        if (isToday(messageDate)) {
          dateString = 'Hoje';
        } else if (isYesterday(messageDate)) {
          dateString = 'Ontem';
        } else {
          dateString = format(messageDate, "dd 'de' MMMM", { locale: ptBR });
        }
        items.push({ type: 'date', date: dateString });
        lastDate = messageDate;
      }
      items.push({ type: 'message', data: message });
    });

    return items;
  }, [messages]);

  const handleSendMessage = async () => {
    const content = newMessage.trim();
    if (!content || !userId || sending) return;

    setSending(true);
    const optimisticMessage: Message = {
      id: Date.now(),
      content,
      sender_id: userId,
      created_at: new Date().toISOString(),
    };

    setMessages(prev => [optimisticMessage, ...prev]);
    setNewMessage('');

    try {
      const { error } = await supabase.from('messages').insert({
        conversation_id: conversationId,
        sender_id: userId,
        content,
      });

      if (error) throw error;
    } catch {
      showToast('Erro ao enviar mensagem', 'error');
      setMessages(prev => prev.filter(m => m.id !== optimisticMessage.id));
      setNewMessage(content);
    } finally {
      setSending(false);
    }
  };

  const renderItem = useCallback(
    ({ item }: { item: ListItem }) => {
      if (item.type === 'date') {
        return <DateSeparator date={item.date} />;
      }
      return (
        <MessageBubble
          message={item.data}
          isMyMessage={item.data.sender_id === userId}
        />
      );
    },
    [userId],
  );

  if (loading) {
    return <LoadingScreen message="Carregando conversa..." />;
  }

  return (
    <View style={[styles.container, { paddingTop: insets.top }]}>
      <Toast {...toastProps} />

      <KeyboardAvoidingView
        style={styles.keyboardAvoidingContainer}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        keyboardVerticalOffset={90}
      >
        <FlatList
          ref={flatListRef}
          data={processedMessages}
          keyExtractor={(item, index) =>
            item.type === 'message' ? item.data.id.toString() : `date-${index}`
          }
          inverted
          style={styles.messageList}
          contentContainerStyle={
            messages.length === 0
              ? { flexGrow: 1, justifyContent: 'center' }
              : { paddingTop: 10 }
          }
          renderItem={renderItem}
          ListEmptyComponent={
            <EmptyState recipientName={recipient.full_name} />
          }
          onContentSizeChange={() =>
            flatListRef.current?.scrollToOffset({ offset: 0, animated: true })
          }
        />

        <View
          style={[
            styles.inputContainer,
            { paddingBottom: insets.bottom > 0 ? insets.bottom : 8 },
          ]}
        >
          <TextInput
            style={styles.input}
            value={newMessage}
            onChangeText={setNewMessage}
            placeholder="Digite sua mensagem..."
            placeholderTextColor="#94A3B8"
            multiline
            maxLength={500}
          />
          <TouchableOpacity
            style={[
              styles.sendButton,
              (!newMessage.trim() || sending) && styles.sendButtonDisabled,
            ]}
            onPress={handleSendMessage}
            disabled={!newMessage.trim() || sending}
          >
            {sending ? (
              <ActivityIndicator size="small" color="#FFFFFF" />
            ) : (
              <Ionicons name="send" size={20} color="#FFFFFF" />
            )}
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    </View>
  );
};

export default ChatScreen;
