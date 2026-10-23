<template>
  <div class="min-h-screen bg-background text-foreground flex items-center justify-center px-5 py-16 relative overflow-hidden">
    
    <!-- Elementos Decorativos de Fundo -->
    <div class="absolute -top-24 -left-24 h-96 w-96 rounded-full bg-primary/10 blur-3xl pointer-events-none"></div>
    <div class="absolute -bottom-24 -right-24 h-96 w-96 rounded-full bg-primary/5 blur-3xl pointer-events-none"></div>

    <div class="max-w-md w-full text-center space-y-6 relative z-10">
      
      <!-- Badge de Alerta -->
      <div class="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-xs font-mono font-bold uppercase text-primary">
        <span class="h-2 w-2 rounded-full bg-primary animate-pulse"></span>
        <span>Erro 404 • Rota Inexistente</span>
      </div>

      <!-- Número 404 Estilizado com Efeito de Destaque -->
      <div class="relative">
        <h1 class="font-display text-8xl sm:text-9xl font-black uppercase tracking-tight text-white select-none">
          4<span class="text-primary">0</span>4
        </h1>
        <p class="font-display text-lg font-bold uppercase tracking-wider text-muted-foreground mt-2">
          Errou a execução do exercício!
        </p>
      </div>

      <!-- Descrição Educativa -->
      <p class="text-sm text-muted-foreground leading-relaxed max-w-sm mx-auto">
        A página que você está tentando acessar não existe, foi movida ou a URL foi digitada incorretamente.
      </p>

      <!-- Botões de Ação -->
      <div class="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
        <router-link 
          to="/" 
          class="w-full sm:w-auto rounded-sm bg-primary px-6 py-3.5 font-display text-xs font-bold uppercase text-primary-foreground transition-all duration-300 hover:opacity-90 shadow-[0_0_15px_rgba(0,230,91,0.3)] text-center"
        >
          Voltar ao Início
        </router-link>

        <a 
          href="https://wa.me/5585900000000?text=Ol%C3%A1!%20Encontrei%20um%20link%20quebrado%20no%20site." 
          target="_blank" 
          rel="noopener noreferrer" 
          class="w-full sm:w-auto rounded-sm border border-border bg-surface px-6 py-3.5 font-display text-xs font-bold uppercase text-muted-foreground transition-colors hover:border-primary hover:text-primary text-center"
        >
          Avisar Suporte
        </a>
      </div>

    </div>
  </div>
</template>

<script setup>
// Nenhuma lógica complexa necessária; o roteador gerencia a exibição desta tela.
</script>