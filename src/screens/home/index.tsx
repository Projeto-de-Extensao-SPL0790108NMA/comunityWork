import React, { useState, useCallback } from 'react';
import {
  Text,
  SafeAreaView,
  TouchableOpacity,
  View,
  ScrollView,
  ActivityIndicator,
  Alert,
  FlatList,
  StatusBar,
} from 'react-native';
import {
  useNavigation,
  useFocusEffect,
  CommonActions,
} from '@react-navigation/native'; // 1. Importe CommonActions
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { AppStackParamList } from '../../navigation/types';
import { supabase } from '../../services/supabase';
import { styles } from './style';
import { Ionicons } from '@expo/vector-icons';
import ServiceCard, { ServiceCardData } from '../../components/ServiceCard';

type HomeScreenNavigationProp = NativeStackNavigationProp<
  AppStackParamList,
  'MainTabs'
>;

type Category = {
  id: number;
  name: string;
  icon: keyof typeof Ionicons.glyphMap;
};

/**
 * @description
 * Tela inicial do aplicativo para usuários logados.
 * Apresenta uma saudação personalizada, atalhos para categorias e uma lista dos serviços mais bem avaliados.
 */
const HomeScreen: React.FC = () => {
  const navigation = useNavigation<HomeScreenNavigationProp>();
  const [loading, setLoading] = useState(true);
  const [fullName, setFullName] = useState('');
  const [topServices, setTopServices] = useState<ServiceCardData[]>([]);

  const featuredCategories: Category[] = [
    { id: 1, name: 'Reparos', icon: 'build-outline' },
    { id: 2, name: 'Aulas', icon: 'school-outline' },
    { id: 3, name: 'Cuidados', icon: 'sparkles-outline' },
    { id: 4, name: 'Jardinagem', icon: 'leaf-outline' },
    { id: 7, name: 'Tecnologia', icon: 'hardware-chip-outline' },
  ];

  useFocusEffect(
    useCallback(() => {
      const fetchData = async () => {
        try {
          setLoading(true);
          const {
            data: { user },
          } = await supabase.auth.getUser();
          if (!user) throw new Error('Usuário não encontrado');

          const [profileResponse, servicesResponse] = await Promise.all([
            supabase
              .from('profiles')
              .select('full_name')
              .eq('id', user.id)
              .single(),
            supabase.rpc('get_top_rated_services', { limit_count: 4 }),
          ]);

          if (profileResponse.error) throw profileResponse.error;
          if (servicesResponse.error) throw servicesResponse.error;

          setFullName(profileResponse.data?.full_name || '');
          setTopServices(servicesResponse.data || []);
        } catch (error) {
          let errorMessage =
            'Não foi possível buscar as informações. Tente novamente.';
          if (error instanceof Error) {
            errorMessage = error.message;
          }
          Alert.alert('Erro ao carregar dados', errorMessage);
        } finally {
          setLoading(false);
        }
      };
      fetchData();
    }, []),
  );

  /**
   * @description Navega para a aba de Pesquisa.
   * Utiliza CommonActions.navigate para uma navegação segura entre diferentes navegadores (Stack -> Tab).
   */
  const navigateToSearch = () => {
    navigation.dispatch(
      CommonActions.navigate({
        name: 'Pesquisar',
      }),
    );
  };

  const renderCategoryItem = ({ item }: { item: Category }) => (
    <TouchableOpacity style={styles.categoryItem} onPress={navigateToSearch}>
      <View style={styles.categoryIconContainer}>
        <Ionicons name={item.icon} size={28} color="#3F83F8" />
      </View>
      <Text style={styles.categoryText}>{item.name}</Text>
    </TouchableOpacity>
  );

  if (loading) {
    return (
      <ActivityIndicator
        style={{ flex: 1, justifyContent: 'center' }}
        size="large"
        color="#3F83F8"
      />
    );
  }

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar barStyle="dark-content" />
      <ScrollView style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.welcomeText}>
            Olá, {fullName.split(' ')[0] || 'Usuário'}
          </Text>
          <Text style={styles.subHeaderText}>
            Encontre o serviço perfeito para você.
          </Text>
        </View>

        {/* Seção de Categorias */}
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Categorias</Text>
        </View>
        <FlatList
          data={featuredCategories}
          renderItem={renderCategoryItem}
          keyExtractor={item => item.id.toString()}
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.categoryListContainer}
        />

        {/* Seção de Serviços em Destaque */}
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Serviços em Destaque</Text>
          {/* 2. CORREÇÃO: O botão "Ver todos" agora usa a navegação segura */}
          <TouchableOpacity onPress={navigateToSearch}>
            <Text style={styles.seeAllButtonText}>Ver todos</Text>
          </TouchableOpacity>
        </View>
        <FlatList
          data={topServices}
          renderItem={({ item }) => <ServiceCard service={item} />}
          keyExtractor={item => item.id.toString()}
          numColumns={2}
          columnWrapperStyle={{ gap: 16 }}
          contentContainerStyle={styles.servicesGridContainer}
          scrollEnabled={false}
        />
      </ScrollView>

      <TouchableOpacity
        style={styles.fab}
        onPress={() => navigation.navigate('AddService')}
      >
        <Ionicons name="add" size={32} color="#FFFFFF" />
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default HomeScreen;
