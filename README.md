# LINKA - Plataforma de Serviços Comunitários 📱

<p align="center">
  <img src="./src/assets/logo.png" alt="Logo LINKA" width="150">
</p>

<p align="center">
  <strong>Conectando vizinhos, fortalecendo a economia local.</strong>
</p>

<p align="center">
  <a href="https://github.com/Projeto-de-Extensao-SPL0790108NMA/comunityWork/actions/workflows/main.yml">
    <img src="https://github.com/Projeto-de-Extensao-SPL0790108NMA/comunityWork/actions/workflows/main.yml/badge.svg" alt="Status da Verificação de Código">
  </a>
  <img src="https://img.shields.io/badge/Status-Em%20Desenvolvimento-orange" alt="Status do Projeto">
  <img src="https://img.shields.io/badge/Expo-SDK%2054-000020?logo=expo" alt="Expo SDK 54">
  <img src="https://img.shields.io/badge/React%20Native-0.81-61DAFB?logo=react" alt="React Native">
  <img src="https://img.shields.io/badge/Supabase-Backend-3ECF8E?logo=supabase" alt="Supabase">
  <img src="https://img.shields.io/badge/License-MIT-green.svg" alt="License MIT">
</p>

> **Nota:** Este é um projeto acadêmico em desenvolvimento para as disciplinas de DevOps, Extensão, Fábrica de Software e Tópicos Avançados em Ciência da Computação na UNINORTE.

---

## 📑 Índice

