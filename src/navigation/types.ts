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
