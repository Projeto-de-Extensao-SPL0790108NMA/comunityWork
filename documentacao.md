# 📘 Bible

**Autor:** Natanael Santos  
**Data:** 13/11/2025

---

> Este documento contém a estrutura de pastas e todos os códigos do projeto, gerado automaticamente.

## 📂 Estrutura de Pastas

```
📦 Estrutura do Projeto

┣ 📂 .expo/
┃  ┣ 📜 README.md
┃  ┗ 📜 devices.json
┣ 📂 .husky/
┃  ┣ 📂 _/
┃  ┃  ┣ 📜 applypatch-msg
┃  ┃  ┣ 📜 commit-msg
┃  ┃  ┣ 📜 h
┃  ┃  ┣ 📜 husky.sh
┃  ┃  ┣ 📜 post-applypatch
┃  ┃  ┣ 📜 post-checkout
┃  ┃  ┣ 📜 post-commit
┃  ┃  ┣ 📜 post-merge
┃  ┃  ┣ 📜 post-rewrite
┃  ┃  ┣ 📜 pre-applypatch
┃  ┃  ┣ 📜 pre-auto-gc
┃  ┃  ┣ 📜 pre-commit
┃  ┃  ┣ 📜 pre-merge-commit
┃  ┃  ┣ 📜 pre-push
┃  ┃  ┣ 📜 pre-rebase
┃  ┃  ┗ 📜 prepare-commit-msg
┃  ┣ 📜 commit-msg
┃  ┗ 📜 pre-commit
┣ 📜 .prettierrc.json
┣ 📜 App.tsx
┣ 📜 LICENSE
┣ 📜 README.md
┣ 📜 app.json
┣ 📂 assets/
┃  ┣ 📜 adaptive-icon.png
┃  ┣ 📜 favicon.png
┃  ┣ 📜 icon.png
┃  ┗ 📜 splash-icon.png
┣ 📜 commitlint.config.js
┣ 📜 documentacao.md
┣ 📜 eas.json
┣ 📜 eslint.config.mjs
┣ 📜 gerar_documentacao.py
┣ 📜 index.ts
┣ 📜 package.json
┣ 📜 pnpm-lock.yaml
┣ 📂 src/
┃  ┣ 📂 assets/
┃  ┃  ┗ 📜 logo.png
┃  ┣ 📂 components/
┃  ┃  ┣ 📂 LoadingScreen/
┃  ┃  ┃  ┗ 📜 index.tsx
┃  ┃  ┣ 📂 LocationSelectorModal/
┃  ┃  ┃  ┣ 📜 index.tsx
┃  ┃  ┃  ┗ 📜 style.ts
┃  ┃  ┣ 📂 PristineSearch/
┃  ┃  ┃  ┣ 📜 index.tsx
┃  ┃  ┃  ┗ 📜 style.ts
┃  ┃  ┣ 📂 ReviewModal/
┃  ┃  ┃  ┣ 📜 index.tsx
┃  ┃  ┃  ┗ 📜 style.ts
┃  ┃  ┣ 📂 ServiceCard/
┃  ┃  ┃  ┣ 📜 index.tsx
┃  ┃  ┃  ┗ 📜 style.ts
┃  ┃  ┗ 📂 Toast/
┃  ┃     ┗ 📜 index.tsx
┃  ┣ 📂 hooks/
┃  ┃  ┣ 📜 useDebounce.ts
┃  ┃  ┗ 📜 useToast.ts
┃  ┣ 📂 navigation/
┃  ┃  ┣ 📜 AppNavigator.tsx
┃  ┃  ┣ 📜 AuthNavigator.tsx
┃  ┃  ┣ 📜 TabNavigator.tsx
┃  ┃  ┗ 📜 types.ts
┃  ┣ 📂 screens/
┃  ┃  ┣ 📂 addService/
┃  ┃  ┃  ┣ 📜 index.tsx
┃  ┃  ┃  ┗ 📜 style.ts
┃  ┃  ┣ 📂 changePassword/
┃  ┃  ┃  ┣ 📜 index.tsx
┃  ┃  ┃  ┗ 📜 style.ts
┃  ┃  ┣ 📂 chat/
┃  ┃  ┃  ┣ 📜 index.tsx
┃  ┃  ┃  ┗ 📜 style.ts
┃  ┃  ┣ 📂 completeProfile/
┃  ┃  ┃  ┣ 📜 index.tsx
┃  ┃  ┃  ┗ 📜 style.ts
┃  ┃  ┣ 📂 confirmEmail/
┃  ┃  ┃  ┣ 📜 index.tsx
┃  ┃  ┃  ┗ 📜 style.ts
┃  ┃  ┣ 📂 conversations/
┃  ┃  ┃  ┣ 📜 index.tsx
┃  ┃  ┃  ┗ 📜 style.ts
┃  ┃  ┣ 📂 editProfile/
┃  ┃  ┃  ┣ 📜 index.tsx
┃  ┃  ┃  ┗ 📜 style.ts
┃  ┃  ┣ 📂 forgotPassword/
┃  ┃  ┃  ┣ 📜 index.tsx
┃  ┃  ┃  ┗ 📜 style.ts
┃  ┃  ┣ 📂 home/
┃  ┃  ┃  ┣ 📜 index.tsx
┃  ┃  ┃  ┗ 📜 style.ts
┃  ┃  ┣ 📂 login/
┃  ┃  ┃  ┣ 📜 index.tsx
┃  ┃  ┃  ┗ 📜 style.ts
┃  ┃  ┣ 📂 profile/
┃  ┃  ┃  ┣ 📜 index.tsx
┃  ┃  ┃  ┗ 📜 style.ts
┃  ┃  ┣ 📂 register/
┃  ┃  ┃  ┣ 📜 index.tsx
┃  ┃  ┃  ┗ 📜 style.ts
┃  ┃  ┣ 📂 resetPassword/
┃  ┃  ┃  ┣ 📜 index.tsx
┃  ┃  ┃  ┗ 📜 style.ts
┃  ┃  ┣ 📂 search/
┃  ┃  ┃  ┣ 📜 index.tsx
┃  ┃  ┃  ┗ 📜 style.ts
┃  ┃  ┣ 📂 serviceDetail/
┃  ┃  ┃  ┣ 📜 index.tsx
┃  ┃  ┃  ┗ 📜 style.ts
┃  ┃  ┗ 📂 welcome/
┃  ┃     ┣ 📜 index.tsx
┃  ┃     ┗ 📜 style.ts
┃  ┗ 📂 services/
┃     ┗ 📜 supabase.ts
┗ 📜 tsconfig.json
```

## 💻 Códigos do Projeto

### 🗂️ ./App.tsx

```typescript
import React, { useState, useEffect } from 'react';
import { Session } from '@supabase/supabase-js';
import { NavigationContainer, LinkingOptions } from '@react-navigation/native';
import { View, ActivityIndicator, Text } from 'react-native';
import * as Linking from 'expo-linking';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { supabase } from './src/services/supabase';
import AuthNavigator from './src/navigation/AuthNavigator';
import AppNavigator from './src/navigation/AppNavigator';
import { AuthStackParamList, AppStackParamList } from './src/navigation/types';

const prefix = Linking.createURL('/');

/**
 * @description
 * O componente raiz do aplicativo.
 * Suas responsabilidades são:
 * 1. Prover o contexto de Área Segura para toda a aplicação.
 * 2. Gerenciar o estado da sessão de autenticação.
 * 3. Configurar o deep linking para fluxos como a recuperação de senha.
 */
export default function App() {
  const [session, setSession] = useState<Session | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
      setLoading(false);
    });

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
      if (
        _event === 'SIGNED_OUT' ||
        _event === 'SIGNED_IN' ||
        _event === 'PASSWORD_RECOVERY'
      ) {
        setLoading(false);
      }
    });

    return () => subscription.unsubscribe();
  }, []);

  /**
   * @description
   * Configuração do Deep Linking para o React Navigation.
   * Conecta URLs (como as de e-mail) a telas específicas do aplicativo.
   */
  const linking: LinkingOptions<AuthStackParamList & AppStackParamList> = {
    prefixes: [prefix],
    config: {
      screens: {
        ResetPassword: 'reset-password',
      },
    },
  };

  if (loading) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator size="large" color="#3F83F8" />
      </View>
    );
  }

  return (
    <SafeAreaProvider>
      <NavigationContainer
        linking={linking}
        fallback={<Text>Carregando...</Text>}
      >
        {session && session.user ? <AppNavigator /> : <AuthNavigator />}
      </NavigationContainer>
    </SafeAreaProvider>
  );
}

```

### 🗂️ ./commitlint.config.js

```javascript
module.exports = {
  extends: ['@commitlint/config-conventional'],
};
```

### 🗂️ ./.prettierrc.json

```json
{
  "semi": true,
  "singleQuote": true,
  "trailingComma": "all",
  "arrowParens": "avoid",
  "printWidth": 80,
  "tabWidth": 2
}
```

### 🗂️ ./eas.json

```json
{
  "cli": {
    "version": ">= 16.18.0",
    "appVersionSource": "remote"
  },
  "build": {
    "development": {
      "developmentClient": true,
      "distribution": "internal"
    },
    "preview": {
      "distribution": "internal"
    },
    "production": {
      "autoIncrement": true
    }
  },
  "submit": {
    "production": {}
  }
}
```

### 🗂️ ./tsconfig.json

```json
{
  "extends": "expo/tsconfig.base",
  "compilerOptions": {
    "strict": true
  }
}
```

### 🗂️ ./package.json

```json
{
  "name": "my-app",
  "version": "1.0.0",
  "main": "index.ts",
  "scripts": {
    "start": "expo start",
    "android": "expo start --android",
    "ios": "expo start --ios",
    "web": "expo start --web",
    "lint": "eslint . --ext .js,.jsx,.ts,.tsx --report-unused-disable-directives --max-warnings 0",
    "lint:prettier:check": "prettier --check .",
    "prepare": "husky"
  },
  "lint-staged": {
    "*.{js,jsx,ts,tsx}": ["eslint --fix", "prettier --write"]
  },
  "dependencies": {
    "@expo/metro-runtime": "~6.1.2",
    "@expo/vector-icons": "^15.0.3",
    "@react-native-async-storage/async-storage": "2.2.0",
    "@react-native-picker/picker": "2.11.1",
    "@react-navigation/bottom-tabs": "^7.4.7",
    "@react-navigation/native": "^7.1.17",
    "@react-navigation/native-stack": "^7.3.26",
    "@supabase/supabase-js": "^2.58.0",
    "base64-arraybuffer": "^1.0.2",
    "date-fns": "^4.1.0",
    "expo": "54.0.23",
    "expo-font": "~14.0.9",
    "expo-image-picker": "~17.0.8",
    "expo-linking": "~8.0.8",
    "expo-sharing": "~14.0.7",
    "expo-status-bar": "~3.0.8",
    "react": "19.1.0",
    "react-dom": "19.1.0",
    "react-native": "0.81.5",
    "react-native-mask-input": "^1.2.3",
    "react-native-safe-area-context": "~5.6.1",
    "react-native-screens": "~4.16.0",
    "react-native-url-polyfill": "^3.0.0",
    "react-native-web": "^0.21.1"
  },
  "devDependencies": {
    "@babel/core": "^7.28.4",
    "@commitlint/cli": "^20.0.0",
    "@commitlint/config-conventional": "^20.0.0",
    "@eslint/js": "^9.36.0",
    "@types/react": "~19.1.14",
    "@typescript-eslint/eslint-plugin": "^8.44.1",
    "@typescript-eslint/parser": "^8.44.1",
    "eslint": "^9.36.0",
    "eslint-config-prettier": "^10.1.8",
    "eslint-plugin-prettier": "^5.5.4",
    "eslint-plugin-react": "^7.37.5",
    "globals": "^16.4.0",
    "husky": "^9.1.7",
    "jiti": "^2.6.0",
    "lint-staged": "^16.2.1",
    "prettier": "^3.6.2",
    "typescript": "~5.9.2",
    "typescript-eslint": "^8.44.1"
  },
  "pnpm": {
    "overrides": {
      "react": "19.1.0",
      "react-dom": "19.1.0",
      "react-native-renderer": "19.1.0"
    }
  },
  "private": true
}
```

### 🗂️ ./index.ts

```typescript
import { registerRootComponent } from 'expo';

import App from './App';

// registerRootComponent calls AppRegistry.registerComponent('main', () => App);
// It also ensures that whether you load the app in Expo Go or in a native build,
// the environment is set up appropriately
registerRootComponent(App);
```

### 🗂️ ./app.json

```json
{
  "expo": {
    "name": "my-app",
    "slug": "my-app",
    "version": "1.0.0",
    "orientation": "portrait",
    "icon": "./assets/icon.png",
    "userInterfaceStyle": "light",
    "scheme": "servicoscomunitarios",
    "newArchEnabled": true,
    "splash": {
      "image": "./assets/splash-icon.png",
      "resizeMode": "contain",
      "backgroundColor": "#ffffff"
    },
    "ios": {
      "supportsTablet": true
    },
    "android": {
      "adaptiveIcon": {
        "foregroundImage": "./assets/adaptive-icon.png",
        "backgroundColor": "#ffffff"
      },
      "edgeToEdgeEnabled": true,
      "package": "com.desenvolvedornatan21.myapp"
    },
    "web": {
      "favicon": "./assets/favicon.png"
    },
    "extra": {
      "eas": {
        "projectId": "09c7e2f3-f1df-4651-a9f4-eb11547cadd7"
      }
    },
    "plugins": ["expo-font"]
  }
}
```

### 🗂️ ./.expo/devices.json

```json
{
  "devices": []
}
```

### 🗂️ ./src/services/supabase.ts

```typescript
import 'react-native-url-polyfill/auto';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.EXPO_PUBLIC_SUPABASE_URL;
const supabaseAnonKey = process.env.EXPO_PUBLIC_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error(
    'As variáveis de ambiente do Supabase não foram definidas. Verifique seu arquivo .env',
  );
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    storage: AsyncStorage,
    autoRefreshToken: true,
    persistSession: true,
    detectSessionInUrl: false,
  },
});
```

### 🗂️ ./src/screens/home/style.ts

```typescript
import { StyleSheet, Platform, Dimensions } from 'react-native';

const { width: SCREEN_WIDTH } = Dimensions.get('window');
const CARD_WIDTH = SCREEN_WIDTH * 0.42;
const HORIZONTAL_PADDING = 20;

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },

  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
  },

  loadingText: {
    marginTop: 12,
    fontSize: 14,
    color: '#64748B',
    fontWeight: '500',
  },

  // Header Styles
  header: {
    backgroundColor: '#FFFFFF',
    paddingHorizontal: HORIZONTAL_PADDING,
    paddingTop: 16,
    paddingBottom: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#F1F5F9',
    ...Platform.select({
      ios: {
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.05,
        shadowRadius: 3,
      },
      android: {
        elevation: 2,
      },
    }),
  },

  headerContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  headerTextContainer: {
    flex: 1,
    marginRight: 12,
  },

  greeting: {
    fontSize: 24,
    fontWeight: '700',
    color: '#0F172A',
    letterSpacing: -0.5,
  },

  subtitle: {
    fontSize: 14,
    color: '#64748B',
    marginTop: 4,
    fontWeight: '400',
  },

  addButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#3B82F6',
    paddingHorizontal: 16,
    paddingVertical: 10,
    borderRadius: 12,
    gap: 6,
    ...Platform.select({
      ios: {
        shadowColor: '#3B82F6',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.2,
        shadowRadius: 8,
      },
      android: {
        elevation: 4,
      },
    }),
  },

  addButtonText: {
    color: '#FFFFFF',
    fontSize: 14,
    fontWeight: '600',
  },

  // ScrollView
  scrollView: {
    flex: 1,
    backgroundColor: '#F8FAFC',
  },

  // Section Styles
  section: {
    marginTop: 24,
  },

  lastSection: {
    marginBottom: 24,
  },

  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: HORIZONTAL_PADDING,
    marginBottom: 16,
  },

  sectionTitleRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },

  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#0F172A',
    letterSpacing: -0.3,
  },

  viewAllText: {
    fontSize: 14,
    fontWeight: '600',
    color: '#3B82F6',
  },

  // Categories
  categoriesContainer: {
    paddingHorizontal: HORIZONTAL_PADDING,
    gap: 12,
  },

  categoryCard: {
    alignItems: 'center',
    marginRight: 12,
    width: 72,
  },

  categoryIconWrapper: {
    width: 56,
    height: 56,
    borderRadius: 16,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 8,
  },

  categoryLabel: {
    fontSize: 12,
    color: '#475569',
    fontWeight: '500',
    textAlign: 'center',
  },

  // Services
  servicesContainer: {
    paddingHorizontal: HORIZONTAL_PADDING,
    gap: 12,
  },

  serviceCardWrapper: {
    width: CARD_WIDTH,
    marginRight: 12,
  },

  // Empty State
  emptyContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 32,
    paddingHorizontal: HORIZONTAL_PADDING,
  },

  emptyText: {
    marginTop: 12,
    fontSize: 14,
    color: '#94A3B8',
    textAlign: 'center',
  },
});
```

