<template>
  <header 
    class="fixed inset-x-0 top-0 z-50 border-b transition-all duration-300 transform-gpu" 
    :class="isScrolled
      ? 'bg-background/95 backdrop-blur-md border-border/80 shadow-lg shadow-black/20'
      : 'bg-background/90 backdrop-blur border-border'"
  >
    <!-- Contêiner com altura retrátil dinâmica -->
    <div 
      class="mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6 md:px-12 transition-all duration-300"
      :class="isScrolled ? 'h-12' : 'h-16'"
    >

      <!-- Logo e Nome da Academia (Ajustado para aparecer no telemóvel) -->
      <a href="#topo" class="flex items-center gap-2 transition-transform hover:opacity-95">
        <img
          src="/assets/img/logo-treino-pesado-icon.png"
          alt="Treino Pesado Academia" 
          width="180" 
          height="44" 
          class="w-auto transition-all duration-300 object-contain"
          :class="isScrolled ? 'h-7 sm:h-9' : 'h-9 sm:h-11'" 
        />
        <!-- Nome visível em telas pequenas e grandes -->
        <span 
          class="font-display font-black uppercase text-white transition-all duration-300 leading-tight text-xs xs:text-sm sm:text-base md:text-lg"
        >
          Treino Pesado <span class="text-primary">Academia</span>
        </span>
      </a>

      <!-- Navegação Desktop (Telas Médias e Grandes) -->
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

        <!-- Botão WhatsApp Desktop -->
        <a 
          href="https://wa.me/5599984079671?text=Ol%C3%A1!%20Quero%20saber%20mais%20sobre%20a%20Treino%20Pesado"
          target="_blank" 
          rel="noreferrer"
          class="rounded-sm bg-primary font-bold text-primary-foreground transition-all duration-300 hover:opacity-90 shadow-[0_0_12px_rgba(0,230,91,0.3)]"
          :class="isScrolled ? 'px-3 py-1.5 text-xs' : 'px-4 py-2 text-sm'"
        >
          Nosso WhatsApp
        </a>
      </nav>

      <!-- Botão Menu Mobile (Ícone de 3 Listras / X) -->
      <button 
        @click="isMobileMenuOpen = !isMobileMenuOpen"
        class="md:hidden flex h-9 w-9 items-center justify-center rounded-sm border border-primary/40 bg-surface/60 text-primary transition-all duration-300 hover:border-primary focus:outline-none"
        :aria-label="isMobileMenuOpen ? 'Fechar Menu' : 'Abrir Menu'"
      >
        <svg 
          class="h-5 w-5 transition-transform duration-300"
          :class="{ 'rotate-90': isMobileMenuOpen }"
          fill="none" 
          viewBox="0 0 24 24" 
          stroke="currentColor" 
          stroke-width="2.5"
        >
          <!-- Ícone das 3 Listras (quando fechado) -->
          <path 
            v-if="!isMobileMenuOpen" 
            stroke-linecap="round" 
            stroke-linejoin="round" 
            d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" 
          />
          <!-- Ícone de 'X' (quando aberto) -->
          <path 
            v-else 
            stroke-linecap="round" 
            stroke-linejoin="round" 
            d="M6 18L18 6M6 6l12 12" 
          />
        </svg>
      </button>
    </div>

    <!-- Dropdown do Menu Mobile com Animação de Deslize (Slide) -->
    <Transition name="slide-down">
      <div 
        v-if="isMobileMenuOpen"
        class="md:hidden border-t border-border bg-background/95 backdrop-blur-md px-5 py-4 space-y-3 flex flex-col shadow-xl"
      >
        <a 
          v-for="item in navItems" 
          :key="item.id" 
          @click="isMobileMenuOpen = false" 
          :href="item.href"
          class="font-medium py-1.5 transition-all duration-300 text-sm" 
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
          class="mt-2 text-center rounded-sm bg-primary px-4 py-2.5 font-bold text-sm text-primary-foreground shadow-[0_0_12px_rgba(0,230,91,0.3)]"
        >
          Nosso WhatsApp
        </a>
      </div>
    </Transition>
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

function onScroll() {
  isScrolled.value = window.scrollY > 50
}

onMounted(() => {
  window.addEventListener('scroll', onScroll, { passive: true })

  sectionObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          activeSection.value = entry.target.id
        }
      })
    },
    {
      rootMargin: '-20% 0px -60% 0px',
      threshold: 0
    }
  )

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

/* --- ANIMAÇÃO DE DESLIZE DO MENU MOBILE (SLIDE DOWN) --- */
.slide-down-enter-active,
.slide-down-leave-active {
  transition: all 0.35s cubic-bezier(0.16, 1, 0.3, 1);
  max-height: 320px;
  opacity: 1;
  overflow: hidden;
}

.slide-down-enter-from,
.slide-down-leave-to {
  max-height: 0px;
  opacity: 0;
  overflow: hidden;
  padding-top: 0;
  padding-bottom: 0;
}
</style>