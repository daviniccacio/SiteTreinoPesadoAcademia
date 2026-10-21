import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import tailwindcss from '@tailwindcss/vite'

// Configuração do Vite com suporte ao Vue 3 e Tailwind CSS v4
export default defineConfig({
  plugins: [
    vue(),
    tailwindcss(),
  ],
})  