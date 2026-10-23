import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import tailwindcss from '@tailwindcss/vite'
import { fileURLToPath, URL } from 'node:url'

// Configuração do Vite para Vue 3 + Tailwind CSS v4
export default defineConfig({
  plugins: [
    vue(),
    tailwindcss() // Processa nativamente as diretivas do Tailwind v4
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  // Configuração para o servidor de teste local (npm run preview)
  preview: {
    port: 3000,
    headers: {
      // Define o tempo de cache de 1 ano (31.536.000 segundos) para os testes do Lighthouse
      'Cache-Control': 'public, max-age=31536000, immutable'
    }
  },
  build: {
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true, // Remove console.logs em produção
      },
    },
    cssMinify: 'esbuild',
    rollupOptions: {
      output: {
        manualChunks(id) {
          // Separa dependências do node_modules em um pacote vendor isolado
          if (id.includes('node_modules')) {
            return 'vendor'
          }
        }
      }
    }
  }
})