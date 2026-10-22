<template>
  <header class="fixed inset-x-0 top-0 z-50 border-b border-border bg-background/90 backdrop-blur">
    <div class="mx-auto flex h-16 max-w-6xl items-center justify-between px-5">
      <!-- Logo da Academia -->
      <a href="#topo" class="flex items-center gap-3">
        <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuDCN_9vT5wwOS8mQhgSZRx0OaDqXOsn_anJOuCU-NmBU-qPC13wrqLb-l1idvgdDw1nmET6WbouUdEuRn0AtrGTpLG4R9LaCTvyoopKMg2M0gdLGHBdP1sCajVvSz6UQZ6tUYDELRxDcbjJyXW6nzjEu6y34aiHvE-b1ik7fWbTuWShMrmuVCBQAwEYRJy7mZjmn3CjufQ115qxgAF2E7mK0WrglzR313RWcCF5JmGex0RlVj0FLDygmtj8LS_ohn5IElk" alt="Treino Pesado Academia" class="h-11 w-auto" />
        <span class="hidden font-display text-lg font-black uppercase sm:block">
          Treino <span class="text-primary">Pesado</span>
        </span>
      </a>

      <!-- Menu de Navegação Desktop -->
      <nav class="hidden items-center gap-7 text-sm md:flex">
        <a href="#planos" class="text-muted-foreground transition hover:text-primary">Planos</a>
        <a href="#app" class="text-muted-foreground transition hover:text-primary">App</a>
        <a href="#avaliacoes" class="text-muted-foreground transition hover:text-primary">Avaliações</a>
        <a href="#duvidas" class="text-muted-foreground transition hover:text-primary">Dúvidas</a>
        <a href="#local" class="text-muted-foreground transition hover:text-primary">Onde estamos</a>
        <a 
          href="https://wa.me/5585900000000?text=Ol%C3%A1!%20Quero%20saber%20mais%20sobre%20a%20Treino%20Pesado" 
          target="_blank" 
          rel="noreferrer" 
          class="rounded-sm bg-primary px-4 py-2 font-bold text-primary-foreground transition hover:opacity-90"
        >
          Chamar no Zap
        </a>
      </nav>

      <!-- Botão Menu Mobile -->
      <button class="md:hidden font-display font-bold uppercase text-primary" aria-label="Menu">
        Menu
      </button>
    </div>
  </header>
</template>