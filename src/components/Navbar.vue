<template>
  <header class="fixed inset-x-0 top-0 z-50 border-b transition-all duration-300 transform-gpu" :class="isScrolled
    ? 'bg-background/95 backdrop-blur-md border-border/80 shadow-lg shadow-black/20'
    : 'bg-background/90 backdrop-blur border-border'">
    <!-- Contêiner com altura retrátil dinâmica -->
    <div class="mx-auto flex max-w-7xl items-center justify-between px-6 md:px-12 transition-all duration-300"
      :class="isScrolled ? 'h-12' : 'h-16'">

      <!-- Logo e Nome da Academia -->
      <a href="#topo" class="flex items-center gap-3 transition-transform hover:scale-105">
        <img
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuDCN_9vT5wwOS8mQhgSZRx0OaDqXOsn_anJOuCU-NmBU-qPC13wrqLb-l1idvgdDw1nmET6WbouUdEuRn0AtrGTpLG4R9LaCTvyoopKMg2M0gdLGHBdP1sCajVvSz6UQZ6tUYDELRxDcbjJyXW6nzjEu6y34aiHvE-b1ik7fWbTuWShMrmuVCBQAwEYRJy7mZjmn3CjufQ115qxgAF2E7mK0WrglzR313RWcCF5JmGex0RlVj0FLDygmtj8LS_ohn5IElk"
          alt="Treino Pesado Academia" width="180" height="44" class="w-auto transition-all duration-300"
          :class="isScrolled ? 'h-8' : 'h-11'" />
        <span class="hidden font-display font-black uppercase text-white sm:block transition-all duration-300"
          :class="isScrolled ? 'text-base' : 'text-lg'">
          Treino Pesado <span class="text-primary">Academia</span>
        </span>
      </a>

      <!-- Navegação Desktop -->
      <nav class="hidden items-center gap-8 text-sm md:flex">
        <a v-for="item in navItems" :key="item.id" :href="item.href"
          class="font-medium transition-all duration-300 relative py-1" :class="activeSection === item.id
            ? 'active-glow scale-110 font-bold'
            : 'text-muted-foreground hover:text-primary'">
          {{ item.label }}
        </a>

        <!-- Botão WhatsApp -->
        <a href="https://wa.me/5585900000000?text=Ol%C3%A1!%20Quero%20saber%20mais%20sobre%20a%20Treino%20Pesado"
          target="_blank" rel="noreferrer"
          class="rounded-sm bg-primary font-bold text-primary-foreground transition-all duration-300 hover:opacity-90 shadow-[0_0_12px_rgba(0,230,91,0.3)]"
          :class="isScrolled ? 'px-3 py-1.5 text-xs' : 'px-4 py-2 text-sm'">
          Nosso WhatsApp
        </a>
      </nav>

      <!-- Botão Menu Mobile -->
      <button @click="isMobileMenuOpen = !isMobileMenuOpen"
        class="md:hidden font-display font-bold uppercase text-primary px-2.5 py-1 border border-primary/30 rounded-sm"
        aria-label="Menu">
        {{ isMobileMenuOpen ? 'Fechar' : 'Menu' }}
      </button>
    </div>

    <!-- Dropdown do Menu Mobile -->
    <div v-if="isMobileMenuOpen"
      class="md:hidden border-t border-border bg-background px-5 py-4 space-y-3 flex flex-col">
      <a v-for="item in navItems" :key="item.id" @click="isMobileMenuOpen = false" :href="item.href"
        class="font-medium py-1 transition-all duration-300" :class="activeSection === item.id
          ? 'active-glow font-bold'
          : 'text-muted-foreground hover:text-primary'">
        {{ item.label }}
      </a>

      <a href="https://wa.me/5585900000000?text=Ol%C3%A1!%20Quero%20saber%20mais%20sobre%20a%20Treino%20Pesado"
        target="_blank" rel="noreferrer"
        class="mt-2 text-center rounded-sm bg-primary px-4 py-2.5 font-bold text-primary-foreground">
        Nosso WhatsApp
      </a>
    </div>
  </header>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const isMobileMenuOpen = ref(false)
const activeSection = ref('')
const isScrolled = ref(false)

const navItems = [
  { id: 'planos', label: 'Planos', href: '#planos' },
  { id: 'aplicativo', label: 'App', href: '#aplicativo' },
  { id: 'avaliacoes', label: 'Avaliações', href: '#avaliacoes' },
  { id: 'local', label: 'Localização', href: '#local' },
  { id: 'duvidas', label: 'Dúvidas', href: '#duvidas' }
]

let sectionObserver = null

// 1. Função de scroll ultraleve: apenas altera o booleano sem ler a geometria do DOM
function onScroll() {
  isScrolled.value = window.scrollY > 50
}

onMounted(() => {
  // Escuta o scroll com passive: true para melhor performance
  window.addEventListener('scroll', onScroll, { passive: true })

  // 2. IntersectionObserver nativo para identificar a seção ativa sem causar Forced Reflow
  sectionObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          activeSection.value = entry.target.id
        }
      })
    },
    {
      // Considera a seção ativa quando ela ocupa a área central/superior da tela
      rootMargin: '-20% 0px -60% 0px',
      threshold: 0
    }
  )

  // Registra a observação em cada seção
  navItems.forEach((item) => {
    const element = document.getElementById(item.id)
    if (element) {
      sectionObserver.observe(element)
    }
  })
})

onUnmounted(() => {
  window.removeEventListener('scroll', onScroll)
  if (sectionObserver) {
    sectionObserver.disconnect()
  }
})
</script>

<style scoped>
.active-glow {
  color: #00e65b !important;
  text-shadow: 0 0 10px rgba(0, 230, 91, 0.9), 0 0 20px rgba(0, 230, 91, 0.6);
}
</style>