import React, { useState, useCallback, useEffect } from 'react';
import {
  View,
  Text,
  FlatList,
  TextInput,
  TouchableOpacity,
  Modal,
  StatusBar,
  ActivityIndicator,
} from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { useRoute, RouteProp } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import { supabase } from '../../services/supabase';
import { styles } from './style';
import ServiceCard, { ServiceCardData } from '../../components/ServiceCard';
import LoadingScreen from '../../components/LoadingScreen';
import Toast from '../../components/Toast';
import { useToast } from '../../hooks/useToast';
import useDebounce from '../../hooks/useDebounce';
import type { TabParamList } from '../../navigation/types';

type Category = { id: number; name: string };
type SearchRouteProp = RouteProp<TabParamList, 'Pesquisar'>;

/**
 * Hook para gerenciar a busca, filtros e carregamento de serviços
 */
const useServiceSearch = (initialCategoryId?: number) => {
  const [services, setServices] = useState<ServiceCardData[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategories, setSelectedCategories] = useState<number[]>(
    initialCategoryId ? [initialCategoryId] : [],
  );
  const debouncedSearchTerm = useDebounce(searchTerm, 500);

  const fetchServices = useCallback(async () => {
    setLoading(true);
    try {
      const { data, error } = await supabase.rpc('get_services_with_ratings', {
        search_term:
          debouncedSearchTerm.trim() === '' ? null : debouncedSearchTerm,
        category_ids_filter:
          selectedCategories.length === 0 ? null : selectedCategories,
      });

      if (error) throw error;
      setServices(data || []);
    } catch (error) {
      throw error;
    } finally {
      setLoading(false);
    }
  }, [debouncedSearchTerm, selectedCategories]);

  useEffect(() => {
    fetchServices();
  }, [fetchServices]);

  return {
    services,
    loading,
    searchTerm,
    setSearchTerm,
    selectedCategories,
    setSelectedCategories,
    refetch: fetchServices,
  };
};

/**
 * Modal de filtro por categorias
 */
const FilterModal: React.FC<{
  visible: boolean;
  onClose: () => void;
  onApply: (selectedIds: number[]) => void;
  initialSelectedCategories: number[];
}> = ({ visible, onClose, onApply, initialSelectedCategories }) => {
  const [availableCategories, setAvailableCategories] = useState<Category[]>(
    [],
  );
  const [tempSelected, setTempSelected] = useState<number[]>(
    initialSelectedCategories,
  );
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (visible && availableCategories.length === 0) {
      setLoading(true);
      supabase
        .from('categories')
        .select('id, name')
        .order('name', { ascending: true })
        .then(({ data }) => {
          setAvailableCategories(data || []);
        })
        .finally(() => setLoading(false));
    }
    setTempSelected(initialSelectedCategories);
  }, [visible, initialSelectedCategories, availableCategories.length]);

  const handleToggleCategory = (id: number) => {
    setTempSelected(prev =>
      prev.includes(id) ? prev.filter(catId => catId !== id) : [...prev, id],
    );
  };

  const handleClearAll = () => {
    setTempSelected([]);
  };

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={visible}
      onRequestClose={onClose}
    >
      <View style={styles.modalOverlay}>
        <View style={styles.modalContent}>
          <View style={styles.modalHeader}>
            <Text style={styles.modalTitle}>Filtrar categorias</Text>
            <TouchableOpacity onPress={onClose}>
              <Ionicons name="close-circle" size={30} color="#94A3B8" />
            </TouchableOpacity>
          </View>

          {loading ? (
            <ActivityIndicator
              style={{ marginTop: 20 }}
              size="large"
              color="#3B82F6"
            />
          ) : (
            <>
              {tempSelected.length > 0 && (
                <TouchableOpacity
                  style={styles.clearAllButton}
                  onPress={handleClearAll}
                >
                  <Ionicons
                    name="close-circle-outline"
                    size={20}
                    color="#EF4444"
                  />
                  <Text style={styles.clearAllText}>Limpar todos</Text>
                </TouchableOpacity>
              )}

              <FlatList
                data={availableCategories}
                keyExtractor={item => item.id.toString()}
                renderItem={({ item }) => {
                  const isSelected = tempSelected.includes(item.id);
                  return (
                    <TouchableOpacity
                      style={styles.categoryItem}
                      onPress={() => handleToggleCategory(item.id)}
                    >
                      <Ionicons
                        name={isSelected ? 'checkbox' : 'square-outline'}
                        size={24}
                        color={isSelected ? '#3B82F6' : '#CBD5E1'}
                      />
                      <Text style={styles.categoryText}>{item.name}</Text>
                      {isSelected && (
                        <Ionicons
                          name="checkmark"
                          size={20}
                          color="#3B82F6"
                          style={{ marginLeft: 'auto' }}
                        />
                      )}
                    </TouchableOpacity>
                  );
                }}
              />
            </>
          )}

          <View style={styles.modalFooter}>
            <TouchableOpacity
              style={[styles.modalButton, styles.closeButton]}
              onPress={onClose}
            >
              <Text style={styles.modalButtonText}>Cancelar</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.modalButton, styles.saveButton]}
              onPress={() => onApply(tempSelected)}
            >
              <Text style={[styles.modalButtonText, { color: '#FFF' }]}>
                Aplicar {tempSelected.length > 0 && `(${tempSelected.length})`}
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
};