### 🗂️ ./src/screens/home/index.tsx

```typescript
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

```

### 🗂️ ./src/screens/serviceDetail/style.ts

```typescript
import { StyleSheet, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

export const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  scrollContainer: {
    flexGrow: 1,
    backgroundColor: '#FFFFFF',
    paddingBottom: 100, // Espaço para o footer fixo
  },
  errorContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  errorText: {
    marginTop: 16,
    fontSize: 18,
    fontWeight: '600',
    color: '#EF4444',
  },

  // Image Gallery
  imageContainer: {
    position: 'relative',
  },
  image: {
    width: width,
    height: 280,
    backgroundColor: '#F3F4F6',
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageCounterContainer: {
    position: 'absolute',
    bottom: 16,
    right: 16,
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 16,
  },
  imageCounter: {
    color: '#FFFFFF',
    fontSize: 13,
    fontWeight: '600',
  },

  // Content
  contentContainer: {
    padding: 20,
  },
  categoryTagContainer: {
    marginBottom: 12,
  },
  categoryTag: {
    backgroundColor: '#EFF6FF',
    color: '#3B82F6',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 16,
    alignSelf: 'flex-start',
    overflow: 'hidden',
    fontWeight: '600',
    fontSize: 13,
  },
  title: {
    fontSize: 26,
    fontWeight: '700',
    color: '#0F172A',
    marginBottom: 12,
    lineHeight: 32,
  },

  // Rating Summary
  ratingSummary: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
    gap: 8,
  },
  ratingStars: {
    flexDirection: 'row',
    gap: 2,
  },
  ratingText: {
    fontSize: 15,
    fontWeight: '600',
    color: '#64748B',
  },

  // Provider Card
  providerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#F8FAFC',
    borderRadius: 16,
    borderWidth: 1,
    borderColor: '#E2E8F0',
  },
  providerAvatar: {
    width: 48,
    height: 48,
    borderRadius: 24,
    marginRight: 12,
    backgroundColor: '#E2E8F0',
  },
  providerInfo: {
    flex: 1,
  },
  providerLabel: {
    fontSize: 13,
    color: '#64748B',
    marginBottom: 2,
  },
  providerName: {
    fontSize: 17,
    fontWeight: '700',
    color: '#0F172A',
  },

  // Sections
  section: {
    paddingHorizontal: 20,
    paddingVertical: 20,
    borderTopWidth: 1,
    borderTopColor: '#F1F5F9',
  },
  sectionTitle: {
    fontSize: 19,
    fontWeight: '700',
    color: '#0F172A',
    marginBottom: 12,
  },
  description: {
    fontSize: 16,
    color: '#475569',
    lineHeight: 24,
  },

  // Availability
  availabilityCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#EFF6FF',
    padding: 14,
    borderRadius: 12,
    gap: 10,
  },
  availabilityText: {
    fontSize: 15,
    fontWeight: '600',
    color: '#1E40AF',
    flex: 1,
  },

  // Reviews
  reviewsHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  addReviewButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#EFF6FF',
    paddingHorizontal: 14,
    paddingVertical: 8,
    borderRadius: 20,
    gap: 6,
  },
  addReviewButtonText: {
    color: '#3B82F6',
    fontWeight: '700',
    fontSize: 14,
  },
  noReviewsContainer: {
    alignItems: 'center',
    paddingVertical: 32,
  },
  noReviewsText: {
    marginTop: 12,
    fontSize: 15,
    color: '#94A3B8',
    textAlign: 'center',
  },
  reviewItem: {
    paddingVertical: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#F1F5F9',
  },
  reviewHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  reviewAvatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 12,
    backgroundColor: '#E2E8F0',
  },
  reviewAuthorInfo: {
    flex: 1,
  },
  reviewAuthor: {
    fontSize: 16,
    fontWeight: '700',
    color: '#0F172A',
  },
  reviewDate: {
    fontSize: 13,
    color: '#94A3B8',
    marginTop: 2,
  },
  reviewStars: {
    flexDirection: 'row',
    gap: 2,
  },
  reviewComment: {
    fontSize: 15,
    color: '#475569',
    lineHeight: 22,
  },

  // Footer
  footer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 16,
    paddingBottom: 20,
    borderTopWidth: 1,
    borderTopColor: '#E2E8F0',
    backgroundColor: '#FFFFFF',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: -2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 8,
  },
  priceContainer: {
    flex: 1,
  },
  priceLabel: {
    fontSize: 13,
    color: '#64748B',
    marginBottom: 2,
  },
  priceValue: {
    fontSize: 24,
    fontWeight: '700',
    color: '#0F172A',
  },
  actionButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#3B82F6',
    paddingVertical: 14,
    paddingHorizontal: 24,
    borderRadius: 12,
    gap: 8,
    shadowColor: '#3B82F6',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 4,
  },
  actionButtonDisabled: {
    backgroundColor: '#94A3B8',
    shadowOpacity: 0,
  },
  actionButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '700',
  },
});
```

### 🗂️ ./src/screens/serviceDetail/index.tsx

```typescript
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

```

### 🗂️ ./src/screens/chat/style.ts

```typescript
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8FAFC',
  },
  keyboardAvoidingContainer: {
    flex: 1,
  },
  messageList: {
    flex: 1,
    paddingHorizontal: 16,
  },

  // Message Bubbles
  bubbleContainer: {
    maxWidth: '80%',
    marginBottom: 12,
  },
  myBubbleContainer: {
    alignSelf: 'flex-end',
  },
  recipientBubbleContainer: {
    alignSelf: 'flex-start',
  },
  messageBubble: {
    paddingHorizontal: 16,
    paddingVertical: 10,
    borderRadius: 18,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 2,
    elevation: 1,
  },
  recipientBubble: {
    backgroundColor: '#FFFFFF',
    borderBottomLeftRadius: 4,
  },
  myBubble: {
    backgroundColor: '#3B82F6',
    borderBottomRightRadius: 4,
  },
  messageText: {
    fontSize: 16,
    lineHeight: 22,
  },
  myMessageText: {
    color: '#FFFFFF',
  },
  recipientMessageText: {
    color: '#0F172A',
  },

  // Timestamps
  timestamp: {
    fontSize: 11,
    color: '#94A3B8',
    marginTop: 4,
    fontWeight: '500',
  },
  myTimestamp: {
    alignSelf: 'flex-end',
  },
  recipientTimestamp: {
    alignSelf: 'flex-start',
  },

  // Date Separator
  dateSeparator: {
    alignSelf: 'center',
    backgroundColor: '#E2E8F0',
    borderRadius: 12,
    paddingHorizontal: 12,
    paddingVertical: 6,
    marginVertical: 16,
  },
  dateSeparatorText: {
    color: '#64748B',
    fontWeight: '600',
    fontSize: 12,
  },

  // Empty State
  emptyContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 32,
  },
  emptyTitle: {
    fontSize: 20,
    fontWeight: '700',
    color: '#0F172A',
    marginTop: 16,
    marginBottom: 8,
  },
  emptySubtitle: {
    fontSize: 15,
    color: '#64748B',
    textAlign: 'center',
    lineHeight: 22,
  },

  // Input Container
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    paddingHorizontal: 16,
    paddingTop: 12,
    borderTopWidth: 1,
    borderTopColor: '#E2E8F0',
    backgroundColor: '#FFFFFF',
    gap: 12,
  },
  input: {
    flex: 1,
    minHeight: 44,
    maxHeight: 100,
    backgroundColor: '#F8FAFC',
    borderRadius: 22,
    paddingHorizontal: 16,
    paddingTop: 12,
    paddingBottom: 12,
    fontSize: 16,
    color: '#0F172A',
    borderWidth: 1,
    borderColor: '#E2E8F0',
  },
  sendButton: {
    backgroundColor: '#3B82F6',
    width: 44,
    height: 44,
    borderRadius: 22,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#3B82F6',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 3,
  },
  sendButtonDisabled: {
    backgroundColor: '#CBD5E1',
    shadowOpacity: 0,
  },
});
```

### 🗂️ ./src/screens/chat/index.tsx

```typescript
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

```

### 🗂️ ./src/screens/profile/style.ts

```typescript
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#F9F9F9',
  },
  scrollContainer: {
    paddingBottom: 20,
  },
  profileHeader: {
    backgroundColor: '#FFFFFF',
    paddingVertical: 24,
    paddingHorizontal: 20,
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#E2E8F0',
  },
  avatar: {
    width: 90,
    height: 90,
    borderRadius: 45,
    marginBottom: 12,
    backgroundColor: '#E2E8F0',
  },
  avatarPlaceholder: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  fullName: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#1A202C',
  },
  editProfileButton: {
    marginTop: 6,
  },
  editProfileText: {
    fontSize: 16,
    color: '#3F83F8',
    fontWeight: '500',
  },
  sectionTitle: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#718096',
    textTransform: 'uppercase',
    marginTop: 24,
    marginBottom: 8,
    paddingHorizontal: 20,
  },
  menuGroup: {
    backgroundColor: '#FFFFFF',
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: '#E2E8F0',
  },
  menuItem: {
    paddingHorizontal: 20,
    paddingVertical: 16,
    flexDirection: 'row',
    alignItems: 'center',
  },
  menuItemBorder: {
    borderBottomWidth: 1,
    borderBottomColor: '#E2E8F0',
  },
  menuItemContent: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  menuItemText: {
    fontSize: 17,
    marginLeft: 16,
    color: '#2D3748',
  },
  logoutButton: {
    margin: 20,
    backgroundColor: '#FFFFFF',
    paddingVertical: 16,
    borderRadius: 12,
    alignItems: 'center',
    borderWidth: 1.5,
    borderColor: '#E2E8F0',
  },
  logoutButtonText: {
    color: '#E53E3E',
    fontSize: 17,
    fontWeight: '600',
  },
});
```

### 🗂️ ./src/screens/profile/index.tsx

```typescript
import React, { useState, useCallback } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Alert,
  ActivityIndicator,
  Image,
  ScrollView,
  StatusBar,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation, useFocusEffect } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { supabase } from '../../services/supabase';
import type { AppStackParamList } from '../../navigation/types';
import { styles } from './style';
import { Ionicons } from '@expo/vector-icons';

type ProfileData = {
  fullName: string | null;
  avatarUrl: string | null;
};
type MenuItemProps = {
  icon: keyof typeof Ionicons.glyphMap;
  text: string;
  onPress: () => void;
  isLast?: boolean;
};
type ProfileScreenNavigationProp = NativeStackNavigationProp<
  AppStackParamList,
  'MainTabs'
>;

/**
 * Hook para buscar e gerenciar os dados do perfil do usuário.
 * Atualiza os dados sempre que a tela entra em foco.
 */
const useUserProfile = () => {
  const [profile, setProfile] = useState<ProfileData>({
    fullName: null,
    avatarUrl: null,
  });
  const [loading, setLoading] = useState(true);

  // useFocusEffect com useCallback garante que a função de busca seja recriada
  // apenas se necessário e executada toda vez que a tela focar.
  useFocusEffect(
    useCallback(() => {
      const fetchProfile = async () => {
        try {
          setLoading(true);
          const {
            data: { user },
          } = await supabase.auth.getUser();
          if (!user) throw new Error('Usuário não autenticado');

          const { data, error } = await supabase
            .from('profiles')
            .select(`full_name, avatar_url`)
            .eq('id', user.id)
            .single();

          if (error && error.code !== 'PGRST116') throw error;

          if (data) {
            setProfile({
              fullName: data.full_name,
              avatarUrl: data.avatar_url
                ? `${data.avatar_url}?t=${new Date().getTime()}`
                : null,
            });
          }
        } catch (error) {
          const message =
            error instanceof Error
              ? error.message
              : 'Ocorreu um erro desconhecido.';
          Alert.alert('Erro ao carregar perfil', message);
        } finally {
          setLoading(false);
        }
      };
      fetchProfile();
    }, []),
  );

  return { profile, loading };
};

/**
 * Subcomponente reutilizável para renderizar um item do menu do perfil.
 */
const MenuItem: React.FC<MenuItemProps> = ({
  icon,
  text,
  onPress,
  isLast = false,
}) => (
  <TouchableOpacity
    style={[styles.menuItem, !isLast && styles.menuItemBorder]}
    onPress={onPress}
  >
    <View style={styles.menuItemContent}>
      <Ionicons name={icon} size={24} color="#718096" />
      <Text style={styles.menuItemText}>{text}</Text>
    </View>
    <Ionicons name="chevron-forward-outline" size={24} color="#CBD5E0" />
  </TouchableOpacity>
);

/**
 * Tela de Perfil do usuário. Exibe um resumo das informações e serve como
 * ponto de entrada para o gerenciamento da conta e outras seções do app.
 */
const ProfileScreen: React.FC = () => {
  const navigation = useNavigation<ProfileScreenNavigationProp>();
  const { profile, loading } = useUserProfile();

  /**
   * Lida com o logout do usuário, exibindo um `Alert` de confirmação antes.
   */
  const handleSignOut = () => {
    Alert.alert('Sair da Conta', 'Você tem certeza que deseja sair?', [
      { text: 'Cancelar', style: 'cancel' },
      {
        text: 'Sair',
        style: 'destructive',
        onPress: () => supabase.auth.signOut(),
      },
    ]);
  };

  if (loading) {
    return (
      <SafeAreaView style={styles.safeArea}>
        <ActivityIndicator style={{ flex: 1 }} size="large" />
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar barStyle="dark-content" />
      <ScrollView style={styles.scrollContainer}>
        <View style={styles.profileHeader}>
          {profile.avatarUrl ? (
            <Image source={{ uri: profile.avatarUrl }} style={styles.avatar} />
          ) : (
            <View style={[styles.avatar, styles.avatarPlaceholder]}>
              <Ionicons name="person" size={50} color="#CBD5E0" />
            </View>
          )}
          <Text style={styles.fullName}>
            {profile.fullName || 'Complete seu Perfil'}
          </Text>
          <TouchableOpacity
            style={styles.editProfileButton}
            onPress={() => navigation.navigate('EditProfile')}
          >
            <Text style={styles.editProfileText}>Editar perfil</Text>
          </TouchableOpacity>
        </View>

        <Text style={styles.sectionTitle}>Minha Conta</Text>
        <View style={styles.menuGroup}>
          <MenuItem
            icon="key-outline"
            text="Alterar senha"
            onPress={() => navigation.navigate('ChangePassword')}
          />
          <MenuItem
            icon="receipt-outline"
            text="Meus Serviços"
            onPress={() =>
              Alert.alert(
                'Em breve!',
                'Aqui você poderá ver e gerenciar os serviços que cadastrou.',
              )
            }
            isLast={true}
          />
        </View>

        <Text style={styles.sectionTitle}>Ajuda</Text>
        <View style={styles.menuGroup}>
          <MenuItem
            icon="help-circle-outline"
            text="Central de Ajuda"
            onPress={() =>
              Alert.alert('Em breve!', 'Funcionalidade em desenvolvimento.')
            }
          />
          <MenuItem
            icon="document-text-outline"
            text="Termos de uso"
            onPress={() =>
              Alert.alert('Em breve!', 'Funcionalidade em desenvolvimento.')
            }
            isLast={true}
          />
        </View>

        <TouchableOpacity style={styles.logoutButton} onPress={handleSignOut}>
          <Text style={styles.logoutButtonText}>Sair</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ProfileScreen;

```

