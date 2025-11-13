import React, { useState, useCallback } from 'react';
import {
  Text,
  TouchableOpacity,
  View,
  ScrollView,
  Alert,
  FlatList,
  StatusBar,
  RefreshControl,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import {
  useNavigation,
  useFocusEffect,
  CompositeNavigationProp,
} from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { BottomTabNavigationProp } from '@react-navigation/bottom-tabs';
import { AppStackParamList, TabParamList } from '../../navigation/types';
import { supabase } from '../../services/supabase';
import { styles } from './style';
import { Ionicons } from '@expo/vector-icons';
import ServiceCard, { ServiceCardData } from '../../components/ServiceCard';
import LoadingScreen from '../../components/LoadingScreen';

type HomeScreenNavigationProp = CompositeNavigationProp<
  BottomTabNavigationProp<TabParamList, 'Início'>,
  NativeStackNavigationProp<AppStackParamList>
>;

interface Category {
  id: number;
  name: string;
  icon: keyof typeof Ionicons.glyphMap;
  color: string;
}

/**
 * Tela inicial do aplicativo LINKA
 * Conecta prestadores de serviços locais com clientes da comunidade
 */
const HomeScreen: React.FC = () => {
  const navigation = useNavigation<HomeScreenNavigationProp>();
  const [isLoading, setIsLoading] = useState(true);
  const [isRefreshing, setIsRefreshing] = useState(false);
  const [userName, setUserName] = useState('');
  const [topRatedServices, setTopRatedServices] = useState<ServiceCardData[]>(
    [],
  );
  const [recentServices, setRecentServices] = useState<ServiceCardData[]>([]);

  const categories: Category[] = [
    { id: 1, name: 'Reparos', icon: 'hammer-outline', color: '#3B82F6' },
    { id: 2, name: 'Aulas', icon: 'school-outline', color: '#8B5CF6' },
    { id: 3, name: 'Cuidados', icon: 'heart-outline', color: '#EC4899' },
    { id: 4, name: 'Jardinagem', icon: 'leaf-outline', color: '#10B981' },
    { id: 5, name: 'Tecnologia', icon: 'laptop-outline', color: '#F59E0B' },
    { id: 6, name: 'Transporte', icon: 'car-outline', color: '#6366F1' },
  ];

  /**
   * Carrega dados do usuário e serviços
   */
  const loadData = async (showLoader = true) => {
    try {
      if (showLoader) setIsLoading(true);
      const {
        data: { user },
      } = await supabase.auth.getUser();
      if (!user) throw new Error('Usuário não autenticado');

      const [profileData, topServicesData, recentServicesData] =
        await Promise.all([
          supabase
            .from('profiles')
            .select('full_name')
            .eq('id', user.id)
            .single(),
          supabase.rpc('get_top_rated_services', { limit_count: 4 }),
          supabase
            .from('services')
            .select('*')
            .order('created_at', { ascending: false })
            .limit(4),
        ]);

      if (profileData.error) throw profileData.error;
      const firstName = profileData.data?.full_name?.split(' ')[0] || 'Usuário';
      setUserName(firstName);
      setTopRatedServices(topServicesData.data || []);
      setRecentServices(recentServicesData.data || []);
    } catch (error) {
      const errorMessage =
        error instanceof Error ? error.message : 'Erro ao carregar informações';
      Alert.alert('Erro', errorMessage);
    } finally {
      setIsLoading(false);
      setIsRefreshing(false);
    }
  };

  /**
   * Atualiza dados ao focar na tela
   */
  useFocusEffect(
    useCallback(() => {
      loadData();
    }, []),
  );

  /**
   * Função de refresh pull-to-refresh
   */
  const handleRefresh = () => {
    setIsRefreshing(true);
    loadData(false);
  };

  /**
   * Navega para tela de pesquisa
   */
  const navigateToSearch = (categoryId?: number) => {
    navigation.navigate('Pesquisar', categoryId ? { categoryId } : undefined);
  };

  /**
   * Navega para adicionar novo serviço
   */
  const handleAddService = () => {
    navigation.navigate('AddService');
  };

  /**
   * Renderiza item de categoria
   */
  const renderCategory = ({ item }: { item: Category }) => (
    <TouchableOpacity
      style={styles.categoryCard}
      onPress={() => navigateToSearch(item.id)}
      activeOpacity={0.7}
    >
      <View
        style={[
          styles.categoryIconWrapper,
          { backgroundColor: `${item.color}15` },
        ]}
      >
        <Ionicons name={item.icon} size={24} color={item.color} />
      </View>
      <Text style={styles.categoryLabel} numberOfLines={1}>
        {item.name}
      </Text>
    </TouchableOpacity>
  );

  /**
   * Renderiza card de serviço
   */
  const renderServiceCard = ({ item }: { item: ServiceCardData }) => (
    <View style={styles.serviceCardWrapper}>
      <ServiceCard service={item} />
    </View>
  );

  /**
   * Renderiza seção vazia
   */
  const renderEmptySection = (message: string) => (
    <View style={styles.emptyContainer}>
      <Ionicons name="cube-outline" size={48} color="#CBD5E1" />
      <Text style={styles.emptyText}>{message}</Text>
    </View>
  );

  if (isLoading) {
    return <LoadingScreen message="Carregando serviços..." />;
  }

  return (
    <SafeAreaView style={styles.container} edges={['top']}>
      <StatusBar barStyle="dark-content" backgroundColor="#FFFFFF" />
      {/* Header */}
      <View style={styles.header}>
        <View style={styles.headerContent}>
          <View style={styles.headerTextContainer}>
            <Text style={styles.greeting}>Olá, {userName}</Text>
            <Text style={styles.subtitle}>
              Encontre serviços na sua comunidade
            </Text>
          </View>
          <TouchableOpacity
            style={styles.addButton}
            onPress={handleAddService}
            activeOpacity={0.8}
          >
            <Ionicons name="add" size={20} color="#FFFFFF" />
            <Text style={styles.addButtonText}>Adicionar</Text>
          </TouchableOpacity>
        </View>
      </View>

      <ScrollView
        style={styles.scrollView}
        showsVerticalScrollIndicator={false}
        refreshControl={
          <RefreshControl
            refreshing={isRefreshing}
            onRefresh={handleRefresh}
            colors={['#3B82F6']}
            tintColor="#3B82F6"
          />
        }
      >
        {/* Categorias */}
        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Categorias</Text>
            <TouchableOpacity onPress={() => navigateToSearch()}>
              <Text style={styles.viewAllText}>Ver todas</Text>
            </TouchableOpacity>
          </View>
          <FlatList
            data={categories}
            renderItem={renderCategory}
            keyExtractor={item => item.id.toString()}
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.categoriesContainer}
          />
        </View>

        {/* Serviços em Destaque */}
        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <View style={styles.sectionTitleRow}>
              <Ionicons name="star" size={20} color="#F59E0B" />
              <Text style={styles.sectionTitle}>Mais Bem Avaliados</Text>
            </View>
            <TouchableOpacity onPress={() => navigateToSearch()}>
              <Text style={styles.viewAllText}>Ver todos</Text>
            </TouchableOpacity>
          </View>
          {topRatedServices.length > 0 ? (
            <FlatList
              data={topRatedServices}
              renderItem={renderServiceCard}
              keyExtractor={item => item.id.toString()}
              horizontal
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={styles.servicesContainer}
            />
          ) : (
            renderEmptySection('Nenhum serviço avaliado ainda')
          )}
        </View>

        {/* Serviços Recentes */}
        <View style={[styles.section, styles.lastSection]}>
          <View style={styles.sectionHeader}>
            <View style={styles.sectionTitleRow}>
              <Ionicons name="time-outline" size={20} color="#6366F1" />
              <Text style={styles.sectionTitle}>Adicionados Recentemente</Text>
            </View>
            <TouchableOpacity onPress={() => navigateToSearch()}>
              <Text style={styles.viewAllText}>Ver todos</Text>
            </TouchableOpacity>
          </View>
          {recentServices.length > 0 ? (
            <FlatList
              data={recentServices}
              renderItem={renderServiceCard}
              keyExtractor={item => item.id.toString()}
              horizontal
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={styles.servicesContainer}
            />
          ) : (
            renderEmptySection('Nenhum serviço recente')
          )}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;