/**
 * Tela de busca de serviços com filtros e toast para feedback
 */
const SearchScreen: React.FC = () => {
  const route = useRoute<SearchRouteProp>();
  const initialCategoryId = route.params?.categoryId;

  const {
    services,
    loading,
    searchTerm,
    setSearchTerm,
    selectedCategories,
    setSelectedCategories,
    refetch,
  } = useServiceSearch(initialCategoryId);

  const [isModalVisible, setModalVisible] = useState(false);
  const { showToast, toastProps } = useToast();

  const handleApplyFilters = (categories: number[]) => {
    setSelectedCategories(categories);
    setModalVisible(false);

    if (categories.length > 0) {
      showToast(`${categories.length} categoria(s) selecionada(s)`, 'success');
    } else {
      showToast('Filtros removidos', 'info');
    }
  };

  const handleClearSearch = () => {
    setSearchTerm('');
    setSelectedCategories([]);
    showToast('Busca limpa', 'info');
  };

  const renderEmptyList = () => (
    <View style={styles.emptyContainer}>
      <Ionicons
        name="search-circle-outline"
        size={80}
        color="#CBD5E1"
        style={styles.emptyIcon}
      />
      <Text style={styles.emptyTitle}>Nenhum serviço encontrado</Text>
      <Text style={styles.emptySubtitle}>
        {searchTerm || selectedCategories.length > 0
          ? 'Tente ajustar sua busca ou filtros'
          : 'Explore as categorias ou busque por serviços'}
      </Text>
      {(searchTerm || selectedCategories.length > 0) && (
        <TouchableOpacity
          style={styles.clearButton}
          onPress={handleClearSearch}
        >
          <Ionicons name="refresh" size={20} color="#3B82F6" />
          <Text style={styles.clearButtonText}>Limpar busca</Text>
        </TouchableOpacity>
      )}
    </View>
  );

  if (loading && services.length === 0) {
    return <LoadingScreen message="Buscando serviços..." />;
  }

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.safeArea}>
        <StatusBar barStyle="dark-content" />
        <Toast {...toastProps} />

        <FilterModal
          visible={isModalVisible}
          onClose={() => setModalVisible(false)}
          onApply={handleApplyFilters}
          initialSelectedCategories={selectedCategories}
        />

        <View style={styles.header}>
          <View style={styles.inputContainer}>
            <Ionicons name="search" size={20} color="#64748B" />
            <TextInput
              style={styles.searchInput}
              placeholder="Buscar por serviço ou especialidade..."
              value={searchTerm}
              onChangeText={setSearchTerm}
              returnKeyType="search"
              placeholderTextColor="#94A3B8"
            />
            {searchTerm.length > 0 && (
              <TouchableOpacity onPress={() => setSearchTerm('')}>
                <Ionicons name="close-circle" size={20} color="#94A3B8" />
              </TouchableOpacity>
            )}
          </View>

          <View style={styles.filtersContainer}>
            <TouchableOpacity
              style={styles.filterChip}
              onPress={() => setModalVisible(true)}
            >
              <Ionicons name="options-outline" size={16} color="#3B82F6" />
              <Text style={styles.filterChipText}>
                {selectedCategories.length > 0
                  ? `${selectedCategories.length} Categoria(s)`
                  : 'Filtrar'}
              </Text>
            </TouchableOpacity>

            {(searchTerm || selectedCategories.length > 0) && (
              <TouchableOpacity
                style={styles.clearFilterChip}
                onPress={handleClearSearch}
              >
                <Ionicons
                  name="close-circle-outline"
                  size={16}
                  color="#EF4444"
                />
                <Text style={styles.clearFilterText}>Limpar</Text>
              </TouchableOpacity>
            )}
          </View>

          <View style={styles.resultsHeader}>
            <Text style={styles.resultsCount}>
              {services.length}{' '}
              {services.length === 1
                ? 'serviço encontrado'
                : 'serviços encontrados'}
            </Text>
            {loading && <ActivityIndicator size="small" color="#3B82F6" />}
          </View>
        </View>

        <FlatList
          data={services}
          renderItem={({ item }) => <ServiceCard service={item} />}
          keyExtractor={item => item.id.toString()}
          contentContainerStyle={styles.listContentContainer}
          ListEmptyComponent={renderEmptyList}
          refreshing={loading}
          onRefresh={refetch}
        />
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

export default SearchScreen;
