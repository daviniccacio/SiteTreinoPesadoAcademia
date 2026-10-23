import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import tailwindcss from '@tailwindcss/vite'
import { fileURLToPath, URL } from 'node:url'

export default defineConfig({
  plugins: [
    vue(),
    tailwindcss()
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  preview: {
    port: 3000,
    headers: {
      // Garante cache imutável de alta performance para os assets compilados
      'Cache-Control': 'public, max-age=31536000, immutable'
    }
  },
  build: {
    cssMinify: 'esbuild',
    target: 'esnext',
    cssCodeSplit: true,
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules/vue') || id.includes('node_modules/@vue')) {
            return 'vendor'
          }
        }
      }
    }
  }
})