### 🗂️ ./src/screens/search/style.ts

```typescript
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  header: {
    padding: 16,
    backgroundColor: '#FFFFFF',
    borderBottomWidth: 1,
    borderBottomColor: '#F1F5F9',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F8FAFC',
    borderRadius: 12,
    paddingHorizontal: 16,
    borderWidth: 1,
    borderColor: '#E2E8F0',
  },
  searchInput: {
    flex: 1,
    height: 48,
    fontSize: 16,
    marginLeft: 12,
    color: '#0F172A',
  },
  filtersContainer: {
    flexDirection: 'row',
    marginTop: 12,
    gap: 8,
  },
  filterChip: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#EFF6FF',
    borderRadius: 20,
    paddingVertical: 8,
    paddingHorizontal: 16,
    gap: 6,
    borderWidth: 1,
    borderColor: '#BFDBFE',
  },
  filterChipText: {
    color: '#3B82F6',
    fontWeight: '600',
    fontSize: 14,
  },
  clearFilterChip: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FEF2F2',
    borderRadius: 20,
    paddingVertical: 8,
    paddingHorizontal: 16,
    gap: 6,
    borderWidth: 1,
    borderColor: '#FECACA',
  },
  clearFilterText: {
    color: '#EF4444',
    fontWeight: '600',
    fontSize: 14,
  },
  resultsHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 12,
    paddingTop: 12,
    borderTopWidth: 1,
    borderTopColor: '#F1F5F9',
  },
  resultsCount: {
    fontSize: 14,
    color: '#64748B',
    fontWeight: '500',
  },
  listContentContainer: {
    padding: 16,
  },
  emptyContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 60,
    paddingHorizontal: 32,
  },
  emptyIcon: {
    marginBottom: 16,
  },
  emptyTitle: {
    fontSize: 20,
    fontWeight: '700',
    color: '#0F172A',
    marginBottom: 8,
    textAlign: 'center',
  },
  emptySubtitle: {
    fontSize: 15,
    color: '#64748B',
    textAlign: 'center',
    lineHeight: 22,
    marginBottom: 24,
  },
  clearButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#EFF6FF',
    paddingHorizontal: 20,
    paddingVertical: 12,
    borderRadius: 12,
    gap: 8,
  },
  clearButtonText: {
    color: '#3B82F6',
    fontWeight: '600',
    fontSize: 15,
  },

  // Modal Styles
  modalOverlay: {
    flex: 1,
    justifyContent: 'flex-end',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  modalContent: {
    backgroundColor: '#FFFFFF',
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    padding: 24,
    maxHeight: '80%',
  },
  modalHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  modalTitle: {
    fontSize: 22,
    fontWeight: '700',
    color: '#0F172A',
  },
  clearAllButton: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'flex-start',
    backgroundColor: '#FEF2F2',
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 8,
    gap: 6,
    marginBottom: 16,
  },
  clearAllText: {
    color: '#EF4444',
    fontWeight: '600',
    fontSize: 14,
  },
  categoryItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#F1F5F9',
    gap: 12,
  },
  categoryText: {
    fontSize: 17,
    color: '#0F172A',
    fontWeight: '500',
  },
  modalFooter: {
    flexDirection: 'row',
    gap: 12,
    marginTop: 20,
    paddingTop: 20,
    borderTopWidth: 1,
    borderTopColor: '#F1F5F9',
  },
  modalButton: {
    flex: 1,
    paddingVertical: 16,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
  },
  closeButton: {
    backgroundColor: '#F8FAFC',
    borderWidth: 1,
    borderColor: '#E2E8F0',
  },
  saveButton: {
    backgroundColor: '#3B82F6',
  },
  modalButtonText: {
    fontSize: 16,
    fontWeight: '700',
    color: '#0F172A',
  },
});
```

### 🗂️ ./src/screens/search/index.tsx

```typescript
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
        .then(({ data, error }) => {
          if (!error) {
            setAvailableCategories(data || []);
          }
          setLoading(false);
        });
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

```

### 🗂️ ./src/screens/editProfile/style.ts

```typescript
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#F9F9F9',
  },
  label: {
    fontSize: 16,
    color: '#666',
    marginBottom: 5,
    marginTop: 15,
  },
  input: {
    height: 50,
    backgroundColor: '#FFFFFF',
    borderColor: '#CCCCCC',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 15,
    fontSize: 16,
    color: '#333',
  },
  button: {
    backgroundColor: '#3F83F8',
    paddingVertical: 15,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 30,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: 'bold',
  },
  avatarContainer: {
    alignItems: 'center',
    marginBottom: 20,
    marginTop: 10,
  },
  avatar: {
    width: 120,
    height: 120,
    borderRadius: 60,
    backgroundColor: '#EFEFEF',
    justifyContent: 'center',
    alignItems: 'center',
  },
  avatarPlaceholder: {
    width: 120,
    height: 120,
    borderRadius: 60,
    backgroundColor: '#EFEFEF',
    justifyContent: 'center',
    alignItems: 'center',
  },
  editAvatarButton: {
    position: 'absolute',
    bottom: 0,
    right: 120,
    backgroundColor: '#3F83F8',
    borderRadius: 20,
    padding: 8,
    borderWidth: 2,
    borderColor: '#FFF',
  },
  locationButton: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 50,
    backgroundColor: '#FFFFFF',
    borderColor: '#CCCCCC',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 15,
  },
  locationText: {
    flex: 1,
    fontSize: 16,
    color: '#333',
  },
  locationPlaceholder: {
    flex: 1,
    fontSize: 16,
    color: '#999',
  },
});
```

### 🗂️ ./src/screens/editProfile/index.tsx

```typescript
import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Alert,
  SafeAreaView,
  ActivityIndicator,
  Image,
  ScrollView,
} from 'react-native';
import { supabase } from '../../services/supabase';
import { styles } from './style';
import * as ImagePicker from 'expo-image-picker';
import { Ionicons } from '@expo/vector-icons';
import { decode } from 'base64-arraybuffer';
import LocationSelectorModal from '../../components/LocationSelectorModal';

type Profile = {
  username: string;
  full_name: string;
  phone: string;
  avatar_url: string | null;
  location: string;
};

/**
 * Hook para gerenciar os dados do perfil do usuário.
 * Encapsula a lógica de buscar, atualizar o perfil e o avatar.
 */
const useProfile = () => {
  const [profile, setProfile] = useState<Partial<Profile>>({});
  const [loading, setLoading] = useState(true);
  const [isDirty, setIsDirty] = useState(false);

  useEffect(() => {
    const fetchProfile = async () => {
      setLoading(true);
      try {
        const {
          data: { user },
        } = await supabase.auth.getUser();
        if (!user) throw new Error('Usuário não encontrado');

        const { data, error } = await supabase
          .from('profiles')
          .select(`username, full_name, phone, avatar_url, location`)
          .eq('id', user.id)
          .single();

        if (error && error.code !== 'PGRST116') throw error;
        if (data) setProfile(data);
      } catch (error) {
        const message =
          error instanceof Error
            ? error.message
            : 'Ocorreu um erro desconhecido.';
        Alert.alert('Erro ao carregar dados', message);
      } finally {
        setLoading(false);
      }
    };
    fetchProfile();
  }, []);

  /** Atualiza um campo específico do perfil */
  const updateProfileField = (field: keyof Profile, value: string | null) => {
    setProfile(prev => ({ ...prev, [field]: value }));
    setIsDirty(true);
  };

  /** Salva todas as mudanças do perfil no banco de dados */
  const saveProfileChanges = async () => {
    if (!isDirty) {
      Alert.alert('Nenhuma alteração', 'Não há nenhuma alteração para salvar.');
      return;
    }
    setLoading(true);
    try {
      const {
        data: { user },
      } = await supabase.auth.getUser();
      if (!user) throw new Error('Usuário não encontrado');

      const updates = { ...profile, updated_at: new Date() };
      const { error } = await supabase
        .from('profiles')
        .update(updates)
        .eq('id', user.id);
      if (error) throw error;

      Alert.alert('Sucesso!', 'Seu perfil foi atualizado.');
      setIsDirty(false); // Reseta o estado de mudanças
    } catch (error) {
      const message =
        error instanceof Error
          ? error.message
          : 'Ocorreu um erro desconhecido.';
      Alert.alert('Erro ao atualizar', message);
    } finally {
      setLoading(false);
    }
  };

  /** Faz o upload de um novo avatar */
  const uploadAvatar = async (base64Image: string) => {
    setLoading(true);
    try {
      const {
        data: { user },
      } = await supabase.auth.getUser();
      if (!user) throw new Error('Usuário não encontrado');

      const filePath = `${user.id}/${new Date().getTime()}.png`;
      const { error: uploadError } = await supabase.storage
        .from('avatars')
        .upload(filePath, decode(base64Image), {
          contentType: 'image/png',
          upsert: true,
        });

      if (uploadError) throw uploadError;

      const { data: publicUrlData } = supabase.storage
        .from('avatars')
        .getPublicUrl(filePath);
      const newAvatarUrl = `${publicUrlData.publicUrl}?t=${new Date().getTime()}`;

      await supabase
        .from('profiles')
        .update({ avatar_url: newAvatarUrl, updated_at: new Date() })
        .eq('id', user.id);
      updateProfileField('avatar_url', newAvatarUrl);

      Alert.alert('Sucesso!', 'Foto de perfil atualizada.');
    } catch (error) {
      const message =
        error instanceof Error
          ? error.message
          : 'Ocorreu um erro desconhecido.';
      Alert.alert('Erro no upload', message);
    } finally {
      setLoading(false);
    }
  };

  return {
    profile,
    loading,
    updateProfileField,
    saveProfileChanges,
    uploadAvatar,
  };
};

const EditProfileScreen = () => {
  const {
    profile,
    loading,
    updateProfileField,
    saveProfileChanges,
    uploadAvatar,
  } = useProfile();
  const [isLocationModalVisible, setLocationModalVisible] = useState(false);

  const handlePickImage = async () => {
    Alert.alert('Alterar Foto', 'Escolha uma opção', [
      { text: 'Tirar Foto', onPress: () => selectImage('camera') },
      { text: 'Escolher da Galeria', onPress: () => selectImage('gallery') },
      { text: 'Cancelar', style: 'cancel' },
    ]);
  };

  const selectImage = async (source: 'camera' | 'gallery') => {
    const options: ImagePicker.ImagePickerOptions = {
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [1, 1],
      quality: 0.7,
      base64: true,
    };

    let result;
    if (source === 'camera') {
      await ImagePicker.requestCameraPermissionsAsync();
      result = await ImagePicker.launchCameraAsync(options);
    } else {
      await ImagePicker.requestMediaLibraryPermissionsAsync();
      result = await ImagePicker.launchImageLibraryAsync(options);
    }

    if (!result.canceled && result.assets && result.assets[0].base64) {
      uploadAvatar(result.assets[0].base64);
    }
  };

  if (loading && !profile.avatar_url) {
    return (
      <ActivityIndicator
        style={{ flex: 1, justifyContent: 'center' }}
        size="large"
      />
    );
  }

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#F9F9F9' }}>
      <LocationSelectorModal
        visible={isLocationModalVisible}
        onClose={() => setLocationModalVisible(false)}
        onLocationSelect={selectedLocation => {
          updateProfileField('location', selectedLocation);
          setLocationModalVisible(false); // Fecha o modal após a seleção
        }}
      />
      <ScrollView style={styles.container}>
        <View style={styles.avatarContainer}>
          <Image
            source={{ uri: profile.avatar_url || undefined }}
            style={styles.avatar}
          />
          <TouchableOpacity
            onPress={handlePickImage}
            style={styles.editAvatarButton}
          >
            <Ionicons name="camera" size={20} color="#FFF" />
          </TouchableOpacity>
        </View>

        <Text style={styles.label}>Nome de Usuário</Text>
        <TextInput
          style={styles.input}
          value={profile.username}
          onChangeText={text => updateProfileField('username', text)}
        />

        <Text style={styles.label}>Nome e Sobrenome</Text>
        <TextInput
          style={styles.input}
          value={profile.full_name}
          onChangeText={text => updateProfileField('full_name', text)}
        />

        <Text style={styles.label}>Telefone</Text>
        <TextInput
          style={styles.input}
          value={profile.phone}
          onChangeText={text => updateProfileField('phone', text)}
          keyboardType="phone-pad"
        />

        <Text style={styles.label}>Minha Localização</Text>
        <TouchableOpacity
          style={styles.locationButton}
          onPress={() => setLocationModalVisible(true)}
        >
          <Text
            style={
              profile.location
                ? styles.locationText
                : styles.locationPlaceholder
            }
          >
            {profile.location || 'Clique para selecionar sua cidade'}
          </Text>
          <Ionicons name="chevron-down" size={20} color="#666" />
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.button}
          onPress={saveProfileChanges}
          disabled={loading}
        >
          {loading ? (
            <ActivityIndicator color="#FFF" />
          ) : (
            <Text style={styles.buttonText}>Salvar Alterações</Text>
          )}
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
};

export default EditProfileScreen;

```

### 🗂️ ./src/screens/confirmEmail/style.ts

```typescript
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  keyboardAvoidingContainer: {
    flex: 1,
  },
  contentContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  icon: {
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 15,
    color: '#333',
  },
  message: {
    fontSize: 16,
    textAlign: 'center',
    color: '#666',
    marginBottom: 30,
    lineHeight: 24,
  },
  otpInput: {
    width: '90%',
    height: 50,
    backgroundColor: '#F7FAFC',
    borderWidth: 1,
    borderColor: '#E2E8F0',
    borderRadius: 8,
    textAlign: 'center',
    fontSize: 22,
    letterSpacing: 10,
    marginBottom: 20,
    color: '#2D3748',
  },
  button: {
    width: '90%',
    backgroundColor: '#3F83F8',
    paddingVertical: 15,
    borderRadius: 8,
    alignItems: 'center',
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: 'bold',
  },
  errorText: {
    color: '#E53E3E',
    marginBottom: 15,
    fontSize: 14,
    textAlign: 'center',
  },
  resendContainer: {
    marginTop: 30,
    alignItems: 'center',
  },
  resendText: {
    fontSize: 14,
    color: '#718096',
  },
  resendButton: {
    marginTop: 5,
  },
  resendButtonText: {
    fontSize: 14,
    color: '#3F83F8',
    fontWeight: 'bold',
  },
  resendStatusText: {
    fontSize: 14,
    color: '#48BB78',
    marginTop: 10,
  },
});
```

### 🗂️ ./src/screens/confirmEmail/index.tsx

