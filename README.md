🏋️‍♂️ Academia Treino Pesado - Landing Page Oficial

Landing page moderna, responsiva e de alta performance desenvolvida para a Academia Treino Pesado, localizada em São Mateus do Maranhão - MA. Focada em conversão, apresentação de estrutura e acesso ao aplicativo oficial.

🚀 Tecnologias Utilizadas

Este projeto foi construído com as seguintes tecnologias de ponta:

Vue.js 3: Framework JavaScript progressivo usando Composition API (<script setup>).

Vite.js: Ferramenta de build ultra-rápida para desenvolvimento moderno.

Tailwind CSS v4: Framework CSS utilitário integrado diretamente via @tailwindcss/vite.

Vue Router 4: Gerenciamento de rotas e navegação interna da aplicação.

Google Fonts (Outfit & Inter): Tipografia moderna para títulos e corpo do texto.

Material Symbols Outlined: Ícones vetoriais do Google.

Netlify: Plataforma de hospedagem e contínuo deployment via netlify.toml e _redirects.

⚙️ Como executar o projeto localmente

Pré-requisitos

Certifique-se de ter instalado na sua máquina:

Node.js (versão 18 ou superior)

pnpm (Gerenciador de pacotes)

Instalação

Clone o repositório:

git clone https://github.com/daviniccacio/SiteTreinoPesadoAcademia.git


Acesse a pasta do projeto:

cd SiteTreinoPesadoAcademia


Instale as dependências:

pnpm install


Inicie o servidor de desenvolvimento:

pnpm run dev


O site estará disponível no seu navegador em http://localhost:5173.

Build para Produção

Para gerar a versão otimizada pronta para envio ao servidor:

pnpm run build


Para testar a versão de produção localmente:

pnpm preview


📁 Estrutura Principal do Projeto

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


📄 Licença

Este projeto está sob a licença MIT.

👨‍💻 Autor

Feito com dedicação por Davi Nicacio de Oliveira Cunha.

GitHub

Contato: daviniccacio@gmail.com