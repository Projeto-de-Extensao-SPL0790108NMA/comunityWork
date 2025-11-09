import React, { useState, useCallback } from 'react';
import {
  View,
  Text,
  Image,
  FlatList,
  ScrollView,
  TouchableOpacity,
  StatusBar,
  Dimensions,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import {
  useRoute,
  RouteProp,
  useFocusEffect,
  useNavigation,
} from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { supabase } from '../../services/supabase';
import type { AppStackParamList } from '../../navigation/types';
import { styles } from './style';
import ReviewModal from '../../components/ReviewModal';
import LoadingScreen from '../../components/LoadingScreen';
import Toast from '../../components/Toast';
import { useToast } from '../../hooks/useToast';
import { Ionicons } from '@expo/vector-icons';

type ProviderProfile = {
  id: string;
  full_name: string;
  avatar_url: string;
};

type ReviewData = {
  id: number;
  rating: number;
  comment: string | null;
  created_at: string;
  profiles: { full_name: string; avatar_url: string } | null;
};

type ServiceDetails = {
  id: number;
  title: string;
  description: string | null;
  price: number | null;
  photo_urls: string[] | null;
  availability: string | null;
  profiles: ProviderProfile | null;
  categories: { name: string } | null;
  reviews: ReviewData[];
};

type ServiceDetailRouteProp = RouteProp<AppStackParamList, 'ServiceDetail'>;
type ServiceDetailNavigationProp = NativeStackNavigationProp<AppStackParamList>;

/**
 * Hook para gerenciar dados e ações do serviço
 */
const useServiceDetails = (serviceId: number) => {
  const navigation = useNavigation<ServiceDetailNavigationProp>();
  const { showToast, toastProps } = useToast();
  const [service, setService] = useState<ServiceDetails | null>(null);
  const [loading, setLoading] = useState(true);
  const [actionLoading, setActionLoading] = useState(false);

  const fetchServiceDetails = useCallback(async () => {
    if (!serviceId) return;
    setLoading(true);
    try {
      const { data, error } = await supabase
        .from('services')
        .select(
          `*, profiles(*), categories(name), reviews(id, rating, comment, created_at, profiles(full_name, avatar_url))`,
        )
        .eq('id', serviceId)
        .single();

      if (error) throw error;
      setService(data as ServiceDetails);
    } catch (error) {
      const message =
        error instanceof Error
          ? error.message
          : 'Não foi possível carregar os detalhes.';
      showToast(message, 'error');
      navigation.goBack();
    } finally {
      setLoading(false);
    }
  }, [serviceId, navigation, showToast]);

  useFocusEffect(
    useCallback(() => {
      fetchServiceDetails();
    }, [fetchServiceDetails]),
  );

  const handleSubmitReview = async (rating: number, comment: string) => {
    try {
      const {
        data: { user },
      } = await supabase.auth.getUser();
      if (!user) throw new Error('Você precisa estar logado para avaliar.');

      if (user.id === service?.profiles?.id) {
        showToast('Você não pode avaliar o seu próprio serviço', 'warning');
        return;
      }

      const { error } = await supabase
        .from('reviews')
        .insert({ service_id: serviceId, user_id: user.id, rating, comment });

      if (error) throw error;

      showToast('Avaliação enviada com sucesso!', 'success');
      fetchServiceDetails();
    } catch (error) {
      const message =
        error instanceof Error
          ? error.message
          : 'Ocorreu um erro desconhecido.';
      showToast(message, 'error');
    }
  };

  const handleStartConversation = async () => {
    if (!service?.profiles?.id) return;

    setActionLoading(true);
    try {
      const {
        data: { user },
      } = await supabase.auth.getUser();
      if (!user) {
        showToast(
          'Você precisa estar logado para iniciar uma conversa',
          'error',
        );
        return;
      }

      if (user.id === service.profiles.id) {
        showToast('Você não pode conversar consigo mesmo', 'warning');
        return;
      }

      const { data: conversationId, error } = await supabase.rpc(
        'get_or_create_conversation',
        {
          participant1_id_input: user.id,
          participant2_id_input: service.profiles.id,
        },
      );

      if (error) throw error;

      if (conversationId && service.profiles) {
        navigation.navigate('Chat', {
          conversationId,
          recipient: service.profiles,
        });
      }
    } catch (error) {
      const message =
        error instanceof Error
          ? error.message
          : 'Ocorreu um erro desconhecido.';
      showToast(message, 'error');
    } finally {
      setActionLoading(false);
    }
  };

  return {
    service,
    loading,
    actionLoading,
    handleSubmitReview,
    handleStartConversation,
    toastProps,
  };
};

/**
 * Componente de review individual
 */
const ReviewItem: React.FC<{ review: ReviewData }> = ({ review }) => {
  const timeAgo = (dateString: string) => {
    const now = new Date();
    const reviewDate = new Date(dateString);
    const diffInMs = now.getTime() - reviewDate.getTime();
    const diffInDays = Math.floor(diffInMs / (1000 * 60 * 60 * 24));

    if (diffInDays === 0) return 'Hoje';
    if (diffInDays === 1) return 'Ontem';
    if (diffInDays < 7) return `${diffInDays} dias atrás`;
    if (diffInDays < 30) return `${Math.floor(diffInDays / 7)} semanas atrás`;
    if (diffInDays < 365) return `${Math.floor(diffInDays / 30)} meses atrás`;
    return `${Math.floor(diffInDays / 365)} anos atrás`;
  };

  return (
    <View style={styles.reviewItem}>
      <View style={styles.reviewHeader}>
        <Image
          source={{
            uri:
              review.profiles?.avatar_url || 'https://via.placeholder.com/40',
          }}
          style={styles.reviewAvatar}
        />
        <View style={styles.reviewAuthorInfo}>
          <Text style={styles.reviewAuthor}>
            {review.profiles?.full_name || 'Usuário Anônimo'}
          </Text>
          <Text style={styles.reviewDate}>{timeAgo(review.created_at)}</Text>
        </View>
        <View style={styles.reviewStars}>
          {[...Array(5)].map((_, i) => (
            <Ionicons
              key={i}
              name="star"
              size={14}
              color={i < review.rating ? '#F59E0B' : '#E5E7EB'}
            />
          ))}
        </View>
      </View>
      {review.comment && (
        <Text style={styles.reviewComment}>{review.comment}</Text>
      )}
    </View>
  );
};

/**
 * Tela de detalhes do serviço
 */
const ServiceDetailScreen: React.FC = () => {
  const route = useRoute<ServiceDetailRouteProp>();
  const { serviceId } = route.params;
  const {
    service,
    loading,
    actionLoading,
    handleSubmitReview,
    handleStartConversation,
    toastProps,
  } = useServiceDetails(serviceId);

  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isReviewModalVisible, setReviewModalVisible] = useState(false);

  const imageWidth = Dimensions.get('window').width;

  if (loading) {
    return <LoadingScreen message="Carregando detalhes do serviço..." />;
  }

  if (!service) {
    return (
      <SafeAreaView style={styles.safeArea}>
        <View style={styles.errorContainer}>
          <Ionicons name="alert-circle-outline" size={60} color="#EF4444" />
          <Text style={styles.errorText}>Serviço não encontrado</Text>
        </View>
      </SafeAreaView>
    );
  }

  const averageRating =
    service.reviews.length > 0
      ? service.reviews.reduce((sum, r) => sum + r.rating, 0) /
        service.reviews.length
      : 0;

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar barStyle="dark-content" />
      <Toast {...toastProps} />

      <ReviewModal
        visible={isReviewModalVisible}
        onClose={() => setReviewModalVisible(false)}
        onSubmit={async (rating, comment) => {
          await handleSubmitReview(rating, comment);
          setReviewModalVisible(false);
        }}
      />

      <ScrollView contentContainerStyle={styles.scrollContainer}>
        {/* Galeria de Imagens */}
        {service.photo_urls && service.photo_urls.length > 0 ? (
          <View style={styles.imageContainer}>
            <FlatList
              data={service.photo_urls}
              renderItem={({ item }) => (
                <Image
                  source={{ uri: item }}
                  style={[styles.image, { width: imageWidth }]}
                />
              )}
              keyExtractor={item => item}
              horizontal
              pagingEnabled
              showsHorizontalScrollIndicator={false}
              onScroll={e => {
                const index = Math.round(
                  e.nativeEvent.contentOffset.x / imageWidth,
                );
                setCurrentImageIndex(index);
              }}
            />
            {service.photo_urls.length > 1 && (
              <View style={styles.imageCounterContainer}>
                <Text style={styles.imageCounter}>
                  {currentImageIndex + 1} / {service.photo_urls.length}
                </Text>
              </View>
            )}
          </View>
        ) : (
          <View
            style={[
              styles.image,
              { width: imageWidth, backgroundColor: '#F3F4F6' },
            ]}
          >
            <Ionicons name="image-outline" size={60} color="#9CA3AF" />
          </View>
        )}

        {/* Informações Principais */}
        <View style={styles.contentContainer}>
          <View style={styles.categoryTagContainer}>
            <Text style={styles.categoryTag}>
              {service.categories?.name || 'Sem Categoria'}
            </Text>
          </View>

          <Text style={styles.title}>{service.title}</Text>

          {/* Rating Summary */}
          {service.reviews.length > 0 && (
            <View style={styles.ratingSummary}>
              <View style={styles.ratingStars}>
                {[...Array(5)].map((_, i) => (
                  <Ionicons
                    key={i}
                    name="star"
                    size={18}
                    color={
                      i < Math.round(averageRating) ? '#F59E0B' : '#E5E7EB'
                    }
                  />
                ))}
              </View>
              <Text style={styles.ratingText}>
                {averageRating.toFixed(1)} ({service.reviews.length}{' '}
                {service.reviews.length === 1 ? 'avaliação' : 'avaliações'})
              </Text>
            </View>
          )}

          {/* Provider Card */}
          <View style={styles.providerContainer}>
            <Image
              source={{
                uri:
                  service.profiles?.avatar_url ||
                  'https://via.placeholder.com/50',
              }}
              style={styles.providerAvatar}
            />
            <View style={styles.providerInfo}>
              <Text style={styles.providerLabel}>Oferecido por</Text>
              <Text style={styles.providerName}>
                {service.profiles?.full_name || 'Usuário Anônimo'}
              </Text>
            </View>
            <Ionicons name="chevron-forward" size={20} color="#9CA3AF" />
          </View>
        </View>

        {/* Descrição */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Sobre o serviço</Text>
          <Text style={styles.description}>
            {service.description || 'Nenhuma descrição fornecida.'}
          </Text>
        </View>

        {/* Disponibilidade */}
        {service.availability && (
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Disponibilidade</Text>
            <View style={styles.availabilityCard}>
              <Ionicons name="calendar-outline" size={20} color="#3B82F6" />
              <Text style={styles.availabilityText}>
                {service.availability}
              </Text>
            </View>
          </View>
        )}

        {/* Avaliações */}
        <View style={styles.section}>
          <View style={styles.reviewsHeader}>
            <Text style={styles.sectionTitle}>
              Avaliações{' '}
              {service.reviews.length > 0 && `(${service.reviews.length})`}
            </Text>
            <TouchableOpacity
              style={styles.addReviewButton}
              onPress={() => setReviewModalVisible(true)}
            >
              <Ionicons name="add-circle" size={20} color="#3B82F6" />
              <Text style={styles.addReviewButtonText}>Avaliar</Text>
            </TouchableOpacity>
          </View>

          {service.reviews && service.reviews.length > 0 ? (
            service.reviews.map(review => (
              <ReviewItem key={review.id} review={review} />
            ))
          ) : (
            <View style={styles.noReviewsContainer}>
              <Ionicons name="star-outline" size={48} color="#D1D5DB" />
              <Text style={styles.noReviewsText}>
                Seja o primeiro a avaliar este serviço!
              </Text>
            </View>
          )}
        </View>
      </ScrollView>

      {/* Footer Fixo */}
      <View style={styles.footer}>
        <View style={styles.priceContainer}>
          <Text style={styles.priceLabel}>A partir de</Text>
          <Text style={styles.priceValue}>
            {service.price !== null
              ? `R$ ${service.price.toFixed(2).replace('.', ',')}`
              : 'A combinar'}
          </Text>
        </View>
        <TouchableOpacity
          style={[
            styles.actionButton,
            actionLoading && styles.actionButtonDisabled,
          ]}
          onPress={handleStartConversation}
          disabled={actionLoading}
        >
          {actionLoading ? (
            <Ionicons name="hourglass-outline" size={20} color="#FFFFFF" />
          ) : (
            <Ionicons name="chatbubble-ellipses" size={20} color="#FFFFFF" />
          )}
          <Text style={styles.actionButtonText}>
            {actionLoading ? 'Aguarde...' : 'Pedir Orçamento'}
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default ServiceDetailScreen;