```typescript
import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
  ActivityIndicator,
  KeyboardAvoidingView,
  Platform,
  StatusBar,
} from 'react-native';
import { useRoute, RouteProp } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import { supabase } from '../../services/supabase';
import { styles } from './style';
import type { AuthStackParamList } from '../../navigation/types';

type ConfirmEmailRouteProp = RouteProp<AuthStackParamList, 'ConfirmEmail'>;
const COOLDOWN_SECONDS = 60;

/**
 * Hook customizado para gerenciar um contador regressivo.
 * @param initialCount O número inicial de segundos para a contagem.
 * @returns Um objeto com o tempo restante e uma função para reiniciar o contador.
 */
const useCountdown = (initialCount: number) => {
  const [countdown, setCountdown] = useState(initialCount);
  const isRunning = countdown > 0;

  useEffect(() => {
    if (!isRunning) return;

    const timerId = setInterval(() => {
      setCountdown(current => current - 1);
    }, 1000);

    return () => clearInterval(timerId);
  }, [isRunning]);

  const resetCountdown = () => setCountdown(initialCount);

  return { countdown, isRunning, resetCountdown };
};

/**
 * Tela para o usuário inserir o código de verificação (OTP) enviado para seu e-mail.
 */
const ConfirmEmailScreen: React.FC = () => {
  const route = useRoute<ConfirmEmailRouteProp>();
  const { email } = route.params;

  const [otp, setOtp] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [resendStatus, setResendStatus] = useState('');
  const { countdown, isRunning, resetCountdown } =
    useCountdown(COOLDOWN_SECONDS);

  /**
   * Valida e envia o código OTP para o Supabase para verificação.
   */
  const handleConfirmOtp = async () => {
    setError('');
    if (otp.length !== 6) {
      setError('O código deve ter 6 dígitos.');
      return;
    }

    setLoading(true);
    const { error: verifyError } = await supabase.auth.verifyOtp({
      email: email,
      token: otp,
      type: 'signup',
    });

    if (verifyError) {
      setError('Código inválido ou expirado. Tente novamente.');
    }
    setLoading(false);
  };

  /**
   * Solicita o reenvio de um novo código OTP para o e-mail do usuário.
   */
  const handleResendOtp = async () => {
    if (isRunning || loading) return;

    setLoading(true);
    setResendStatus('');
    setError('');

    const { error: resendError } = await supabase.auth.resend({
      type: 'signup',
      email: email,
    });

    if (resendError) {
      setError('Ocorreu um erro ao reenviar o código.');
    } else {
      setResendStatus('Um novo código foi enviado para seu e-mail.');
      resetCountdown(); // Reinicia o contador
    }
    setLoading(false);
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar barStyle="dark-content" />
      <KeyboardAvoidingView
        style={styles.keyboardAvoidingContainer}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      >
        <View style={styles.contentContainer}>
          <Ionicons
            name="mail-open-outline"
            size={80}
            color="#3F83F8"
            style={styles.icon}
          />
          <Text style={styles.title}>Verifique seu E-mail</Text>
          <Text style={styles.message}>
            Enviamos um código de 6 dígitos para {email}. Por favor, insira-o
            abaixo.
          </Text>
          <TextInput
            style={styles.otpInput}
            value={otp}
            onChangeText={setOtp}
            keyboardType="number-pad"
            maxLength={6}
            placeholder="------"
            placeholderTextColor="#CBD5E0"
          />

          {error ? <Text style={styles.errorText}>{error}</Text> : null}

          <TouchableOpacity
            style={styles.button}
            onPress={handleConfirmOtp}
            disabled={loading}
          >
            {loading ? (
              <ActivityIndicator color="#FFFFFF" />
            ) : (
              <Text style={styles.buttonText}>Confirmar e Continuar</Text>
            )}
          </TouchableOpacity>

          <View style={styles.resendContainer}>
            {!isRunning ? (
              <TouchableOpacity
                style={styles.resendButton}
                onPress={handleResendOtp}
                disabled={loading}
              >
                <Text style={styles.resendButtonText}>
                  Não recebeu? Reenviar código
                </Text>
              </TouchableOpacity>
            ) : (
              <Text style={styles.resendText}>
                Você pode reenviar o código em {countdown} segundos
              </Text>
            )}
            {resendStatus ? (
              <Text style={styles.resendStatusText}>{resendStatus}</Text>
            ) : null}
          </View>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default ConfirmEmailScreen;

```

### 🗂️ ./src/screens/login/style.ts

```typescript
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  scrollContainer: {
    flexGrow: 1,
    justifyContent: 'center',
    padding: 24,
  },

  // Header
  headerContainer: {
    alignItems: 'center',
    marginBottom: 40,
  },
  iconContainer: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: '#EFF6FF',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 16,
  },
  title: {
    fontSize: 28,
    fontWeight: '700',
    color: '#0F172A',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 16,
    color: '#64748B',
    textAlign: 'center',
  },

  // Form
  formContainer: {
    width: '100%',
    marginBottom: 32,
  },
  inputWrapper: {
    marginBottom: 20,
  },
  label: {
    fontSize: 15,
    fontWeight: '600',
    color: '#475569',
    marginBottom: 8,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F8FAFC',
    borderWidth: 2,
    borderColor: '#E2E8F0',
    borderRadius: 12,
    paddingHorizontal: 16,
    height: 56,
    gap: 12,
  },
  inputContainerError: {
    borderColor: '#EF4444',
    backgroundColor: '#FEF2F2',
  },
  input: {
    flex: 1,
    fontSize: 16,
    color: '#0F172A',
  },
  errorText: {
    color: '#EF4444',
    fontSize: 13,
    marginTop: 6,
    fontWeight: '500',
  },
  forgotPasswordButton: {
    alignSelf: 'flex-end',
    marginTop: 8,
  },
  forgotPasswordText: {
    color: '#3B82F6',
    fontSize: 14,
    fontWeight: '600',
  },

  // Footer
  footerContainer: {
    width: '100%',
    alignItems: 'center',
  },
  loginButton: {
    flexDirection: 'row',
    width: '100%',
    backgroundColor: '#3B82F6',
    paddingVertical: 16,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
    shadowColor: '#3B82F6',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 4,
  },
  loginButtonDisabled: {
    backgroundColor: '#94A3B8',
    shadowOpacity: 0,
  },
  loginButtonText: {
    color: '#FFFFFF',
    fontSize: 17,
    fontWeight: '700',
  },
  signupContainer: {
    flexDirection: 'row',
    marginTop: 24,
    alignItems: 'center',
  },
  signupText: {
    fontSize: 15,
    color: '#64748B',
  },
  signupLink: {
    color: '#3B82F6',
    fontWeight: '700',
    fontSize: 15,
  },
});
```

### 🗂️ ./src/screens/login/index.tsx

```typescript
import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ActivityIndicator,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
  StatusBar,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { Ionicons } from '@expo/vector-icons';
import { supabase } from '../../services/supabase';
import { styles } from './style';
import Toast from '../../components/Toast';
import { useToast } from '../../hooks/useToast';
import type { AuthStackParamList } from '../../navigation/types';

type LoginScreenNavigationProp = NativeStackNavigationProp<
  AuthStackParamList,
  'Login'
>;

/**
 * Tela de Login com validação e feedback visual
 */
const LoginScreen: React.FC = () => {
  const navigation = useNavigation<LoginScreenNavigationProp>();
  const { showToast, toastProps } = useToast();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [loading, setLoading] = useState(false);

  // Validation states
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const validateEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email.trim()) {
      setEmailError('E-mail é obrigatório');
      return false;
    }
    if (!emailRegex.test(email)) {
      setEmailError('E-mail inválido');
      return false;
    }
    setEmailError('');
    return true;
  };

  const validatePassword = (password: string): boolean => {
    if (!password) {
      setPasswordError('Senha é obrigatória');
      return false;
    }
    if (password.length < 6) {
      setPasswordError('Senha deve ter no mínimo 6 caracteres');
      return false;
    }
    setPasswordError('');
    return true;
  };

  const handleLogin = async () => {
    const isEmailValid = validateEmail(email);
    const isPasswordValid = validatePassword(password);

    if (!isEmailValid || !isPasswordValid) {
      showToast('Por favor, corrija os erros no formulário', 'error');
      return;
    }

    setLoading(true);

    try {
      const { error: signInError } = await supabase.auth.signInWithPassword({
        email: email.trim(),
        password: password,
      });

      if (signInError) {
        if (signInError.message === 'Email not confirmed') {
          showToast(
            'Por favor, confirme seu e-mail antes de fazer login',
            'warning',
          );
        } else if (signInError.message.includes('Invalid login credentials')) {
          showToast('E-mail ou senha incorretos', 'error');
        } else {
          showToast(signInError.message, 'error');
        }
      } else {
        showToast('Login realizado com sucesso!', 'success');
      }
    } catch (error) {
      const message =
        error instanceof Error ? error.message : 'Erro ao fazer login';
      showToast(message, 'error');
    } finally {
      setLoading(false);
    }
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar barStyle="dark-content" />
      <Toast {...toastProps} />

      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      >
        <ScrollView
          contentContainerStyle={styles.scrollContainer}
          keyboardShouldPersistTaps="handled"
        >
          {/* Header */}
          <View style={styles.headerContainer}>
            <View style={styles.iconContainer}>
              <Ionicons name="log-in" size={48} color="#3B82F6" />
            </View>
            <Text style={styles.title}>Bem-vindo de volta!</Text>
            <Text style={styles.subtitle}>
              Entre com sua conta para continuar
            </Text>
          </View>

          {/* Form */}
          <View style={styles.formContainer}>
            <View style={styles.inputWrapper}>
              <Text style={styles.label}>E-mail</Text>
              <View
                style={[
                  styles.inputContainer,
                  emailError ? styles.inputContainerError : null,
                ]}
              >
                <Ionicons
                  name="mail-outline"
                  size={20}
                  color={emailError ? '#EF4444' : '#64748B'}
                />
                <TextInput
                  style={styles.input}
                  placeholder="seu@email.com"
                  placeholderTextColor="#94A3B8"
                  value={email}
                  onChangeText={text => {
                    setEmail(text);
                    setEmailError('');
                  }}
                  onBlur={() => validateEmail(email)}
                  keyboardType="email-address"
                  autoCapitalize="none"
                  autoCorrect={false}
                />
              </View>
              {emailError ? (
                <Text style={styles.errorText}>{emailError}</Text>
              ) : null}
            </View>

            <View style={styles.inputWrapper}>
              <Text style={styles.label}>Senha</Text>
              <View
                style={[
                  styles.inputContainer,
                  passwordError ? styles.inputContainerError : null,
                ]}
              >
                <Ionicons
                  name="lock-closed-outline"
                  size={20}
                  color={passwordError ? '#EF4444' : '#64748B'}
                />
                <TextInput
                  style={styles.input}
                  placeholder="Sua senha"
                  placeholderTextColor="#94A3B8"
                  value={password}
                  onChangeText={text => {
                    setPassword(text);
                    setPasswordError('');
                  }}
                  onBlur={() => validatePassword(password)}
                  secureTextEntry={!isPasswordVisible}
                  autoCapitalize="none"
                />
                <TouchableOpacity
                  onPress={() => setIsPasswordVisible(!isPasswordVisible)}
                >
                  <Ionicons
                    name={isPasswordVisible ? 'eye-off-outline' : 'eye-outline'}
                    size={20}
                    color="#64748B"
                  />
                </TouchableOpacity>
              </View>
              {passwordError ? (
                <Text style={styles.errorText}>{passwordError}</Text>
              ) : null}
            </View>

            <TouchableOpacity
              style={styles.forgotPasswordButton}
              onPress={() => navigation.navigate('ForgotPassword')}
            >
              <Text style={styles.forgotPasswordText}>Esqueceu a senha?</Text>
            </TouchableOpacity>
          </View>

          {/* Actions */}
          <View style={styles.footerContainer}>
            <TouchableOpacity
              style={[
                styles.loginButton,
                loading && styles.loginButtonDisabled,
              ]}
              onPress={handleLogin}
              disabled={loading}
            >
              {loading ? (
                <ActivityIndicator color="#FFFFFF" />
              ) : (
                <>
                  <Text style={styles.loginButtonText}>Entrar</Text>
                  <Ionicons name="arrow-forward" size={20} color="#FFFFFF" />
                </>
              )}
            </TouchableOpacity>

            <View style={styles.signupContainer}>
              <Text style={styles.signupText}>Não tem uma conta? </Text>
              <TouchableOpacity onPress={() => navigation.navigate('Register')}>
                <Text style={styles.signupLink}>Cadastre-se</Text>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default LoginScreen;

```

### 🗂️ ./src/screens/addService/style.ts

```typescript
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8FAFC',
  },
  scrollContainer: {
    padding: 20,
    paddingBottom: 40,
  },

  // Form Sections
  formSection: {
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    padding: 20,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 8,
    elevation: 2,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: '#0F172A',
    marginBottom: 16,
  },

  // Input Fields
  label: {
    fontSize: 15,
    color: '#475569',
    marginBottom: 8,
    fontWeight: '600',
  },
  required: {
    color: '#EF4444',
  },
  input: {
    backgroundColor: '#F8FAFC',
    borderColor: '#E2E8F0',
    borderWidth: 1,
    borderRadius: 12,
    paddingHorizontal: 16,
    fontSize: 16,
    height: 52,
    marginBottom: 8,
    color: '#0F172A',
  },
  inputError: {
    borderColor: '#EF4444',
    borderWidth: 2,
  },
  textArea: {
    height: 120,
    textAlignVertical: 'top',
    paddingTop: 16,
  },
  pickerContainer: {
    backgroundColor: '#F8FAFC',
    borderColor: '#E2E8F0',
    borderWidth: 1,
    borderRadius: 12,
    marginBottom: 8,
    overflow: 'hidden',
  },
  errorText: {
    color: '#EF4444',
    fontSize: 13,
    marginBottom: 8,
    fontWeight: '500',
  },
  helperText: {
    fontSize: 13,
    color: '#94A3B8',
    marginBottom: 16,
  },

  // Image Upload
  imagePreviewContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 12,
  },
  imageWrapper: {
    position: 'relative',
  },
  imagePreview: {
    width: 100,
    height: 100,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#E2E8F0',
    backgroundColor: '#F8FAFC',
  },
  imageRemoveButton: {
    position: 'absolute',
    top: -8,
    right: -8,
    backgroundColor: '#EF4444',
    borderRadius: 12,
    width: 24,
    height: 24,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 4,
  },
  addPhotoButton: {
    width: 100,
    height: 100,
    borderRadius: 12,
    backgroundColor: '#F8FAFC',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: '#E2E8F0',
    borderStyle: 'dashed',
  },
  addPhotoText: {
    fontSize: 12,
    color: '#3B82F6',
    fontWeight: '600',
    marginTop: 4,
  },

  // Progress Bar
  progressContainer: {
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    padding: 20,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 8,
    elevation: 2,
  },
  progressText: {
    fontSize: 15,
    fontWeight: '600',
    color: '#0F172A',
    marginBottom: 12,
    textAlign: 'center',
  },
  progressBar: {
    height: 8,
    backgroundColor: '#E2E8F0',
    borderRadius: 4,
    overflow: 'hidden',
    marginBottom: 8,
  },
  progressFill: {
    height: '100%',
    backgroundColor: '#3B82F6',
    borderRadius: 4,
  },
  progressPercentage: {
    fontSize: 13,
    fontWeight: '600',
    color: '#3B82F6',
    textAlign: 'center',
  },

  // Submit Button
  button: {
    flexDirection: 'row',
    backgroundColor: '#3B82F6',
    paddingVertical: 16,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 8,
    gap: 8,
    shadowColor: '#3B82F6',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 4,
  },
  buttonDisabled: {
    backgroundColor: '#94A3B8',
    shadowOpacity: 0,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 17,
    fontWeight: '700',
  },
});
```

### 🗂️ ./src/screens/addService/index.tsx

```typescript
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
import { SafeAreaView } from 'react-native-safe-area-context';
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
            <Text style={styles.helperText}>{title.length}/100 caracteres</Text>

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
                  style={[styles.progressFill, { width: `${uploadProgress}%` }]}
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
  );
};

export default AddServiceScreen;

```

### 🗂️ ./src/screens/conversations/style.ts

```typescript
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  conversationItem: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#EEE',
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 15,
    backgroundColor: '#EFEFEF',
  },
  textContainer: {
    flex: 1,
  },
  userName: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  lastMessage: {
    fontSize: 14,
    color: '#666',
    marginTop: 2,
  },
  timestamp: {
    fontSize: 12,
    color: '#999',
    marginLeft: 10,
  },
  emptyContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  emptyText: {
    fontSize: 16,
    color: '#666',
    textAlign: 'center',
  },
});
```

### 🗂️ ./src/screens/conversations/index.tsx

