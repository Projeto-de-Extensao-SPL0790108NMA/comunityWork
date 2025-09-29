/**
 * @description
 * Arquivo central para a definição de tipos de navegação.
 * Segue o princípio de "Single Source of Truth" (Fonte Única da Verdade),
 * quebrando dependências circulares e organizando o código.
 */

export type Profile = {
  id: string;
  full_name: string;
  avatar_url: string | null;
};

export type AuthStackParamList = {
  Welcome: undefined;
  Login: undefined;
  Register: undefined;
  ConfirmEmail: { email: string };
  ForgotPassword: undefined;
  ResetPassword: undefined;
};

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

export type TabParamList = {
  Início: undefined;
  Pesquisar: undefined;
  Mensagens: undefined;
  Perfil: undefined;
};
