import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  Image,
  ActivityIndicator,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { supabase } from '../../services/supabase';
import { styles } from './style';
import { Picker } from '@react-native-picker/picker';
import * as ImagePicker from 'expo-image-picker';
import { Ionicons } from '@expo/vector-icons';
import { decode } from 'base64-arraybuffer';
import Toast from '../../components/Toast';
import { useToast } from '../../hooks/useToast';
import type { AppStackParamList } from '../../navigation/types';

type Category = {
  id: number;
  name: string;
};

type SelectedImage = {
  uri: string;
  base64: string;
};

type AddServiceNavigationProp = NativeStackNavigationProp<
  AppStackParamList,
  'AddService'
>;

/**
 * Tela para adicionar um novo serviço
 */
const AddServiceScreen: React.FC = () => {
  const navigation = useNavigation<AddServiceNavigationProp>();
  const { showToast, toastProps } = useToast();

  // Form states
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [availability, setAvailability] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<number | null>(null);
  const [categories, setCategories] = useState<Category[]>([]);
  const [selectedImages, setSelectedImages] = useState<SelectedImage[]>([]);

  // UI states
  const [loading, setLoading] = useState(false);
  const [uploadProgress, setUploadProgress] = useState(0);

  // Validation errors
  const [titleError, setTitleError] = useState('');
  const [priceError, setPriceError] = useState('');

  useEffect(() => {
    loadCategories();
  }, []);

  const loadCategories = async () => {
    const { data, error } = await supabase
      .from('categories')
      .select('id, name')
      .order('name', { ascending: true });

    if (error) {
      showToast('Erro ao carregar categorias', 'error');
    } else if (data && data.length > 0) {
      setCategories(data);
      setSelectedCategory(data[0].id);
    }
  };

  const validateForm = (): boolean => {
    let isValid = true;

    // Validate title
    if (!title.trim()) {
      setTitleError('O título é obrigatório');
      isValid = false;
    } else if (title.trim().length < 5) {
      setTitleError('O título deve ter pelo menos 5 caracteres');
      isValid = false;
    } else if (title.trim().length > 100) {
      setTitleError('O título deve ter no máximo 100 caracteres');
      isValid = false;
    } else {
      setTitleError('');
    }

    // Validate price
    if (price && isNaN(parseFloat(price))) {
      setPriceError('Preço inválido');
      isValid = false;
    } else if (price && parseFloat(price) < 0) {
      setPriceError('Preço não pode ser negativo');
      isValid = false;
    } else if (price && parseFloat(price) > 1000000) {
      setPriceError('Preço muito alto');
      isValid = false;
    } else {
      setPriceError('');
    }

    return isValid;
  };

  const pickImage = async () => {
    if (selectedImages.length >= 4) {
      showToast('Você só pode adicionar até 4 fotos', 'warning');
      return;
    }

    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (status !== 'granted') {
      showToast('Precisamos de acesso à sua galeria', 'error');
      return;
    }

    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 0.7,
      base64: true,
    });

    if (!result.canceled && result.assets && result.assets[0].base64) {
      const asset = result.assets[0];
      setSelectedImages([
        ...selectedImages,
        { uri: asset.uri, base64: asset.base64! },
      ]);
      showToast('Imagem adicionada', 'success');
    }
  };

  const removeImage = (uriToRemove: string) => {
    setSelectedImages(selectedImages.filter(img => img.uri !== uriToRemove));
    showToast('Imagem removida', 'info');
  };

  const handleSaveService = async () => {
    if (!validateForm()) {
      showToast('Por favor, corrija os erros no formulário', 'error');
      return;
    }

    if (!selectedCategory) {
      showToast('Selecione uma categoria', 'error');
      return;
    }

    setLoading(true);
    setUploadProgress(0);

    try {
      const {
        data: { user },
      } = await supabase.auth.getUser();
      if (!user) throw new Error('Usuário não autenticado');

      const { data: profileData, error: profileError } = await supabase
        .from('profiles')
        .select('location')
        .eq('id', user.id)
        .single();

      if (profileError) throw profileError;

      if (!profileData?.location) {
        showToast('Defina sua localização no perfil', 'error');
        setLoading(false);
        return;
      }

      // Upload images
      const uploadedPhotoUrls: string[] = [];
      const totalImages = selectedImages.length;

      for (let i = 0; i < selectedImages.length; i++) {
        const image = selectedImages[i];
        const fileExt = image.uri.split('.').pop() || 'png';
        const fileName = `${Date.now()}_${i}.${fileExt}`;
        const filePath = `${user.id}/${fileName}`;

        const { error: uploadError } = await supabase.storage
          .from('service_images')
          .upload(filePath, decode(image.base64), {
            contentType: `image/${fileExt}`,
          });

        if (uploadError) throw uploadError;

        const { data: publicUrlData } = supabase.storage
          .from('service_images')
          .getPublicUrl(filePath);

        uploadedPhotoUrls.push(publicUrlData.publicUrl);
        setUploadProgress(((i + 1) / totalImages) * 100);
      }

      // Save service
      const serviceData = {
        user_id: user.id,
        title: title.trim(),
        description: description.trim() || null,
        category_id: selectedCategory,
        price: price ? parseFloat(price) : null,
        availability: availability.trim() || null,
        photo_urls: uploadedPhotoUrls,
        location: profileData.location,
      };

      const { error: insertError } = await supabase
        .from('services')
        .insert(serviceData);

      if (insertError) throw insertError;

      showToast('Serviço cadastrado com sucesso!', 'success');

      // Reset form
      setTitle('');
      setDescription('');
      setPrice('');
      setAvailability('');
      setSelectedImages([]);
      setTitleError('');
      setPriceError('');
      setUploadProgress(0);

      setTimeout(() => {
        navigation.goBack();
      }, 1500);
    } catch (error) {
      const errorMessage =
        error instanceof Error ? error.message : 'Ocorreu um erro desconhecido';
      showToast(errorMessage, 'error');
    } finally {
      setLoading(false);
    }
  };

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <Toast {...toastProps} />

        <KeyboardAvoidingView
          behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
          style={{ flex: 1 }}
        >
          <ScrollView
            contentContainerStyle={styles.scrollContainer}
            keyboardShouldPersistTaps="handled"
          >
            {/* Basic Information */}
            <View style={styles.formSection}>
              <Text style={styles.sectionTitle}>Informações Básicas</Text>

              <Text style={styles.label}>
                Título do Serviço <Text style={styles.required}>*</Text>
              </Text>
              <TextInput
                style={[styles.input, titleError ? styles.inputError : null]}
                placeholder="Ex: Conserto de vazamentos"
                value={title}
                onChangeText={text => {
                  setTitle(text);
                  setTitleError('');
                }}
                maxLength={100}
              />
              {titleError ? (
                <Text style={styles.errorText}>{titleError}</Text>
              ) : null}
              <Text style={styles.helperText}>
                {title.length}/100 caracteres
              </Text>

              <Text style={styles.label}>
                Categoria <Text style={styles.required}>*</Text>
              </Text>
              <View style={styles.pickerContainer}>
                <Picker
                  selectedValue={selectedCategory}
                  onValueChange={itemValue =>
                    setSelectedCategory(itemValue as number)
                  }
                >
                  {categories.map(cat => (
                    <Picker.Item key={cat.id} label={cat.name} value={cat.id} />
                  ))}
                </Picker>
              </View>

              <Text style={styles.label}>Descrição</Text>
              <TextInput
                style={[styles.input, styles.textArea]}
                placeholder="Descreva o que você oferece..."
                value={description}
                onChangeText={setDescription}
                multiline
                maxLength={500}
              />
              <Text style={styles.helperText}>
                {description.length}/500 caracteres
              </Text>
            </View>

            {/* Service Details */}
            <View style={styles.formSection}>
              <Text style={styles.sectionTitle}>Detalhes do Serviço</Text>

              <Text style={styles.label}>Preço (R$)</Text>
              <TextInput
                style={[styles.input, priceError ? styles.inputError : null]}
                placeholder="Ex: 50.00 (ou deixe em branco)"
                value={price}
                onChangeText={text => {
                  setPrice(text);
                  setPriceError('');
                }}
                keyboardType="numeric"
              />
              {priceError ? (
                <Text style={styles.errorText}>{priceError}</Text>
              ) : null}

              <Text style={styles.label}>Disponibilidade</Text>
              <TextInput
                style={styles.input}
                placeholder="Ex: Seg a Sex, 9h às 18h"
                value={availability}
                onChangeText={setAvailability}
              />
            </View>

            {/* Images */}
            <View style={styles.formSection}>
              <Text style={styles.sectionTitle}>Fotos do Serviço (até 4)</Text>

              <View style={styles.imagePreviewContainer}>
                {selectedImages.map(image => (
                  <View key={image.uri} style={styles.imageWrapper}>
                    <Image
                      source={{ uri: image.uri }}
                      style={styles.imagePreview}
                    />
                    <TouchableOpacity
                      onPress={() => removeImage(image.uri)}
                      style={styles.imageRemoveButton}
                    >
                      <Ionicons name="close" size={16} color="#FFFFFF" />
                    </TouchableOpacity>
                  </View>
                ))}

                {selectedImages.length < 4 && (
                  <TouchableOpacity
                    onPress={pickImage}
                    style={styles.addPhotoButton}
                  >
                    <Ionicons
                      name="add-circle-outline"
                      size={40}
                      color="#3B82F6"
                    />
                    <Text style={styles.addPhotoText}>Adicionar foto</Text>
                  </TouchableOpacity>
                )}
              </View>
            </View>

            {/* Progress Bar */}
            {loading && uploadProgress > 0 && (
              <View style={styles.progressContainer}>
                <Text style={styles.progressText}>Enviando imagens...</Text>
                <View style={styles.progressBar}>
                  <View
                    style={[
                      styles.progressFill,
                      { width: `${uploadProgress}%` },
                    ]}
                  />
                </View>
                <Text style={styles.progressPercentage}>
                  {Math.round(uploadProgress)}%
                </Text>
              </View>
            )}

            {/* Submit Button */}
            <TouchableOpacity
              style={[styles.button, loading && styles.buttonDisabled]}
              onPress={handleSaveService}
              disabled={loading}
            >
              {loading ? (
                <ActivityIndicator color="#FFFFFF" />
              ) : (
                <>
                  <Ionicons name="checkmark-circle" size={20} color="#FFFFFF" />
                  <Text style={styles.buttonText}>Salvar Serviço</Text>
                </>
              )}
            </TouchableOpacity>
          </ScrollView>
        </KeyboardAvoidingView>
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

export default AddServiceScreen;
