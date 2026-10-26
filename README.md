# 🏋️‍♂️ Academia Treino Pesado - Landing Page Oficial

![Vue.js](https://img.shields.io/badge/Vue.js-35495E?style=for-the-badge&logo=vue.js&logoColor=4FC08D)
![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-B73BFE?style=for-the-badge&logo=vite&logoColor=FFD62E)
![Netlify Status](https://api.netlify.com/api/v1/badges/SEU_ID_DO_NETLIFY/deploy-status)
![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)

> Landing page moderna, responsiva e de alta performance desenvolvida para a **Academia Treino Pesado**, localizada em **São Mateus do Maranhão - MA**. Focada em conversão, apresentação de estrutura e acesso ao aplicativo oficial.

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

## ⚙️ Como executar o projeto localmente

### Pré-requisitos
Certifique-se de ter instalado na sua máquina:
- [Node.js](https://nodejs.org/en/) (versão 18 ou superior)
- [pnpm](https://pnpm.io/pt/) (Gerenciador de pacotes)

### Instalação

1. Clone o repositório:
```bash
git clone https://github.com/daviniccacio/SiteTreinoPesadoAcademia.git
```

2. Acesse a pasta do projeto:
```bash
cd SiteTreinoPesadoAcademia
```

3. Instale as dependências:
```bash
pnpm install
```

4. Inicie o servidor de desenvolvimento:
```bash
pnpm run dev
```
O site estará disponível no seu navegador em `http://localhost:5173`.

### Build para Produção
Para gerar a versão otimizada pronta para envio ao servidor:
```bash
pnpm run build
```
Para testar a versão de produção localmente:
```bash
pnpm preview
```

---

## 📁 Estrutura Principal do Projeto

```text
site-treino-pesado-academia/
├── public/
│   ├── assets/img/          # Imagens, vetores e logotipos
│   ├── robots.txt           # Diretrizes para indexação de motores de busca
│   ├── sitemap.xml          # Mapa do site para SEO (Google/Bing)
│   └── _redirects           # Configuração de fallback para SPA no Netlify
├── src/
│   ├── assets/
│   │   └── main.css         # Estilos globais e importação do Tailwind CSS v4
│   ├── components/          # Componentes modulares da interface
│   ├── composables/         # Funções utilitárias (ex: ScrollReveal)
│   ├── router/
│   │   └── index.js         # Configuração do Vue Router e GA4
│   ├── views/               # Telas principais (Home, Políticas, 404)
│   ├── App.vue              # Componente raiz da aplicação
│   └── main.js              # Ponto de entrada
└── vite.config.js           # Configuração do Vite com cabeçalhos de segurança
```

---

## 📄 Licença

Este projeto está sob a licença [MIT](./LICENSE).

---

## 👨‍💻 Autor

Feito com dedicação por **Davi Nicacio de Oliveira Cunha**.
- [GitHub](https://github.com/daviniccacio)
- [LinkedIn](https://linkedin.com/in/seulinkedin) <!-- Substitua pelo seu link -->
- Contato: daviniccacio@gmail.com