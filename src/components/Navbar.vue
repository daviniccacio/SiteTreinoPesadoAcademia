<template>
  <header class="fixed inset-x-0 top-0 z-50 border-b border-border bg-background/90 backdrop-blur">
    <div class="mx-auto flex h-16 max-w-6xl items-center justify-between px-5">
      
      <!-- Logo e Nome -->
      <a href="#topo" class="flex items-center">
        <img 
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuDCN_9vT5wwOS8mQhgSZRx0OaDqXOsn_anJOuCU-NmBU-qPC13wrqLb-l1idvgdDw1nmET6WbouUdEuRn0AtrGTpLG4R9LaCTvyoopKMg2M0gdLGHBdP1sCajVvSz6UQZ6tUYDELRxDcbjJyXW6nzjEu6y34aiHvE-b1ik7fWbTuWShMrmuVCBQAwEYRJy7mZjmn3CjufQ115qxgAF2E7mK0WrglzR313RWcCF5JmGex0RlVj0FLDygmtj8LS_ohn5IElk" 
          alt="Treino Pesado Academia" 
          class="h-22.5 w-auto" 
        />
        <span class="hidden font-display text-lg font-black uppercase text-white sm:block">
          Treino Pesado <span class="text-primary"> Academia</span>
        </span>
      </a>

      <!-- Navegação Desktop -->
      <nav class="hidden items-center gap-7 text-sm md:flex">
        <a href="#planos" class="text-muted-foreground transition hover:text-primary font-medium">Planos</a>
        <a href="#app" class="text-muted-foreground transition hover:text-primary font-medium">App</a>
        <a href="#avaliacoes" class="text-muted-foreground transition hover:text-primary font-medium">Avaliações</a>
        <a href="#duvidas" class="text-muted-foreground transition hover:text-primary font-medium">Dúvidas</a>
        <a href="#local" class="text-muted-foreground transition hover:text-primary font-medium">Onde estamos</a>
        <a 
          href="https://wa.me/5585900000000?text=Ol%C3%A1!%20Quero%20saber%20mais%20sobre%20a%20Treino%20Pesado" 
          target="_blank" 
          rel="noreferrer" 
          class="rounded-sm bg-primary px-4 py-2 font-bold text-primary-foreground transition hover:opacity-90"
        >
          Nosso WhatsApp
        </a>
      </nav>

      <!-- Botão Menu Mobile -->
      <button 
        @click="isMobileMenuOpen = !isMobileMenuOpen" 
        class="md:hidden font-display font-bold uppercase text-primary px-2 py-1 border border-primary/30 rounded-sm"
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
      <a @click="isMobileMenuOpen = false" href="#planos" class="text-muted-foreground hover:text-primary font-medium py-1">Planos</a>
      <a @click="isMobileMenuOpen = false" href="#app" class="text-muted-foreground hover:text-primary font-medium py-1">App</a>
      <a @click="isMobileMenuOpen = false" href="#avaliacoes" class="text-muted-foreground hover:text-primary font-medium py-1">Avaliações</a>
      <a @click="isMobileMenuOpen = false" href="#duvidas" class="text-muted-foreground hover:text-primary font-medium py-1">Dúvidas</a>
      <a @click="isMobileMenuOpen = false" href="#local" class="text-muted-foreground hover:text-primary font-medium py-1">Onde estamos</a>
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
import { ref } from 'vue'

// Estado para controlar a abertura do menu no celular
const isMobileMenuOpen = ref(false)
</script>