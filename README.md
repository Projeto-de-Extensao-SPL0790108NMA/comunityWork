# LINKA - Plataforma de Serviços Comunitários 📱

<p align="center">
  <img src="./src/assets/logo.png" alt="Logo LINKA" width="150">
</p>

<p align="center">
  <strong>Conectando vizinhos, fortalecendo a economia local.</strong>
</p>

<p align="center">
  <!-- Status do CI/CD -->
  <a href="https://github.com/Projeto-de-Extensao-SPL0790108NMA/comunityWork/actions/workflows/ci.yml">
    <img src="https://github.com/Projeto-de-Extensao-SPL0790108NMA/comunityWork/actions/workflows/ci.yml/badge.svg?branch=main" alt="CI/CD Pipeline">
  </a>
  
  <!-- Cobertura de Código -->
  <a href="https://codecov.io/gh/Projeto-de-Extensao-SPL0790108NMA/comunityWork">
    <img src="https://codecov.io/gh/Projeto-de-Extensao-SPL0790108NMA/comunityWork/branch/main/graph/badge.svg" alt="Cobertura de Código">
  </a>
  
  <!-- Status do Projeto -->
  <img src="https://img.shields.io/badge/Status-Em%20Desenvolvimento-orange?style=flat-square" alt="Status do Projeto">
  
  <!-- Tecnologias -->
  <img src="https://img.shields.io/badge/Expo-SDK%2054-000020?style=flat-square&logo=expo" alt="Expo SDK 54">
  <img src="https://img.shields.io/badge/React%20Native-0.81-61DAFB?style=flat-square&logo=react" alt="React Native">
  <img src="https://img.shields.io/badge/TypeScript-5.6-3178C6?style=flat-square&logo=typescript" alt="TypeScript">
  <img src="https://img.shields.io/badge/Supabase-Backend-3ECF8E?style=flat-square&logo=supabase" alt="Supabase">
  
  <!-- Qualidade -->
  <img src="https://img.shields.io/badge/Code%20Style-Prettier-ff69b4?style=flat-square&logo=prettier" alt="Prettier">
  <img src="https://img.shields.io/badge/Linting-ESLint-4B32C3?style=flat-square&logo=eslint" alt="ESLint">
  <img src="https://img.shields.io/badge/Commits-Conventional-fe5196?style=flat-square&logo=conventionalcommits" alt="Conventional Commits">
  
  <!-- Licença -->
  <img src="https://img.shields.io/badge/License-MIT-green.svg?style=flat-square" alt="License MIT">
</p>

<p align="center">
  <a href="#-sobre-o-projeto">Sobre</a> •
  <a href="#-objetivos">Objetivos</a> •
  <a href="#-stack-tecnológica">Stack</a> •
  <a href="#-como-rodar-o-projeto">Como Rodar</a> •
  <a href="#-qualidade-e-devops">DevOps</a> •
  <a href="#-roadmap-do-mvp">Roadmap</a> •
  <a href="#-contribuição">Contribuir</a>
</p>

---

> **🎓 Projeto Acadêmico**  
> Trabalho integrado das disciplinas de **DevOps**, **Extensão**, **Fábrica de Software** e **Tópicos Avançados em Ciência da Computação** - 8º período de Ciência da Computação na UNINORTE.

---

## 📋 Sobre o Projeto

O **LINKA** é uma aplicação móvel que visa conectar prestadores de serviços locais (autônomos e microempreendedores) a moradores da mesma comunidade. O projeto funciona como um **marketplace hiperlocal**, promovendo a inclusão digital de trabalhadores informais e fortalecendo a economia local através da confiança e da colaboração entre vizinhos.

### 🌟 Diferenciais

- ✅ **Hiperlocal**: Foco em serviços da sua comunidade
- ✅ **Inclusão Digital**: Plataforma acessível para trabalhadores informais
- ✅ **Chat em Tempo Real**: Comunicação direta entre cliente e prestador
- ✅ **Sistema de Avaliações**: Construção de confiança através de feedback
- ✅ **Economia Circular**: Fortalecimento da economia local

---

## 🎯 Objetivos

- **Conectar** a oferta e a demanda de serviços em uma escala hiperlocal
- **Promover Inclusão Digital** para trabalhadores que atuam fora das grandes plataformas
- **Construir um Ecossistema de Confiança** através de um sistema de avaliações e chat direto
- **Estimular a Economia Local**, incentivando que o capital circule dentro da própria comunidade

---

## 🚀 Stack Tecnológica

### **Frontend**

- **React Native** com **Expo** - Desenvolvimento multiplataforma (Android/iOS)
- **TypeScript** - Segurança de tipos e manutenibilidade
- **React Navigation** - Gerenciamento de rotas e navegação

### **Backend (BaaS)**