```typescript
import React, { useState, useCallback } from 'react';
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  Alert,
  ActivityIndicator,
  Image,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useFocusEffect, useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { supabase } from '../../services/supabase';
import type {
  AppStackParamList,
  Profile as RecipientProfile,
} from '../../navigation/types';
import { styles } from './style';
import { formatDistanceToNow } from 'date-fns';
import { ptBR } from 'date-fns/locale';

/**
 * Representa a estrutura de dados de uma única conversa retornada pela API.
 */
type Conversation = {
  id: number;
  other_participant_id: string;
  other_participant_full_name: string;
  other_participant_avatar_url: string;
  last_message_content: string | null;
  last_message_at: string | null;
};
type ConversationsNavigationProp = NativeStackNavigationProp<AppStackParamList>;

/**
 * Hook para gerenciar a busca e as atualizações em tempo real das conversas do usuário.
 */
const useConversations = () => {
  const [conversations, setConversations] = useState<Conversation[]>([]);
  const [loading, setLoading] = useState(true);

  const fetchConversations = useCallback(async () => {
    try {
      const { data, error } = await supabase.rpc('get_user_conversations');
      if (error) throw error;
      setConversations(data || []);
    } catch (error) {
      const message =
        error instanceof Error
          ? error.message
          : 'Ocorreu um erro desconhecido.';
      Alert.alert('Erro ao carregar conversas', message);
    }
  }, []);

  useFocusEffect(
    useCallback(() => {
      setLoading(true);
      fetchConversations().finally(() => setLoading(false));
    }, [fetchConversations]),
  );

  React.useEffect(() => {
    const channel = supabase
      .channel('public:messages')
      .on(
        'postgres_changes',
        { event: 'INSERT', schema: 'public', table: 'messages' },
        () => {
          fetchConversations();
        },
      )
      .subscribe();

    return () => {
      supabase.removeChannel(channel);
    };
  }, [fetchConversations]);

  return { conversations, loading };
};

/**
 * Tela que exibe a lista de conversas ativas do usuário.
 */
const ConversationsScreen = () => {
  const navigation = useNavigation<ConversationsNavigationProp>();
  const { conversations, loading } = useConversations();

  const renderItem = ({ item }: { item: Conversation }) => {
    const recipient: RecipientProfile = {
      id: item.other_participant_id,
      full_name: item.other_participant_full_name,
      avatar_url: item.other_participant_avatar_url,
    };

    return (
      <TouchableOpacity
        style={styles.conversationItem}
        onPress={() =>
          navigation.navigate('Chat', {
            conversationId: item.id,
            recipient,
          })
        }
      >
        <Image
          source={{ uri: item.other_participant_avatar_url }}
          style={styles.avatar}
        />
        <View style={styles.textContainer}>
          <Text style={styles.userName}>
            {item.other_participant_full_name}
          </Text>
          <Text style={styles.lastMessage} numberOfLines={1}>
            {item.last_message_content || 'Inicie a conversa!'}
          </Text>
        </View>
        {item.last_message_at && (
          <Text style={styles.timestamp}>
            {formatDistanceToNow(new Date(item.last_message_at), {
              locale: ptBR,
              addSuffix: true,
            })}
          </Text>
        )}
      </TouchableOpacity>
    );
  };

  if (loading) {
    return <ActivityIndicator style={{ flex: 1, justifyContent: 'center' }} />;
  }

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={conversations}
        keyExtractor={item => item.id.toString()}
        renderItem={renderItem}
        contentContainerStyle={{ flexGrow: 1 }}
        ListEmptyComponent={
          <View style={styles.emptyContainer}>
            <Text style={styles.emptyText}>
              Você ainda não tem conversas. Inicie uma a partir da página de um
              serviço!
            </Text>
          </View>
        }
      />
    </SafeAreaView>
  );
};

export default ConversationsScreen;

```

### 🗂️ ./src/screens/welcome/style.ts

```typescript
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    padding: 20,
  },
  contentContainer: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: 120,
    height: 120,
    resizeMode: 'contain',
    marginBottom: 24,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#2D3748',
    textAlign: 'center',
    marginBottom: 12,
  },
  subtitle: {
    fontSize: 18,
    color: '#718096',
    textAlign: 'center',
    lineHeight: 26,
    paddingHorizontal: 20,
  },
  footer: {
    width: '100%',
    paddingVertical: 10,
  },
  button: {
    paddingVertical: 16,
    borderRadius: 12,
    width: '100%',
    alignItems: 'center',
    marginBottom: 16,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
  },
  buttonPrimary: {
    backgroundColor: '#3F83F8',
  },
  buttonSecondary: {
    backgroundColor: '#FFFFFF',
    borderWidth: 1.5,
    borderColor: '#E2E8F0',
  },
  buttonTextPrimary: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: '600',
  },
  buttonTextSecondary: {
    color: '#2D3748',
    fontSize: 18,
    fontWeight: '600',
  },
});
```

### 🗂️ ./src/screens/welcome/index.tsx

```typescript
import React from 'react';
import { View, Text, Image, TouchableOpacity, StatusBar } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { styles } from './style';

// CORREÇÃO: Importamos o tipo do nosso arquivo central 'types.ts'
import { AuthStackParamList } from '../../navigation/types';

// O tipo da prop de navegação agora usa a definição importada e correta
type WelcomeScreenNavigationProp = NativeStackNavigationProp<
  AuthStackParamList,
  'Welcome'
>;

/**
 * @description
 * A tela de boas-vindas é a primeira tela que um usuário não autenticado vê.
 * Ela apresenta o propósito do aplicativo e fornece as ações primárias:
 * fazer login ou criar uma nova conta.
 * @returns {React.FC} O componente da tela de boas-vindas.
 */
const WelcomeScreen: React.FC = () => {
  const navigation = useNavigation<WelcomeScreenNavigationProp>();

  /**
   * Navega para a tela de Login.
   * Esta função encapsula a ação de navegação para melhorar a legibilidade
   * e facilitar futuras manutenções (ex: adicionar um evento de analytics).
   */
  const navigateToLogin = () => {
    navigation.navigate('Login');
  };

  /**
   * Navega para a tela de Cadastro (Register).
   */
  const navigateToRegister = () => {
    navigation.navigate('Register');
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#FFFFFF" />
      <View style={styles.contentContainer}>
        <Image source={require('../../assets/logo.png')} style={styles.logo} />
        <Text style={styles.title}>Sua comunidade, conectada.</Text>
        <Text style={styles.subtitle}>
          Encontre ajuda ou ofereça seus talentos. Fortaleça a economia local
          com um toque.
        </Text>
      </View>

      <View style={styles.footer}>
        <TouchableOpacity
          style={[styles.button, styles.buttonPrimary]}
          onPress={navigateToLogin}
          activeOpacity={0.8}
        >
          <Text style={styles.buttonTextPrimary}>Fazer Login</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.button, styles.buttonSecondary]}
          onPress={navigateToRegister}
          activeOpacity={0.8}
        >
          <Text style={styles.buttonTextSecondary}>Criar Conta</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default WelcomeScreen;

```

### 🗂️ ./src/screens/register/style.ts

```typescript
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  scrollContainer: {
    flexGrow: 1,
    justifyContent: 'center',
    padding: 24,
  },

  // Header
  headerContainer: {
    alignItems: 'center',
    marginBottom: 32,
  },
  iconContainer: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: '#EFF6FF',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 16,
  },
  title: {
    fontSize: 28,
    fontWeight: '700',
    color: '#0F172A',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 16,
    color: '#64748B',
    textAlign: 'center',
  },

  // Form
  formContainer: {
    width: '100%',
    marginBottom: 24,
  },
  inputWrapper: {
    marginBottom: 16,
  },
  label: {
    fontSize: 15,
    fontWeight: '600',
    color: '#475569',
    marginBottom: 8,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F8FAFC',
    borderWidth: 2,
    borderColor: '#E2E8F0',
    borderRadius: 12,
    paddingHorizontal: 16,
    height: 56,
    gap: 12,
  },
  inputContainerError: {
    borderColor: '#EF4444',
    backgroundColor: '#FEF2F2',
  },
  input: {
    flex: 1,
    fontSize: 16,
    color: '#0F172A',
  },
  errorText: {
    color: '#EF4444',
    fontSize: 13,
    marginTop: 6,
    fontWeight: '500',
  },

  // Footer
  footerContainer: {
    width: '100%',
    alignItems: 'center',
  },
  registerButton: {
    flexDirection: 'row',
    width: '100%',
    backgroundColor: '#3B82F6',
    paddingVertical: 16,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
    shadowColor: '#3B82F6',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 4,
  },
  registerButtonDisabled: {
    backgroundColor: '#94A3B8',
    shadowOpacity: 0,
  },
  registerButtonText: {
    color: '#FFFFFF',
    fontSize: 17,
    fontWeight: '700',
  },
  loginContainer: {
    flexDirection: 'row',
    marginTop: 24,
    alignItems: 'center',
  },
  loginText: {
    fontSize: 15,
    color: '#64748B',
  },
  loginLink: {
    color: '#3B82F6',
    fontWeight: '700',
    fontSize: 15,
  },
});
```

### 🗂️ ./src/screens/register/index.tsx

```typescript
import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ActivityIndicator,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
  StatusBar,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { Ionicons } from '@expo/vector-icons';
import { supabase } from '../../services/supabase';
import { styles } from './style';
import Toast from '../../components/Toast';
import { useToast } from '../../hooks/useToast';
import { AuthStackParamList } from '../../navigation/types';

type RegisterScreenNavigationProp = NativeStackNavigationProp<
  AuthStackParamList,
  'Register'
>;

const RegisterScreen: React.FC = () => {
  const navigation = useNavigation<RegisterScreenNavigationProp>();
  const { showToast, toastProps } = useToast();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [username, setUsername] = useState('');
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [isConfirmPasswordVisible, setIsConfirmPasswordVisible] =
    useState(false);
  const [loading, setLoading] = useState(false);

  // Validation errors
  const [usernameError, setUsernameError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [confirmPasswordError, setConfirmPasswordError] = useState('');

  const validateUsername = (username: string): boolean => {
    const usernameRegex = /^[a-zA-Z0-9]+$/;
    if (!username.trim()) {
      setUsernameError('Nome de usuário é obrigatório');
      return false;
    }
    if (username.length < 3) {
      setUsernameError('Nome deve ter no mínimo 3 caracteres');
      return false;
    }
    if (!usernameRegex.test(username)) {
      setUsernameError('Apenas letras e números, sem espaços');
      return false;
    }
    setUsernameError('');
    return true;
  };

  const validateEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email.trim()) {
      setEmailError('E-mail é obrigatório');
      return false;
    }
    if (!emailRegex.test(email)) {
      setEmailError('E-mail inválido');
      return false;
    }
    setEmailError('');
    return true;
  };

  const validatePassword = (password: string): boolean => {
    if (!password) {
      setPasswordError('Senha é obrigatória');
      return false;
    }
    if (password.length < 6) {
      setPasswordError('Senha deve ter no mínimo 6 caracteres');
      return false;
    }
    setPasswordError('');
    return true;
  };

  const validateConfirmPassword = (confirmPassword: string): boolean => {
    if (!confirmPassword) {
      setConfirmPasswordError('Confirme sua senha');
      return false;
    }
    if (confirmPassword !== password) {
      setConfirmPasswordError('As senhas não coincidem');
      return false;
    }
    setConfirmPasswordError('');
    return true;
  };

  const handleSignUp = async () => {
    const isUsernameValid = validateUsername(username);
    const isEmailValid = validateEmail(email);
    const isPasswordValid = validatePassword(password);
    const isConfirmPasswordValid = validateConfirmPassword(confirmPassword);

    if (
      !isUsernameValid ||
      !isEmailValid ||
      !isPasswordValid ||
      !isConfirmPasswordValid
    ) {
      showToast('Por favor, corrija os erros no formulário', 'error');
      return;
    }

    setLoading(true);

    try {
      const { data, error } = await supabase.auth.signUp({
        email: email.trim(),
        password: password,
        options: { data: { username: username, full_name: username } },
      });

      if (error) throw error;

      if (data.user) {
        showToast('Conta criada! Verifique seu e-mail', 'success');
        navigation.navigate('ConfirmEmail', { email: email });
      }
    } catch (error) {
      const message =
        error instanceof Error ? error.message : 'Erro ao criar conta';
      showToast(message, 'error');
    } finally {
      setLoading(false);
    }
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar barStyle="dark-content" />
      <Toast {...toastProps} />

      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      >
        <ScrollView
          contentContainerStyle={styles.scrollContainer}
          keyboardShouldPersistTaps="handled"
        >
          <View style={styles.headerContainer}>
            <View style={styles.iconContainer}>
              <Ionicons name="person-add" size={48} color="#3B82F6" />
            </View>
            <Text style={styles.title}>Crie sua Conta</Text>
            <Text style={styles.subtitle}>Preencha os dados para começar</Text>
          </View>

          <View style={styles.formContainer}>
            <View style={styles.inputWrapper}>
              <Text style={styles.label}>Nome de usuário</Text>
              <View
                style={[
                  styles.inputContainer,
                  usernameError ? styles.inputContainerError : null,
                ]}
              >
                <Ionicons
                  name="person-outline"
                  size={20}
                  color={usernameError ? '#EF4444' : '#64748B'}
                />
                <TextInput
                  style={styles.input}
                  placeholder="seunome"
                  placeholderTextColor="#94A3B8"
                  value={username}
                  onChangeText={text => {
                    setUsername(text);
                    setUsernameError('');
                  }}
                  onBlur={() => validateUsername(username)}
                  autoCapitalize="none"
                />
              </View>
              {usernameError ? (
                <Text style={styles.errorText}>{usernameError}</Text>
              ) : null}
            </View>

            <View style={styles.inputWrapper}>
              <Text style={styles.label}>E-mail</Text>
              <View
                style={[
                  styles.inputContainer,
                  emailError ? styles.inputContainerError : null,
                ]}
              >
                <Ionicons
                  name="mail-outline"
                  size={20}
                  color={emailError ? '#EF4444' : '#64748B'}
                />
                <TextInput
                  style={styles.input}
                  placeholder="seu@email.com"
                  placeholderTextColor="#94A3B8"
                  value={email}
                  onChangeText={text => {
                    setEmail(text);
                    setEmailError('');
                  }}
                  onBlur={() => validateEmail(email)}
                  keyboardType="email-address"
                  autoCapitalize="none"
                />
              </View>
              {emailError ? (
                <Text style={styles.errorText}>{emailError}</Text>
              ) : null}
            </View>

            <View style={styles.inputWrapper}>
              <Text style={styles.label}>Senha</Text>
              <View
                style={[
                  styles.inputContainer,
                  passwordError ? styles.inputContainerError : null,
                ]}
              >
                <Ionicons
                  name="lock-closed-outline"
                  size={20}
                  color={passwordError ? '#EF4444' : '#64748B'}
                />
                <TextInput
                  style={styles.input}
                  placeholder="Mínimo 6 caracteres"
                  placeholderTextColor="#94A3B8"
                  value={password}
                  onChangeText={text => {
                    setPassword(text);
                    setPasswordError('');
                  }}
                  onBlur={() => validatePassword(password)}
                  secureTextEntry={!isPasswordVisible}
                />
                <TouchableOpacity
                  onPress={() => setIsPasswordVisible(!isPasswordVisible)}
                >
                  <Ionicons
                    name={isPasswordVisible ? 'eye-off-outline' : 'eye-outline'}
                    size={20}
                    color="#64748B"
                  />
                </TouchableOpacity>
              </View>
              {passwordError ? (
                <Text style={styles.errorText}>{passwordError}</Text>
              ) : null}
            </View>

            <View style={styles.inputWrapper}>
              <Text style={styles.label}>Confirmar senha</Text>
              <View
                style={[
                  styles.inputContainer,
                  confirmPasswordError ? styles.inputContainerError : null,
                ]}
              >
                <Ionicons
                  name="lock-closed-outline"
                  size={20}
                  color={confirmPasswordError ? '#EF4444' : '#64748B'}
                />
                <TextInput
                  style={styles.input}
                  placeholder="Digite a senha novamente"
                  placeholderTextColor="#94A3B8"
                  value={confirmPassword}
                  onChangeText={text => {
                    setConfirmPassword(text);
                    setConfirmPasswordError('');
                  }}
                  onBlur={() => validateConfirmPassword(confirmPassword)}
                  secureTextEntry={!isConfirmPasswordVisible}
                />
                <TouchableOpacity
                  onPress={() =>
                    setIsConfirmPasswordVisible(!isConfirmPasswordVisible)
                  }
                >
                  <Ionicons
                    name={
                      isConfirmPasswordVisible
                        ? 'eye-off-outline'
                        : 'eye-outline'
                    }
                    size={20}
                    color="#64748B"
                  />
                </TouchableOpacity>
              </View>
              {confirmPasswordError ? (
                <Text style={styles.errorText}>{confirmPasswordError}</Text>
              ) : null}
            </View>
          </View>

          <View style={styles.footerContainer}>
            <TouchableOpacity
              style={[
                styles.registerButton,
                loading && styles.registerButtonDisabled,
              ]}
              onPress={handleSignUp}
              disabled={loading}
            >
              {loading ? (
                <ActivityIndicator color="#FFFFFF" />
              ) : (
                <>
                  <Text style={styles.registerButtonText}>Criar Conta</Text>
                  <Ionicons name="arrow-forward" size={20} color="#FFFFFF" />
                </>
              )}
            </TouchableOpacity>

            <View style={styles.loginContainer}>
              <Text style={styles.loginText}>Já tem uma conta? </Text>
              <TouchableOpacity onPress={() => navigation.navigate('Login')}>
                <Text style={styles.loginLink}>Faça Login</Text>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default RegisterScreen;

```