- [📋 Sobre o Projeto](#sobre-o-projeto)
- [🎯 Objetivos](#objetivos)
- [🚀 Stack Tecnológica](#stack-tecnológica)
- [🗓️ Roadmap do MVP](#roadmap-do-mvp)
- [🔧 Como Rodar o Projeto](#como-rodar-o-projeto)
- [📋 Padrões e "Clean Code"](#padrões-e-clean-code)
- [🤝 Contribuição](#contribuição)
- [📄 Licença](#licença)
- [👨‍💻 Autor](#autor)

<a id="sobre-o-projeto"></a>

## 📋 Sobre o Projeto

O **LINKA** é uma aplicação móvel que visa conectar prestadores de serviços locais (autônomos e microempreendedores) a moradores da mesma comunidade. O projeto funciona como um marketplace hiperlocal, promovendo a inclusão digital de trabalhadores informais e fortalecendo a economia local através da confiança e da colaboração entre vizinhos.

Este projeto é um trabalho prático que integra os conhecimentos de múltiplas disciplinas do 8º período de Ciência da Computação.

<a id="objetivos"></a>

## 🎯 Objetivos

- **Conectar** a oferta e a demanda de serviços em uma escala hiperlocal.
- **Promover Inclusão Digital** para trabalhadores que atuam fora das grandes plataformas.
- **Construir um Ecossistema de Confiança** através de um sistema de avaliações e chat direto.
- **Estimular a Economia Local**, incentivando que o capital circule dentro da própria comunidade.

<a id="stack-tecnológica"></a>

## 🚀 Stack Tecnológica

A arquitetura do projeto foi definida com foco em agilidade, escalabilidade e nas melhores práticas do desenvolvimento moderno.

- **Frontend:**
  - **React Native com Expo:** Para o desenvolvimento de um aplicativo móvel multiplataforma (Android/iOS).
  - **TypeScript:** Para garantir a segurança de tipos e a manutenibilidade do código.
  - **React Navigation:** Para o gerenciamento de todas as rotas e fluxos de navegação.
- **Backend (BaaS - Backend-as-a-Service):**
  - **Supabase:** Utilizado como nossa espinha dorsal, provendo:
    - **Autenticação:** Gerenciamento completo de usuários, senhas e sessões (JWT).
    - **Banco de Dados:** PostgreSQL para todos os dados da aplicação.
    - **Storage:** Armazenamento de arquivos para fotos de perfil e de serviços.
    - **Realtime:** Funcionalidade de WebSocket para o nosso sistema de chat.
    - **Funções (RPC):** Para lógicas de negócio customizadas no banco de dados.
- **Qualidade de Código e Automação (DevOps):**
  - **ESLint + Prettier:** Para garantir um padrão de código consistente e livre de erros.
  - **Husky + lint-staged + commitlint:** Para automatizar a verificação de qualidade e o padrão de commits antes que o código seja enviado ao repositório.
  - **GitHub Actions:** Para Integração Contínua (CI), rodando as verificações de qualidade em cada `push` e `pull request`.

<a id="roadmap-do-mvp"></a>

## 🗓️ Roadmap do MVP

O escopo do nosso Produto Mínimo Viável (MVP) foi concluído, validando o ciclo de valor completo da plataforma.

#### ✅ **Fase 1: Fundação e Autenticação (Concluída)**

- Setup do projeto com Expo, TypeScript e PNPM.
- Configuração do Supabase (Banco de Dados, Auth, Storage).
- Fluxo completo de autenticação: Cadastro, Login, Confirmação por OTP, Recuperação de Senha.
- Onboarding e Gerenciamento de Perfil (CRUD com foto e localização).

#### ✅ **Fase 2: Funcionalidades do Marketplace (Concluída)**

- Cadastro de Serviços com múltiplas fotos e categorias.
- Tela de Busca com busca por texto (debounce) e filtro de categorias.
- Tela de Detalhes do Serviço com carrossel de imagens e informações do prestador.

#### ✅ **Fase 3: Interação e Confiança (Concluída)**

- Sistema de Chat em Tempo Real entre cliente e prestador.
- Sistema de Avaliações (1-5 estrelas e comentários).

#### 🔲 **Fase 4: Próximos Passos (Planejado)**

- Painel para o prestador gerenciar seus próprios serviços (editar/excluir).
- Busca por geolocalização.
- Notificações Push para novas mensagens e avaliações.

<a id="como-rodar-o-projeto"></a>

## 🔧 Como Rodar o Projeto

### Pré-requisitos

- Node.js (v20+)
- **pnpm** (gerenciador de pacotes - `npm install -g pnpm`)
- Conta no **Supabase** (necessário para as variáveis de ambiente)

### Instalação

1.  **Clone o repositório**

    ```bash
    git clone [REPOSITORIO]

    cd SEU-REPOSITORIO
    ```

2.  **Instale as dependências**

    ```bash
    pnpm install
    ```

3.  **Configure as variáveis de ambiente**
    - Crie um arquivo `.env` na raiz do projeto.
    - Adicione suas chaves do Supabase (encontradas em _Project Settings > API_):
      ```env
      EXPO_PUBLIC_SUPABASE_URL=SUA_URL_DO_SUPABASE
      EXPO_PUBLIC_SUPABASE_ANON_KEY=SUA_CHAVE_ANON_DO_SUPABASE
      ```

4.  **Inicie o servidor de desenvolvimento**

    ```bash
    pnpm start
    ```

    - Escaneie o QR Code com o aplicativo **Expo Go** no seu celular.

<a id="padrões-e-clean-code"></a>

## 📋 Padrões e "Clean Code"

Este projeto foi desenvolvido com um forte compromisso com a qualidade e as boas práticas da Engenharia de Software.

- **Documentação:** Todos os componentes e funções complexas são documentados com JSDoc.
- **"Clean Code":** Aplicamos princípios como _Single Responsibility_ (componentes focados em uma única tarefa) e _DRY_ (centralização de tipos e lógica reutilizável em hooks).
- **Conventional Commits:** Todas as mensagens de commit seguem o padrão `tipo(escopo): descrição` para um histórico claro e legível.
- **Automação de Qualidade:** Com Husky, ESLint e Prettier, garantimos que todo código que entra no repositório é verificado e formatado automaticamente.

<a id="contribuição"></a>

## 🤝 Contribuição

Este é um projeto acadêmico, mas sugestões e melhorias são sempre bem-vindas. Para contribuir:

1.  Faça um **Fork** do projeto.
2.  Crie uma nova **Branch** (`feature/NovaFuncionalidade`).
3.  Faça o **Commit** das suas alterações seguindo o padrão Conventional Commits.
4.  Abra um **Pull Request**.

<a id="licença"></a>

## 📄 Licença

Este projeto está licenciado sob a **Licença MIT**.

<a id="autor"></a>

## 👨‍💻 Autor

| [<img src="https://avatars.githubusercontent.com/u/173159590?v=4" width=115><br><sub>Natanael Santos da Silva</sub>](https://github.com/Natanael-SSilva) |
| :------------------------------------------------------------------------------------------------------------------------------------------------------: |

Projeto desenvolvido como parte do currículo do curso de Ciência da Computação.