- **Supabase** - Backend-as-a-Service completo
  - 🔐 **Autenticação**: JWT, OTP, recuperação de senha
  - 💾 **PostgreSQL**: Banco de dados relacional
  - 📁 **Storage**: Upload de imagens
  - ⚡ **Realtime**: WebSocket para chat
  - 🔧 **RPC**: Funções customizadas

### **Qualidade & DevOps**

- **ESLint + Prettier** - Padronização de código
- **Husky + lint-staged** - Pre-commit hooks
- **Commitlint** - Conventional Commits
- **Jest** - Testes unitários (40%+ de cobertura)
- **GitHub Actions** - CI/CD Pipeline automatizado

---

## 🔧 Como Rodar o Projeto

### Pré-requisitos

\`\`\`bash

# Verificar versões

node --version # v20+
pnpm --version # 8+
\`\`\`

### Instalação

\`\`\`bash

# 1. Clone o repositório

git clone https://github.com/Projeto-de-Extensao-SPL0790108NMA/comunityWork.git
cd comunityWork

# 2. Instale as dependências

pnpm install

# 3. Configure as variáveis de ambiente

cp .env.example .env

# Edite o .env com suas credenciais do Supabase

# 4. Inicie o servidor de desenvolvimento

pnpm start
\`\`\`

### Comandos Disponíveis

\`\`\`bash

# Desenvolvimento

pnpm start # Inicia o Expo Dev Server
pnpm android # Roda no emulador Android
pnpm ios # Roda no simulador iOS

# Qualidade de Código

pnpm lint # Verifica código com ESLint
pnpm lint:prettier:check # Verifica formatação

# Testes

pnpm test # Roda testes unitários
pnpm test:watch # Modo watch para desenvolvimento
pnpm test:coverage # Gera relatório de cobertura
\`\`\`

---

## 🏗️ Qualidade e DevOps

### Pipeline CI/CD

O projeto possui um **pipeline automatizado** no GitHub Actions que:

1. ✅ **Prettier** - Verifica formatação do código
2. ✅ **ESLint** - Analisa qualidade e padrões
3. ✅ **Commitlint** - Valida mensagens de commit
4. ✅ **Testes Unitários** - Executa suite de testes com cobertura
5. ✅ **Build Check** - Verifica compilação TypeScript

### Métricas de Qualidade

| Métrica                 | Valor             | Status |
| ----------------------- | ----------------- | ------ |
| **Cobertura de Código** | 40%+              | ✅     |
| **Testes Unitários**    | 11+ testes        | ✅     |
| **Padrão de Commits**   | Conventional      | ✅     |
| **Code Style**          | Prettier + ESLint | ✅     |
| **Type Safety**         | TypeScript Strict | ✅     |

### Conventional Commits

Seguimos o padrão de commits semânticos:

\`\`\`bash
feat(auth): add OTP verification
fix(chat): resolve message duplication
docs(readme): update installation steps
test(hooks): add useDebounce unit tests
ci(actions): implement complete pipeline
\`\`\`

**Tipos:** \`feat\`, \`fix\`, \`docs\`, \`style\`, \`refactor\`, \`test\`, \`chore\`, \`ci\`

---

## 🗓️ Roadmap do MVP

### ✅ **Fase 1: Fundação e Autenticação** (Concluída)

- [x] Setup do projeto (Expo, TypeScript, PNPM)
- [x] Configuração Supabase (DB, Auth, Storage)
- [x] Fluxo de autenticação completo
- [x] Onboarding e perfil de usuário

### ✅ **Fase 2: Marketplace** (Concluída)

- [x] CRUD de serviços com múltiplas fotos
- [x] Tela de busca com debounce
- [x] Filtros por categoria

### ✅ **Fase 3: Interação e Confiança** (Concluída)

- [x] Sistema de chat em tempo real
- [x] Sistema de avaliações

### ✅ **Fase 4: Qualidade e DevOps** (Concluída)

- [x] Testes unitários (40%+ cobertura)
- [x] Pipeline CI/CD automatizado
- [x] Conventional Commits

### 🔲 **Fase 5: Próximos Passos** (Planejado)

- [ ] Painel do prestador
- [ ] Busca por geolocalização
- [ ] Notificações push

---

## 📄 Licença

Este projeto está licenciado sob a **Licença MIT**.

---

## 👨‍💻 Autor

| [<img src="https://avatars.githubusercontent.com/u/173159590?v=4" width=115><br><sub>Natanael Santos da Silva</sub>](https://github.com/Natanael-SSilva) |
| :------------------------------------------------------------------------------------------------------------------------------------------------------: |

Projeto desenvolvido como parte do currículo do curso de Ciência da Computação - UNINORTE.

---

<p align="center">
  Desenvolvido com ❤️ por <a href="https://github.com/Natanael-SSilva">Natanael Santos</a>
</p>
