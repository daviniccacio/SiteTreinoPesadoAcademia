<template>
  <header class="fixed inset-x-0 top-0 z-50 border-b border-border bg-background/90 backdrop-blur">
    <!-- Contêiner expandido (max-w-7xl) para afastar os elementos nas extremidades -->
    <div class="mx-auto flex h-16 max-w-7xl items-center justify-between px-6 md:px-12">
      
      <!-- Logo e Nome da Academia -->
      <a href="#topo" class="flex items-center gap-3 transition-transform hover:scale-105">
        <img 
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuDCN_9vT5wwOS8mQhgSZRx0OaDqXOsn_anJOuCU-NmBU-qPC13wrqLb-l1idvgdDw1nmET6WbouUdEuRn0AtrGTpLG4R9LaCTvyoopKMg2M0gdLGHBdP1sCajVvSz6UQZ6tUYDELRxDcbjJyXW6nzjEu6y34aiHvE-b1ik7fWbTuWShMrmuVCBQAwEYRJy7mZjmn3CjufQ115qxgAF2E7mK0WrglzR313RWcCF5JmGex0RlVj0FLDygmtj8LS_ohn5IElk" 
          alt="Treino Pesado Academia" 
          class="h-11 w-auto" 
        />
        <span class="hidden font-display text-lg font-black uppercase text-white sm:block">
          Treino Pesado <span class="text-primary">Academia</span>
        </span>
      </a>

      <!-- Navegação Desktop -->
      <nav class="hidden items-center gap-8 text-sm md:flex">
        <a 
          v-for="item in navItems" 
          :key="item.id"
          :href="item.href" 
          class="font-medium transition-all duration-300 relative py-1"
          :class="activeSection === item.id 
            ? 'active-glow scale-110 font-bold' 
            : 'text-muted-foreground hover:text-primary'"
        >
          {{ item.label }}
        </a>

        <!-- Botão WhatsApp -->
        <a 
          href="https://wa.me/5585900000000?text=Ol%C3%A1!%20Quero%20saber%20mais%20sobre%20a%20Treino%20Pesado" 
          target="_blank" 
          rel="noreferrer" 
          class="rounded-sm bg-primary px-4 py-2 font-bold text-primary-foreground transition hover:opacity-90 shadow-[0_0_12px_rgba(0,230,91,0.3)]"
        >
          Nosso WhatsApp
        </a>
      </nav>

      <!-- Botão Menu Mobile -->
      <button 
        @click="isMobileMenuOpen = !isMobileMenuOpen" 
        class="md:hidden font-display font-bold uppercase text-primary px-2.5 py-1 border border-primary/30 rounded-sm"
        aria-label="Menu"
      >
        {{ isMobileMenuOpen ? 'Fechar' : 'Menu' }}
      </button>
    </div>

    <!-- Dropdown do Menu Mobile -->
    <div 
      v-if="isMobileMenuOpen" 
      class="md:hidden border-t border-border bg-background px-5 py-4 space-y-3 flex flex-col"
    >
      <a 
        v-for="item in navItems" 
        :key="item.id"
        @click="isMobileMenuOpen = false" 
        :href="item.href" 
        class="font-medium py-1 transition-all duration-300"
        :class="activeSection === item.id 
          ? 'active-glow font-bold' 
          : 'text-muted-foreground hover:text-primary'"
      >
        {{ item.label }}
      </a>

      <a 
        href="https://wa.me/5585900000000?text=Ol%C3%A1!%20Quero%20saber%20mais%20sobre%20a%20Treino%20Pesado" 
        target="_blank" 
        rel="noreferrer" 
        class="mt-2 text-center rounded-sm bg-primary px-4 py-2.5 font-bold text-primary-foreground"
      >
        Nosso WhatsApp
      </a>
    </div>
  </header>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const isMobileMenuOpen = ref(false)
const activeSection = ref('')

const navItems = [
  { id: 'planos', label: 'Planos', href: '#planos' },
  { id: 'aplicativo', label: 'App', href: '#aplicativo' },
  { id: 'avaliacoes', label: 'Avaliações', href: '#avaliacoes' },
  { id: 'local', label: 'Onde estamos', href: '#local' },
  { id: 'duvidas', label: 'Dúvidas', href: '#duvidas' }
]

function handleScroll() {
  // 1. Se estiver no topo da página (menos de 150px de rolagem), limpa o destaque
  if (window.scrollY < 150) {
    activeSection.value = ''
    return
  }

  // 2. Ponto de verificação visual na janela do navegador (200px a contar do topo)
  const triggerPoint = 200
  let currentActive = ''

  for (const item of navItems) {
    const element = document.getElementById(item.id)
    if (element) {
      const rect = element.getBoundingClientRect()
      
      // A seção está ativa apenas se o seu topo já cruzou os 200px e a sua base ainda não saiu da tela
      if (rect.top <= triggerPoint && rect.bottom > triggerPoint) {
        currentActive = item.id
        break
      }
    }
  }

  activeSection.value = currentActive
}

onMounted(() => {
  handleScroll()
  window.addEventListener('scroll', handleScroll, { passive: true })
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<style scoped>
/* Efeito de iluminação neon verde */
.active-glow {
  color: #00e65b !important;
  text-shadow: 0 0 10px rgba(0, 230, 91, 0.9), 0 0 20px rgba(0, 230, 91, 0.6);
}
</style>