### 🗂️ ./src/screens/completeProfile/style.ts

```typescript
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  scrollContainer: {
    flexGrow: 1,
    justifyContent: 'center',
    padding: 20,
  },
  headerContainer: {
    alignItems: 'center',
    marginBottom: 30,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#2D3748',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 16,
    color: '#718096',
    textAlign: 'center',
  },
  avatarPicker: {
    alignItems: 'center',
    marginBottom: 30,
  },
  avatarPlaceholder: {
    width: 120,
    height: 120,
    borderRadius: 60,
    backgroundColor: '#F7FAFC',
    borderWidth: 2,
    borderColor: '#E2E8F0',
    justifyContent: 'center',
    alignItems: 'center',
  },
  avatarImage: {
    width: 120,
    height: 120,
    borderRadius: 60,
  },
  avatarEditText: {
    marginTop: 10,
    color: '#3F83F8',
    fontSize: 16,
    fontWeight: '500',
  },
  formContainer: {
    width: '100%',
  },
  label: {
    fontSize: 16,
    color: '#4A5568',
    marginBottom: 8,
    fontWeight: '500',
  },
  input: {
    height: 50,
    backgroundColor: '#F7FAFC',
    borderWidth: 1,
    borderColor: '#E2E8F0',
    borderRadius: 8,
    paddingHorizontal: 15,
    fontSize: 16,
    color: '#2D3748',
    marginBottom: 15,
  },
  locationButton: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 50,
    backgroundColor: '#F7FAFC',
    borderWidth: 1,
    borderColor: '#E2E8F0',
    borderRadius: 8,
    paddingHorizontal: 15,
    marginBottom: 15,
  },
  locationText: {
    flex: 1,
    fontSize: 16,
    color: '#2D3748',
  },
  locationPlaceholder: {
    flex: 1,
    fontSize: 16,
    color: '#A0AEC0',
  },
  button: {
    width: '100%',
    backgroundColor: '#3F83F8',
    paddingVertical: 16,
    borderRadius: 12,
    alignItems: 'center',
    marginTop: 20,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: '600',
  },
});
```

### 🗂️ ./src/screens/completeProfile/index.tsx

```typescript
import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  SafeAreaView,
  ActivityIndicator,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
  Alert,
  Image,
} from 'react-native';
import MaskInput from 'react-native-mask-input';
import * as ImagePicker from 'expo-image-picker';
import { Ionicons } from '@expo/vector-icons';
import { decode } from 'base64-arraybuffer';
import { supabase } from '../../services/supabase';
import LocationSelectorModal from '../../components/LocationSelectorModal';
import { styles } from './style';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
// CORREÇÃO: Importação do tipo do arquivo central 'types'
import type { AppStackParamList } from '../../navigation/types';

type NavigationProp = NativeStackNavigationProp<
  AppStackParamList,
  'CompleteProfile'
>;

/**
 * Tela de "Completar Cadastro" (Onboarding).
 * Coleta informações essenciais do perfil do usuário, como nome, telefone,
 * localização e foto, após a confirmação do e-mail inicial.
 */
const CompleteProfileScreen: React.FC = () => {
  const navigation = useNavigation<NavigationProp>();

  const [fullName, setFullName] = useState('');
  const [phone, setPhone] = useState('');
  const [location, setLocation] = useState('');
  const [avatarUrl, setAvatarUrl] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [isLocationModalVisible, setLocationModalVisible] = useState(false);

  /**
   * Lida com a seleção de uma imagem de avatar, seja da câmera ou da galeria.
   * @param source Define a origem da imagem ('camera' ou 'gallery').
   */
  const handleAvatarSelection = async (source: 'camera' | 'gallery') => {
    const options: ImagePicker.ImagePickerOptions = {
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [1, 1],
      quality: 0.7,
      base64: true,
    };

    let result;
    if (source === 'camera') {
      const { status } = await ImagePicker.requestCameraPermissionsAsync();
      if (status !== 'granted') {
        Alert.alert(
          'Permissão negada',
          'Precisamos de acesso à câmera para tirar uma foto.',
        );
        return;
      }
      result = await ImagePicker.launchCameraAsync(options);
    } else {
      const { status } =
        await ImagePicker.requestMediaLibraryPermissionsAsync();
      if (status !== 'granted') {
        Alert.alert(
          'Permissão negada',
          'Precisamos de acesso à galeria para escolher uma foto.',
        );
        return;
      }
      result = await ImagePicker.launchImageLibraryAsync(options);
    }

    if (!result.canceled && result.assets && result.assets[0].base64) {
      uploadAvatar(result.assets[0].base64);
    }
  };

  /**
   * Faz o upload da imagem do avatar para o Supabase Storage e atualiza o perfil.
   * @param base64 A imagem codificada em base64.
   */
  const uploadAvatar = async (base64: string) => {
    setLoading(true);
    try {
      const {
        data: { user },
      } = await supabase.auth.getUser();
      if (!user) throw new Error('Usuário não encontrado');

      const filePath = `${user.id}/${new Date().getTime()}.png`;
      const imageBuffer = decode(base64);

      const { error: uploadError } = await supabase.storage
        .from('avatars')
        .upload(filePath, imageBuffer, { contentType: 'image/png' });

      if (uploadError) throw uploadError;

      const { data: publicUrlData } = supabase.storage
        .from('avatars')
        .getPublicUrl(filePath);
      const publicUrl = `${publicUrlData.publicUrl}?t=${new Date().getTime()}`; // Cache busting
      setAvatarUrl(publicUrl);

      const { error: updateError } = await supabase
        .from('profiles')
        .update({ avatar_url: publicUrl })
        .eq('id', user.id);

      if (updateError) throw updateError;
    } catch (error) {
      const errorMessage =
        error instanceof Error
          ? error.message
          : 'Ocorreu um erro desconhecido.';
      Alert.alert('Erro no upload', errorMessage);
    } finally {
      setLoading(false);
    }
  };

  /**
   * Valida e salva as informações do perfil no banco de dados.
   * Em caso de sucesso, reseta a navegação para a tela principal do app.
   */
  const handleCompleteProfile = async () => {
    if (!fullName.trim() || !phone || !location) {
      Alert.alert(
        'Campos obrigatórios',
        'Por favor, preencha todas as informações para continuar.',
      );
      return;
    }

    setLoading(true);
    try {
      const {
        data: { user },
      } = await supabase.auth.getUser();
      if (!user) throw new Error('Usuário não autenticado.');

      const updates = {
        id: user.id,
        full_name: fullName.trim(),
        phone,
        location,
        updated_at: new Date(),
      };

      const { error } = await supabase
        .from('profiles')
        .update(updates)
        .eq('id', user.id);
      if (error) throw error;

      navigation.reset({
        index: 0,
        routes: [{ name: 'MainTabs' }],
      });
    } catch (error) {
      const errorMessage =
        error instanceof Error
          ? error.message
          : 'Ocorreu um erro desconhecido.';
      Alert.alert('Erro ao salvar perfil', errorMessage);
    } finally {
      setLoading(false);
    }
  };

  const showImagePickerOptions = () => {
    Alert.alert('Adicionar Foto', 'Escolha uma opção', [
      { text: 'Tirar Foto', onPress: () => handleAvatarSelection('camera') },
      {
        text: 'Escolher da Galeria',
        onPress: () => handleAvatarSelection('gallery'),
      },
      { text: 'Cancelar', style: 'cancel' },
    ]);
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      >
        <ScrollView
          contentContainerStyle={styles.scrollContainer}
          keyboardShouldPersistTaps="handled"
        >
          <LocationSelectorModal
            visible={isLocationModalVisible}
            onClose={() => setLocationModalVisible(false)}
            onLocationSelect={setLocation}
          />

          <View style={styles.headerContainer}>
            <Text style={styles.title}>Continue seu cadastro</Text>
            <Text style={styles.subtitle}>
              Falta pouco! Complete seu perfil para começar a usar a plataforma.
            </Text>
          </View>

          <TouchableOpacity
            style={styles.avatarPicker}
            onPress={showImagePickerOptions}
          >
            {avatarUrl ? (
              <Image source={{ uri: avatarUrl }} style={styles.avatarImage} />
            ) : (
              <View style={styles.avatarPlaceholder}>
                <Ionicons name="camera" size={40} color="#A0AEC0" />
              </View>
            )}
            <Text style={styles.avatarEditText}>Adicionar foto de perfil</Text>
          </TouchableOpacity>

          <View style={styles.formContainer}>
            <Text style={styles.label}>Nome Completo*</Text>
            <TextInput
              style={styles.input}
              placeholder="Digite seu nome e sobrenome"
              value={fullName}
              onChangeText={setFullName}
            />

            <Text style={styles.label}>Telefone (WhatsApp)*</Text>
            <MaskInput
              style={styles.input}
              value={phone}
              onChangeText={(masked, unmasked) => setPhone(unmasked)}
              mask={[
                '(',
                /\d/,
                /\d/,
                ')',
                ' ',
                /\d/,
                /\d/,
                /\d/,
                /\d/,
                /\d/,
                '-',
                /\d/,
                /\d/,
                /\d/,
                /\d/,
              ]}
              placeholder="(XX) XXXXX-XXXX"
              keyboardType="numeric"
            />

            <Text style={styles.label}>Sua Localização*</Text>
            <TouchableOpacity
              style={styles.locationButton}
              onPress={() => setLocationModalVisible(true)}
            >
              <Text
                style={
                  location ? styles.locationText : styles.locationPlaceholder
                }
              >
                {location || 'Selecione sua cidade'}
              </Text>
              <Ionicons name="chevron-down" size={20} color="#666" />
            </TouchableOpacity>
          </View>

          <TouchableOpacity
            style={styles.button}
            onPress={handleCompleteProfile}
            disabled={loading}
          >
            {loading ? (
              <ActivityIndicator color="#FFFFFF" />
            ) : (
              <Text style={styles.buttonText}>Finalizar Cadastro</Text>
            )}
          </TouchableOpacity>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default CompleteProfileScreen;

```

### 🗂️ ./src/screens/resetPassword/style.ts

```typescript
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  safeArea: { flex: 1, backgroundColor: '#FFFFFF' },
  container: { flex: 1, justifyContent: 'center', padding: 20 },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#2D3748',
    textAlign: 'center',
    marginBottom: 15,
  },
  subtitle: {
    fontSize: 16,
    color: '#718096',
    textAlign: 'center',
    marginBottom: 30,
    lineHeight: 24,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F7FAFC',
    borderWidth: 1,
    borderColor: '#E2E8F0',
    borderRadius: 8,
    marginBottom: 15,
    paddingHorizontal: 15,
  },
  input: { flex: 1, height: 50, fontSize: 16, color: '#2D3748' },
  button: {
    width: '100%',
    backgroundColor: '#3F83F8',
    paddingVertical: 16,
    borderRadius: 12,
    alignItems: 'center',
  },
  buttonText: { color: '#FFFFFF', fontSize: 18, fontWeight: '600' },
  errorText: {
    color: '#E53E3E',
    textAlign: 'center',
    marginBottom: 10,
    fontSize: 14,
  },
});
```

### 🗂️ ./src/screens/resetPassword/index.tsx

```typescript
import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  SafeAreaView,
  ActivityIndicator,
  Alert,
  StatusBar,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { Ionicons } from '@expo/vector-icons';
import { supabase } from '../../services/supabase';
import { styles } from '../resetPassword/style';
import { AuthStackParamList } from '../../navigation/types';

type NavigationProp = NativeStackNavigationProp<
  AuthStackParamList,
  'ResetPassword'
>;

/**
 * @description
 * Tela onde o usuário define a nova senha após clicar no link de recuperação de e-mail.
 * O usuário é autenticado temporariamente pelo token da URL.
 */
const ResetPasswordScreen: React.FC = () => {
  const navigation = useNavigation<NavigationProp>();
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  /**
   * Valida e atualiza a senha do usuário no Supabase.
   * Em caso de sucesso, reseta a navegação para a tela de Login.
   */
  const handleResetPassword = async () => {
    setError('');
    if (!password) {
      setError('Por favor, digite uma nova senha.');
      return;
    }
    if (password !== confirmPassword) {
      setError('As senhas não coincidem.');
      return;
    }
    setLoading(true);
    const { error } = await supabase.auth.updateUser({ password: password });

    if (error) {
      setError(error.message);
    } else {
      Alert.alert(
        'Senha Redefinida!',
        'Sua senha foi alterada com sucesso. Por favor, faça o login novamente.',
      );
      navigation.reset({ index: 0, routes: [{ name: 'Login' }] });
    }
    setLoading(false);
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar barStyle="dark-content" />
      <View style={styles.container}>
        <Text style={styles.title}>Defina sua Nova Senha</Text>
        <Text style={styles.subtitle}>Escolha uma senha forte e segura.</Text>

        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Nova senha"
            value={password}
            onChangeText={text => {
              setPassword(text);
              setError('');
            }}
            secureTextEntry={!isPasswordVisible}
          />
          <TouchableOpacity
            onPress={() => setIsPasswordVisible(!isPasswordVisible)}
          >
            <Ionicons
              name={isPasswordVisible ? 'eye-off' : 'eye'}
              size={24}
              color="#A0AEC0"
            />
          </TouchableOpacity>
        </View>

        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Confirmar nova senha"
            value={confirmPassword}
            onChangeText={text => {
              setConfirmPassword(text);
              setError('');
            }}
            secureTextEntry={!isPasswordVisible}
          />
        </View>

        {error ? <Text style={styles.errorText}>{error}</Text> : null}

        <TouchableOpacity
          style={styles.button}
          onPress={handleResetPassword}
          disabled={loading}
        >
          {loading ? (
            <ActivityIndicator color="#FFFFFF" />
          ) : (
            <Text style={styles.buttonText}>Salvar Nova Senha</Text>
          )}
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default ResetPasswordScreen;

```

### 🗂️ ./src/screens/changePassword/style.ts

```typescript
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#F9F9F9',
  },
  headerText: {
    fontSize: 16,
    color: '#666',
    marginBottom: 20,
    textAlign: 'center',
    lineHeight: 24,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    borderColor: '#CCCCCC',
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 15,
    paddingHorizontal: 15,
  },
  input: {
    flex: 1,
    height: 50,
    fontSize: 16,
    color: '#333',
  },
  icon: {
    marginLeft: 10,
  },
  button: {
    backgroundColor: '#3F83F8',
    paddingVertical: 15,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 10,
  },
  buttonDisabled: {
    backgroundColor: '#A5C8FF',
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: 'bold',
  },
  errorText: {
    color: '#E53E3E',
    textAlign: 'center',
    marginBottom: 10,
    fontSize: 14,
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalView: {
    width: 150,
    height: 150,
    backgroundColor: 'white',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  modalText: {
    marginTop: 10,
    fontSize: 16,
    fontWeight: 'bold',
  },
});
```

