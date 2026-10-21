# 🏋️‍♂️ Academia Treino Pesado - Landing Page Oficial

Landing page moderna, responsiva e de alta performance desenvolvida para a **Academia Treino Pesado**, localizada em **São Mateus do Maranhão - MA**.

---

## 🚀 Tecnologias Utilizadas

Este projeto foi construído com as seguintes tecnologias de ponta:

- **[Vue.js 3](https://vuejs.org/)**: Framework JavaScript progressivo usando **Composition API** (`<script setup>`).
- **[Vite.js](https://vitejs.dev/)**: Ferramenta de build ultra-rápida para desenvolvimento moderno.
- **[Tailwind CSS v4](https://tailwindcss.com/)**: Framework CSS utilitário integrado diretamente via `@tailwindcss/vite`.
- **[Vue Router 4](https://router.vuejs.org/)**: Gerenciamento de rotas e navegação interna da aplicação.
- **[Google Fonts (Outfit & Inter)](https://fonts.google.com/)**: Tipografia moderna para títulos e corpo do texto.
- **[Material Symbols Outlined](https://fonts.google.com/icons)**: Ícones vetoriais do Google.
- **[Netlify](https://www.netlify.com/)**: Plataforma de hospedagem e contínuo deployment via `netlify.toml` e `_redirects`.

---

## 📁 Estrutura do Projeto

```text
site-treino-pesado-academia/
├── public/
│   └── _redirects              # Configuração de fallback para o Netlify (SPA)
├── src/
│   ├── assets/
│   │   └── main.css            # Estilos globais e importação do Tailwind CSS v4
│   ├── components/
│   │   ├── Navbar.vue          # Barra de navegação fixa com links rápidos
│   │   ├── HeroSection.vue     # Chamada principal com estatísticas e CTAs
│   │   ├── StatsTicker.vue     # Barra de destaques de diferenciais
│   │   ├── PricingSection.vue  # Tabela e cards de planos (Diária, Quinzena, Mensal)
│   │   ├── AppShowcase.vue     # Destaque do aplicativo oficial Android (Play Store)
│   │   ├── StructureSection.vue# Pilares da estrutura e modalidades da academia
│   │   ├── LocationSection.vue # Endereço, mapa interativo e horários
│   │   ├── InstagramBanner.vue # Chamada para a comunidade no Instagram
│   │   ├── FaqSection.vue      # Perguntas e respostas frequentes (Accordion)
│   │   └── FooterSection.vue   # Rodapé institucional e contatos
│   ├── router/
│   │   └── index.js            # Configuração do Vue Router
│   ├── views/
│   │   └── HomeView.vue        # View principal agregando todos os componentes
│   ├── App.vue                 # Componente raiz da aplicação
│   └── main.js                 # Ponto de entrada (instanciação do Vue + Router)
├── .gitignore                  # Arquivos desconsiderados pelo Git
├── index.html                  # HTML principal com fontes e ícones
├── netlify.toml                # Configurações de build e redirecionamentos no Netlify
├── package.json                # Gerenciador de dependências e scripts do projeto
├── pnpm-lock.yaml              # Trava de versões do PNPM
└── vite.config.js              # Configuração do Vite com suporte ao Vue e Tailwind v4