### 🗂️ ./src/screens/changePassword/index.tsx

```typescript
import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  SafeAreaView,
  Modal,
  ActivityIndicator,
  TextInputProps,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import { supabase } from '../../services/supabase';
import { styles } from './style';

interface PasswordInputProps extends TextInputProps {
  value: string;
  onChangeText: (text: string) => void;
}

/**
 * Um componente de input de senha reutilizável com um ícone para alternar a visibilidade.
 */
const PasswordInput: React.FC<PasswordInputProps> = ({
  value,
  onChangeText,
  ...props
}) => {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.input}
        value={value}
        onChangeText={onChangeText}
        secureTextEntry={!isVisible}
        autoCapitalize="none"
        {...props}
      />
      <TouchableOpacity
        onPress={() => setIsVisible(!isVisible)}
        style={styles.icon}
      >
        <Ionicons name={isVisible ? 'eye-off' : 'eye'} size={24} color="gray" />
      </TouchableOpacity>
    </View>
  );
};

// --- Componente Principal ---

/**
 * Tela que permite ao usuário alterar sua senha.
 * O usuário deve fornecer a senha atual e uma nova senha (com confirmação).
 */
const ChangePasswordScreen = () => {
  const navigation = useNavigation();

  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmNewPassword, setConfirmNewPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [showSuccessModal, setShowSuccessModal] = useState(false);

  /**
   * Valida as senhas inseridas pelo usuário.
   * @returns Uma string de erro se a validação falhar, caso contrário, null.
   */
  const validatePasswords = (): string | null => {
    if (!currentPassword || !newPassword || !confirmNewPassword) {
      return 'Todos os campos são obrigatórios.';
    }
    if (newPassword.length < 6) {
      return 'A nova senha deve ter no mínimo 6 caracteres.';
    }
    if (newPassword !== confirmNewPassword) {
      return 'As novas senhas não coincidem.';
    }
    return null;
  };

  /**
   * Orquestra o processo de alteração de senha, incluindo validação e chamadas à API.
   */
  const handleChangePassword = async () => {
    setError('');
    const validationError = validatePasswords();
    if (validationError) {
      setError(validationError);
      return;
    }

    setLoading(true);
    try {
      const {
        data: { user },
      } = await supabase.auth.getUser();
      if (!user?.email)
        throw new Error(
          'Usuário não autenticado. Por favor, faça login novamente.',
        );

      // Verifica se a senha atual está correta tentando fazer login com ela
      const { error: signInError } = await supabase.auth.signInWithPassword({
        email: user.email,
        password: currentPassword,
      });

      if (signInError) {
        setError('A senha atual está incorreta.');
        return;
      }

      const { error: updateError } = await supabase.auth.updateUser({
        password: newPassword,
      });

      if (updateError) throw updateError;

      setShowSuccessModal(true);
      setTimeout(() => {
        setShowSuccessModal(false);
        navigation.goBack();
      }, 2000);
    } catch (err) {
      const errorMessage =
        err instanceof Error ? err.message : 'Ocorreu um erro desconhecido.';
      setError(errorMessage);
    } finally {
      setLoading(false);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <Modal transparent={true} visible={showSuccessModal} animationType="fade">
        <View style={styles.modalContainer}>
          <View style={styles.modalView}>
            <Ionicons name="checkmark-circle" size={80} color="#48BB78" />
            <Text style={styles.modalText}>Senha Alterada!</Text>
          </View>
        </View>
      </Modal>

      <Text style={styles.headerText}>
        Sua senha precisa ter no mínimo 6 caracteres para sua segurança.
      </Text>

      <PasswordInput
        placeholder="Senha atual"
        value={currentPassword}
        onChangeText={setCurrentPassword}
      />

      <PasswordInput
        placeholder="Nova senha"
        value={newPassword}
        onChangeText={setNewPassword}
      />

      <PasswordInput
        placeholder="Repita a nova senha"
        value={confirmNewPassword}
        onChangeText={setConfirmNewPassword}
      />

      {error ? <Text style={styles.errorText}>{error}</Text> : null}

      <TouchableOpacity
        style={[styles.button, loading && styles.buttonDisabled]}
        onPress={handleChangePassword}
        disabled={loading}
      >
        {loading ? (
          <ActivityIndicator color="#FFFFFF" />
        ) : (
          <Text style={styles.buttonText}>Confirmar alteração</Text>
        )}
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default ChangePasswordScreen;

```

### 🗂️ ./src/screens/forgotPassword/style.ts

```typescript
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  safeArea: { flex: 1, backgroundColor: '#FFFFFF' },
  container: { flex: 1, justifyContent: 'center', padding: 20 },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#2D3748',
    textAlign: 'center',
    marginBottom: 15,
  },
  subtitle: {
    fontSize: 16,
    color: '#718096',
    textAlign: 'center',
    marginBottom: 30,
    lineHeight: 24,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F7FAFC',
    borderWidth: 1,
    borderColor: '#E2E8F0',
    borderRadius: 8,
    marginBottom: 15,
    paddingHorizontal: 15,
  },
  input: { flex: 1, height: 50, fontSize: 16, color: '#2D3748' },
  button: {
    width: '100%',
    backgroundColor: '#3F83F8',
    paddingVertical: 16,
    borderRadius: 12,
    alignItems: 'center',
  },
  buttonText: { color: '#FFFFFF', fontSize: 18, fontWeight: '600' },
  errorText: {
    color: '#E53E3E',
    textAlign: 'center',
    marginBottom: 10,
    fontSize: 14,
  },
});
```

### 🗂️ ./src/screens/forgotPassword/index.tsx

```typescript
import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  SafeAreaView,
  ActivityIndicator,
  Alert,
  StatusBar,
} from 'react-native';
import { supabase } from '../../services/supabase';
import { styles } from './style';

/**
 * @description
 * Tela onde o usuário insere seu e-mail para iniciar o fluxo de recuperação de senha.
 * Envia uma solicitação ao Supabase para que um e-mail com um link de
 * redirecionamento (deep link) seja enviado para o aplicativo.
 */
const ForgotPasswordScreen: React.FC = () => {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  /**
   * Valida o e-mail e chama a função de reset de senha do Supabase.
   * A propriedade 'redirectTo' é crucial para sobrescrever a 'Site URL' padrão
   * e garantir que o usuário seja redirecionado para o aplicativo.
   */
  const handlePasswordReset = async () => {
    setError('');
    if (!email.trim()) {
      setError('Por favor, insira seu e-mail.');
      return;
    }

    setLoading(true);
    const { error } = await supabase.auth.resetPasswordForEmail(email, {
      redirectTo: 'servicoscomunitarios://reset-password',
    });

    if (error) {
      setError(error.message);
    } else {
      Alert.alert(
        'Verifique seu E-mail',
        'Se uma conta com este e-mail existir, enviamos um link para redefinir sua senha.',
      );
    }
    setLoading(false);
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar barStyle="dark-content" />
      <View style={styles.container}>
        <Text style={styles.title}>Recuperar Senha</Text>
        <Text style={styles.subtitle}>
          Digite seu e-mail e enviaremos um link para você voltar a acessar sua
          conta.
        </Text>

        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Seu e-mail"
            value={email}
            onChangeText={text => {
              setEmail(text);
              setError('');
            }}
            keyboardType="email-address"
            autoCapitalize="none"
          />
        </View>

        {error ? <Text style={styles.errorText}>{error}</Text> : null}

        <TouchableOpacity
          style={styles.button}
          onPress={handlePasswordReset}
          disabled={loading}
        >
          {loading ? (
            <ActivityIndicator color="#FFFFFF" />
          ) : (
            <Text style={styles.buttonText}>Enviar Link de Recuperação</Text>
          )}
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default ForgotPasswordScreen;

```

### 🗂️ ./src/navigation/AppNavigator.tsx

```typescript
import React, { useState, useEffect } from 'react';
import {
  createNativeStackNavigator,
  NativeStackScreenProps,
} from '@react-navigation/native-stack';
import { View, ActivityIndicator } from 'react-native';
import { supabase } from '../services/supabase';
import { AppStackParamList } from './types';
import TabNavigator from './TabNavigator';
import EditProfileScreen from '../screens/editProfile';
import ChangePasswordScreen from '../screens/changePassword';
import AddServiceScreen from '../screens/addService';
import ServiceDetailScreen from '../screens/serviceDetail';
import ChatScreen from '../screens/chat';
import CompleteProfileScreen from '../screens/completeProfile';

const Stack = createNativeStackNavigator<AppStackParamList>();

/**
 * @description
 * Navegador principal para usuários autenticados.
 * Este componente verifica se o perfil do usuário está completo para
 * definir a rota inicial: a tela para completar o perfil ou a tela principal com abas.
 * @returns {React.FC} O navegador da pilha principal do app.
 */
const AppNavigator: React.FC = () => {
  const [isProfileComplete, setProfileComplete] = useState<boolean | null>(
    null,
  );

  useEffect(() => {
    const checkProfile = async () => {
      const {
        data: { user },
      } = await supabase.auth.getUser();
      if (user) {
        const { data: profile } = await supabase
          .from('profiles')
          .select('full_name, phone, location')
          .eq('id', user.id)
          .single();

        setProfileComplete(
          !!(profile && profile.full_name && profile.phone && profile.location),
        );
      }
    };
    checkProfile();
  }, []);

  if (isProfileComplete === null) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator size="large" color="#3F83F8" />
      </View>
    );
  }

  return (
    <Stack.Navigator
      initialRouteName={isProfileComplete ? 'MainTabs' : 'CompleteProfile'}
    >
      <Stack.Screen
        name="CompleteProfile"
        component={CompleteProfileScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="MainTabs"
        component={TabNavigator}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="EditProfile"
        component={EditProfileScreen}
        options={{ title: 'Editar Perfil' }}
      />
      <Stack.Screen
        name="ChangePassword"
        component={ChangePasswordScreen}
        options={{ title: 'Alterar Senha' }}
      />
      <Stack.Screen
        name="AddService"
        component={AddServiceScreen}
        options={{ title: 'Cadastrar Serviço' }}
      />
      <Stack.Screen
        name="ServiceDetail"
        component={ServiceDetailScreen}
        options={{ title: 'Detalhes do Serviço' }}
      />
      <Stack.Screen
        name="Chat"
        component={ChatScreen}
        options={({
          route,
        }: NativeStackScreenProps<AppStackParamList, 'Chat'>) => ({
          title: route.params.recipient.full_name,
        })}
      />
    </Stack.Navigator>
  );
};

export default AppNavigator;

```

### 🗂️ ./src/navigation/types.ts

```typescript
/**
 * @description
 * Arquivo central para a definição de tipos de navegação.
 * Usa CompositeNavigationProp para permitir navegação entre diferentes stacks.
 */

export type Profile = {
  id: string;
  full_name: string;
  avatar_url: string | null;
};

// Stack de Autenticação (não autenticado)
export type AuthStackParamList = {
  Welcome: undefined;
  Login: undefined;
  Register: undefined;
  ConfirmEmail: { email: string };
  ForgotPassword: undefined;
  ResetPassword: undefined;
};

// Tabs principais (dentro do App)
export type TabParamList = {
  Início: undefined;
  Pesquisar: { categoryId?: number } | undefined;
  Mensagens: undefined;
  Perfil: undefined;
};

// Stack principal do App (contém as Tabs + telas modais)
export type AppStackParamList = {
  MainTabs: undefined;
  CompleteProfile: undefined;
  EditProfile: undefined;
  ChangePassword: undefined;
  AddService: undefined;
  ServiceDetail: { serviceId: number };
  Chat: {
    conversationId: number;
    recipient: Profile;
  };
};
```

### 🗂️ ./src/navigation/AuthNavigator.tsx

```typescript
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { AuthStackParamList } from './types';
import WelcomeScreen from '../screens/welcome';
import LoginScreen from '../screens/login';
import RegisterScreen from '../screens/register';
import ConfirmEmailScreen from '../screens/confirmEmail';
import ForgotPasswordScreen from '../screens/forgotPassword';
import ResetPasswordScreen from '../screens/resetPassword';

const AuthStack = createNativeStackNavigator<AuthStackParamList>();

/**
 * @description
 * Componente de navegação que gerencia todas as telas relacionadas ao fluxo de autenticação
 * (telas que o usuário vê antes de fazer o login).
 * @returns {React.FC} O navegador da pilha de autenticação.
 */
const AuthNavigator: React.FC = () => {
  return (
    <AuthStack.Navigator
      screenOptions={{
        headerBackTitle: '',
        headerTintColor: '#2D3748',
      }}
    >
      <AuthStack.Screen
        name="Welcome"
        component={WelcomeScreen}
        options={{ headerShown: false }}
      />
      <AuthStack.Screen
        name="Login"
        component={LoginScreen}
        options={{ title: 'Login' }}
      />
      <AuthStack.Screen
        name="Register"
        component={RegisterScreen}
        options={{ title: 'Cadastro' }}
      />
      <AuthStack.Screen
        name="ConfirmEmail"
        component={ConfirmEmailScreen}
        options={{ title: 'Confirmação Pendente' }}
      />
      <AuthStack.Screen
        name="ForgotPassword"
        component={ForgotPasswordScreen}
        options={{ title: 'Recuperar Senha' }}
      />
      <AuthStack.Screen
        name="ResetPassword"
        component={ResetPasswordScreen}
        options={{ title: 'Redefinir Senha' }}
      />
    </AuthStack.Navigator>
  );
};

export default AuthNavigator;

```

### 🗂️ ./src/navigation/TabNavigator.tsx

```typescript
import React from 'react';
import {
  createBottomTabNavigator,
  BottomTabScreenProps,
} from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import { TabParamList } from './types';
import HomeScreen from '../screens/home';
import SearchScreen from '../screens/search';
import ProfileScreen from '../screens/profile';
import ConversationsScreen from '../screens/conversations';

const Tab = createBottomTabNavigator<TabParamList>();

/**
 * @description
 * Componente de navegação que gerencia a barra de abas principal do aplicativo.
 * É a interface principal para um usuário autenticado.
 * @returns {React.FC} O navegador de abas.
 */
const TabNavigator: React.FC = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }: BottomTabScreenProps<TabParamList>) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName: keyof typeof Ionicons.glyphMap;

          switch (route.name) {
            case 'Início':
              iconName = focused ? 'home' : 'home-outline';
              break;
            case 'Pesquisar':
              iconName = focused ? 'search' : 'search-outline';
              break;
            case 'Mensagens':
              iconName = focused ? 'chatbubbles' : 'chatbubbles-outline';
              break;
            case 'Perfil':
              iconName = focused ? 'person' : 'person-outline';
              break;
            default:
              iconName = 'alert-circle-outline';
              break;
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: '#3F83F8',
        tabBarInactiveTintColor: 'gray',
        headerShown: false,
      })}
    >
      <Tab.Screen name="Início" component={HomeScreen} />
      <Tab.Screen name="Pesquisar" component={SearchScreen} />
      <Tab.Screen name="Mensagens" component={ConversationsScreen} />
      <Tab.Screen name="Perfil" component={ProfileScreen} />
    </Tab.Navigator>
  );
};

export default TabNavigator;

```

### 🗂️ ./src/components/PristineSearch/style.ts

```typescript
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#2D3748',
    marginBottom: 20,
  },
  categoryContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 12,
  },
  categoryChip: {
    backgroundColor: '#FFFFFF',
    paddingVertical: 10,
    paddingHorizontal: 16,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#E2E8F0',
  },
  categoryChipText: {
    fontSize: 14,
    fontWeight: '500',
    color: '#4A5568',
  },
});
```

### 🗂️ ./src/components/PristineSearch/index.tsx

```typescript
import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ActivityIndicator,
  Alert,
} from 'react-native';
import { supabase } from '../../services/supabase';
import { styles } from './style';

type Category = {
  id: number;
  name: string;
};

type Props = {
  onCategoryPress: (categoryId: number, categoryName: string) => void;
};

/**
 * @description
 * Componente para o estado inicial da tela de busca, exibindo categorias.
 */
const PristineSearch: React.FC<Props> = ({ onCategoryPress }) => {
  const [categories, setCategories] = useState<Category[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCategories = async () => {
      const { data, error } = await supabase
        .from('categories')
        .select('id, name')
        .limit(8);

      if (error) {
        Alert.alert('Erro', 'Não foi possível carregar as categorias.');
      } else {
        setCategories(data || []);
      }
      setLoading(false);
    };
    fetchCategories();
  }, []);

  if (loading) {
    return <ActivityIndicator style={{ marginTop: 30 }} />;
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Explorar Categorias</Text>
      <View style={styles.categoryContainer}>
        {categories.map(category => (
          <TouchableOpacity
            key={category.id}
            style={styles.categoryChip}
            // Aqui, nós chamamos a função com os dois argumentos esperados.
            onPress={() => onCategoryPress(category.id, category.name)}
          >
            <Text style={styles.categoryChipText}>{category.name}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

export default PristineSearch;

```

### 🗂️ ./src/components/ReviewModal/style.ts

```typescript
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.6)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    backgroundColor: 'white',
    borderRadius: 12,
    padding: 20,
    width: '90%',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  starsContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 20,
  },
  commentInput: {
    backgroundColor: '#F0F0F0',
    borderRadius: 8,
    height: 100,
    padding: 10,
    textAlignVertical: 'top',
    fontSize: 16,
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#3F83F8',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
```

### 🗂️ ./src/components/ReviewModal/index.tsx

```typescript
import React, { useState } from 'react';
import {
  View,
  Text,
  Modal,
  TextInput,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { styles } from './style';

type Props = {
  visible: boolean;
  onClose: () => void;
  onSubmit: (rating: number, comment: string) => Promise<void>;
};

const ReviewModal = ({ visible, onClose, onSubmit }: Props) => {
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async () => {
    setLoading(true);
    await onSubmit(rating, comment);
    setLoading(false);
    setRating(0);
    setComment('');
    onClose();
  };

  return (
    <Modal
      animationType="fade"
      transparent={true}
      visible={visible}
      onRequestClose={onClose}
    >
      <View style={styles.overlay}>
        <View style={styles.container}>
          <Text style={styles.title}>Deixe sua Avaliação</Text>

          <View style={styles.starsContainer}>
            {[1, 2, 3, 4, 5].map(star => (
              <TouchableOpacity key={star} onPress={() => setRating(star)}>
                <Ionicons
                  name={star <= rating ? 'star' : 'star-outline'}
                  size={40}
                  color="#FFC107"
                />
              </TouchableOpacity>
            ))}
          </View>

          <TextInput
            style={styles.commentInput}
            placeholder="Escreva seu comentário (opcional)..."
            value={comment}
            onChangeText={setComment}
            multiline
          />

          <TouchableOpacity
            style={styles.button}
            onPress={handleSubmit}
            disabled={loading}
          >
            {loading ? (
              <ActivityIndicator color="#FFF" />
            ) : (
              <Text style={styles.buttonText}>Enviar Avaliação</Text>
            )}
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

export default ReviewModal;

```

### 🗂️ ./src/components/LoadingScreen/index.tsx

```typescript
import React from 'react';
import { View, ActivityIndicator, Text, StyleSheet } from 'react-native';

interface LoadingScreenProps {
  message?: string;
  size?: 'small' | 'large';
  color?: string;
}

/**
 * Componente de loading reutilizável
 * Exibe um spinner centralizado com mensagem opcional
 */
const LoadingScreen: React.FC<LoadingScreenProps> = ({
  message = 'Carregando...',
  size = 'large',
  color = '#3B82F6',
}) => {
  return (
    <View style={styles.container}>
      <ActivityIndicator size={size} color={color} />
      {message && <Text style={styles.message}>{message}</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
  },
  message: {
    marginTop: 12,
    fontSize: 14,
    color: '#64748B',
    fontWeight: '500',
  },
});

export default LoadingScreen;

```

### 🗂️ ./src/components/LocationSelectorModal/style.ts

```typescript
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.6)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    backgroundColor: 'white',
    borderRadius: 12,
    padding: 20,
    width: '90%',
    height: '80%',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F0F0F0',
    borderRadius: 8,
    paddingHorizontal: 10,
    marginBottom: 10,
  },
  input: {
    flex: 1,
    height: 45,
    fontSize: 16,
    marginLeft: 10,
  },
  listItem: {
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#EEE',
  },
  listItemText: {
    fontSize: 16,
  },
});
```

### 🗂️ ./src/components/LocationSelectorModal/index.tsx

```typescript
import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  Modal,
  TextInput,
  FlatList,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { styles } from './style';

type City = {
  id: number;
  nome: string;
  microrregiao: {
    mesorregiao: {
      UF: {
        sigla: string;
      };
    };
  };
};

type Props = {
  visible: boolean;
  onClose: () => void;
  onLocationSelect: (location: string) => void;
};

const LocationSelectorModal = ({
  visible,
  onClose,
  onLocationSelect,
}: Props) => {
  const [searchText, setSearchText] = useState('');
  const [cities, setCities] = useState<City[]>([]);
  const [loading, setLoading] = useState(false);

  // Efeito para buscar cidades na API do IBGE quando o texto de busca muda
  useEffect(() => {
    // Ignora a busca se o texto for muito curto
    if (searchText.length < 3) {
      setCities([]);
      return;
    }

    setLoading(true);
    const fetchCities = async () => {
      try {
        const response = await fetch(
          `https://servicodados.ibge.gov.br/api/v1/localidades/municipios?orderBy=nome`,
        );
        const allCities: City[] = await response.json();

        // Filtra as cidades no cliente para corresponder ao texto de busca
        const filtered = allCities.filter(city =>
          city.nome.toLowerCase().includes(searchText.toLowerCase()),
        );

        setCities(filtered);
      } catch (error) {
        console.error('Erro ao buscar cidades:', error);
      } finally {
        setLoading(false);
      }
    };

    // Debounce: Atraso para evitar muitas chamadas à API enquanto o usuário digita
    const timerId = setTimeout(() => {
      fetchCities();
    }, 500); // Espera 500ms após o usuário parar de digitar

    return () => clearTimeout(timerId); // Limpa o timer
  }, [searchText]);

  const handleSelect = (city: City) => {
    const locationString = `${city.nome}, ${city.microrregiao.mesorregiao.UF.sigla}`;
    onLocationSelect(locationString);
    onClose();
  };

  return (
    <Modal
      animationType="fade"
      transparent={true}
      visible={visible}
      onRequestClose={onClose}
    >
      <View style={styles.overlay}>
        <View style={styles.container}>
          <View style={styles.inputContainer}>
            <Ionicons name="search" size={20} color="#999" />
            <TextInput
              style={styles.input}
              placeholder="Digite o nome da sua cidade..."
              value={searchText}
              onChangeText={setSearchText}
            />
          </View>
          {loading ? (
            <ActivityIndicator style={{ marginTop: 20 }} />
          ) : (
            <FlatList
              data={cities}
              keyExtractor={item => item.id.toString()}
              renderItem={({ item }) => (
                <TouchableOpacity
                  style={styles.listItem}
                  onPress={() => handleSelect(item)}
                >
                  <Text style={styles.listItemText}>
                    {item.nome}, {item.microrregiao.mesorregiao.UF.sigla}
                  </Text>
                </TouchableOpacity>
              )}
              keyboardShouldPersistTaps="handled"
            />
          )}
        </View>
      </View>
    </Modal>
  );
};

export default LocationSelectorModal;

```

### 🗂️ ./src/components/Toast/index.tsx

```typescript
import React, { useEffect, useRef } from 'react';
import { Animated, Text, StyleSheet, ViewStyle } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export type ToastType = 'success' | 'error' | 'info' | 'warning';

interface ToastProps {
  visible: boolean;
  message: string;
  type?: ToastType;
  duration?: number;
  onHide: () => void;
}

/**
 * Componente de Toast para feedback visual de ações
 * Auto-oculta após duração especificada
 */
const Toast: React.FC<ToastProps> = ({
  visible,
  message,
  type = 'info',
  duration = 3000,
  onHide,
}) => {
  const opacity = useRef(new Animated.Value(0)).current;
  const translateY = useRef(new Animated.Value(-100)).current;

  useEffect(() => {
    if (visible) {
      // Animação de entrada
      Animated.parallel([
        Animated.timing(opacity, {
          toValue: 1,
          duration: 300,
          useNativeDriver: true,
        }),
        Animated.spring(translateY, {
          toValue: 0,
          useNativeDriver: true,
          tension: 50,
          friction: 7,
        }),
      ]).start();

      // Auto-ocultar
      const timer = setTimeout(() => {
        Animated.parallel([
          Animated.timing(opacity, {
            toValue: 0,
            duration: 300,
            useNativeDriver: true,
          }),
          Animated.timing(translateY, {
            toValue: -100,
            duration: 300,
            useNativeDriver: true,
          }),
        ]).start(() => onHide());
      }, duration);

      return () => clearTimeout(timer);
    }
  }, [visible, duration, onHide]);

  if (!visible) return null;

  const getToastStyle = (): ViewStyle => {
    switch (type) {
      case 'success':
        return { backgroundColor: '#10B981', borderColor: '#059669' };
      case 'error':
        return { backgroundColor: '#EF4444', borderColor: '#DC2626' };
      case 'warning':
        return { backgroundColor: '#F59E0B', borderColor: '#D97706' };
      default:
        return { backgroundColor: '#3B82F6', borderColor: '#2563EB' };
    }
  };

  const getIcon = () => {
    switch (type) {
      case 'success':
        return 'checkmark-circle';
      case 'error':
        return 'close-circle';
      case 'warning':
        return 'warning';
      default:
        return 'information-circle';
    }
  };

  return (
    <Animated.View
      style={[
        styles.container,
        getToastStyle(),
        {
          opacity,
          transform: [{ translateY }],
        },
      ]}
    >
      <Ionicons name={getIcon()} size={24} color="#FFFFFF" />
      <Text style={styles.message}>{message}</Text>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 50,
    left: 20,
    right: 20,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 14,
    borderRadius: 12,
    borderWidth: 1,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 8,
    zIndex: 9999,
  },
  message: {
    flex: 1,
    marginLeft: 12,
    fontSize: 15,
    fontWeight: '600',
    color: '#FFFFFF',
    lineHeight: 20,
  },
});

export default Toast;

```

### 🗂️ ./src/components/ServiceCard/style.ts

```typescript
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    marginBottom: 20,
    overflow: 'hidden',
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  image: {
    width: '100%',
    height: 150,
    backgroundColor: '#EFEFEF',
  },
  infoContainer: {
    padding: 15,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#2D3748',
    marginBottom: 4,
  },
  providerName: {
    fontSize: 14,
    color: '#718096',
    marginBottom: 8,
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  ratingText: {
    marginLeft: 6,
    fontSize: 14,
    color: '#4A5568',
  },
  price: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#3F83F8',
    marginTop: 4,
  },
});
```

### 🗂️ ./src/components/ServiceCard/index.tsx

```typescript
import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { Ionicons } from '@expo/vector-icons';
import { AppStackParamList } from '../../navigation/types'; // Importação corrigida
import { styles } from './style';

/**
 * @description
 * Define a estrutura de dados esperada para um card de serviço.
 * Exportar este tipo permite que outras partes do aplicativo (como a tela de busca)
 * saibam exatamente quais dados este componente precisa.
 */
export type ServiceCardData = {
  id: number;
  title: string;
  price: number | null;
  photo_urls: string[] | null;
  full_name: string | null;
  avg_rating: number | null;
  review_count: number | null;
};

type Props = {
  service: ServiceCardData;
};

type NavigationProp = NativeStackNavigationProp<AppStackParamList, 'MainTabs'>;

/**
 * @description
 * Componente reutilizável para exibir um resumo de um serviço em um card.
 * É responsável pela apresentação visual e pela navegação para a tela de detalhes,
 * seguindo o princípio de "Single Responsibility".
 * @param {Props} props - As propriedades do componente, contendo os dados do serviço.
 * @returns {React.FC} Um card de serviço clicável.
 */
const ServiceCard: React.FC<Props> = ({ service }) => {
  const navigation = useNavigation<NavigationProp>();

  /**
   * @description Renderiza as estrelas de avaliação com base em uma nota.
   * @param {number | null} rating - A nota média do serviço.
   * @returns {JSX.Element[]} Um array de componentes de ícone de estrela.
   */
  const renderStars = (rating: number | null) => {
    const totalStars = 5;
    const starRating = rating ? Math.round(rating * 2) / 2 : 0;
    const starElements = [];
    for (let i = 1; i <= totalStars; i++) {
      let iconName: keyof typeof Ionicons.glyphMap = 'star-outline';
      if (i <= starRating) {
        iconName = 'star';
      } else if (i - 0.5 === starRating) {
        iconName = 'star-half-sharp';
      }
      starElements.push(
        <Ionicons key={i} name={iconName} size={16} color="#FFC107" />,
      );
    }
    return starElements;
  };

  return (
    <TouchableOpacity
      style={styles.card}
      activeOpacity={0.8}
      onPress={() =>
        navigation.navigate('ServiceDetail', { serviceId: service.id })
      }
    >
      <Image
        source={{
          uri: service.photo_urls?.[0] || 'https://via.placeholder.com/300',
        }}
        style={styles.image}
      />
      <View style={styles.infoContainer}>
        <Text style={styles.title} numberOfLines={1}>
          {service.title}
        </Text>
        <Text style={styles.providerName}>
          por {service.full_name || 'Prestador'}
        </Text>
        <View style={styles.ratingContainer}>
          {renderStars(service.avg_rating)}
          <Text style={styles.ratingText}>
            {service.avg_rating ? service.avg_rating.toFixed(1) : 'Novo'} (
            {service.review_count || 0})
          </Text>
        </View>
        {service.price != null && (
          <Text style={styles.price}>R$ {service.price.toFixed(2)}</Text>
        )}
      </View>
    </TouchableOpacity>
  );
};

export default ServiceCard;

```

### 🗂️ ./src/hooks/useDebounce.ts

```typescript
import { useState, useEffect } from 'react';

/**
 * @description
 * Um Custom Hook que implementa a lógica de "debouncing".
 * Ele recebe um valor (que muda rapidamente, como um texto de busca)
 * e um atraso em milissegundos. Ele retorna uma versão "atrasada" desse valor,
 * que só é atualizada depois que o valor original para de mudar pelo tempo do atraso.
 *
 * @param {T} value O valor a ser "debounceado".
 * @param {number} delay O atraso em milissegundos.
 * @returns {T} O valor "debounceado".
 */
function useDebounce<T>(value: T, delay: number): T {
  const [debouncedValue, setDebouncedValue] = useState<T>(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]);

  return debouncedValue;
}

export default useDebounce;
```

### 🗂️ ./src/hooks/useToast.ts

```typescript
import { useState, useCallback } from 'react';
import { ToastType } from '../components/Toast';

interface ToastState {
  visible: boolean;
  message: string;
  type: ToastType;
}

/**
 * Hook para gerenciar Toast de forma simples
 *
 * @example
 * const { showToast, toastProps } = useToast();
 *
 * // Mostrar toast de sucesso
 * showToast('Operação realizada com sucesso!', 'success');
 *
 * // No JSX
 * <Toast {...toastProps} />
 */
export const useToast = () => {
  const [toast, setToast] = useState<ToastState>({
    visible: false,
    message: '',
    type: 'info',
  });

  const showToast = useCallback((message: string, type: ToastType = 'info') => {
    setToast({ visible: true, message, type });
  }, []);

  const hideToast = useCallback(() => {
    setToast(prev => ({ ...prev, visible: false }));
  }, []);

  return {
    showToast,
    hideToast,
    toastProps: {
      ...toast,
      onHide: hideToast,
    },
  };
};
```
