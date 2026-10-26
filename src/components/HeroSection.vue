<template>
  <!-- 1. Seção Principal: Forçada a ter 100% da altura da tela (100dvh) -->
  <section 
    id="topo" 
    class="relative flex min-h-dvh flex-col overflow-hidden pt-16 sm:pt-20"
  >
    <!-- Imagem de Fundo Responsiva Otimizada para LCP -->
    <picture class="absolute inset-0 h-full w-full">
      <source 
        media="(max-width: 768px)" 
        srcset="/assets/img/fotoacademia1.webp" 
        type="image/webp"
      />
      <img 
        src="/assets/img/fotoacademia1.webp"
        alt="Interior da academia Treino Pesado" 
        class="h-full w-full object-cover opacity-50 transition-opacity duration-300" 
        fetchpriority="high"
        loading="eager"
        decoding="sync"
        width="1920"
        height="1080"
      />
    </picture>

    <!-- Overlay de Degradê Escuro -->
    <div class="absolute inset-0 bg-linear-to-t from-background via-background/70 to-background/20"></div>

    <!-- 2. Container Centralizador: Pega o espaço disponível e centraliza o bloco todo perfeitamente -->
    <div class="relative z-10 mx-auto flex w-full max-w-6xl flex-1 flex-col justify-center px-5 pb-4">
      
      <!-- Bloco Superior: Texto e Botões -->
      <div class="w-full">
        <p class="inline-block bg-primary px-3 py-1 font-display text-[10px] sm:text-xs font-black uppercase text-primary-foreground tracking-wider">
          A minha, a sua, a nossa academia.
        </p>
        
        <h1 class="max-w-3xl pt-2 sm:pt-3 font-display text-5xl xs:text-6xl font-black uppercase leading-[0.95] sm:text-7xl md:text-8xl text-white">
          Aqui o treino é <span class="text-primary">pesado</span>
        </h1>
        
        <p class="mt-3 sm:mt-5 max-w-lg text-sm sm:text-lg text-muted-foreground leading-relaxed">
          Estrutura completa, galera que treina sério e preço que cabe no bolso. Mensalidade por apenas R$80.
        </p>

        <!-- Botões de Ação -->
        <div class="mt-6 flex flex-col sm:flex-row gap-3">
          <a 
            href="https://wa.me/5599984079671?text=Ol%C3%A1!%20Quero%20saber%20mais%20sobre%20a%20Treino%20Pesado" 
            target="_blank" 
            rel="noreferrer" 
            class="w-full sm:w-auto text-center rounded-sm bg-primary px-6 py-4 font-display font-bold uppercase text-primary-foreground transition hover:-translate-y-0.5 shadow-[0_0_15px_rgba(0,230,91,0.3)] text-sm sm:text-base"
          >
            Quero começar
          </a>
          <a 
            href="#planos" 
            class="w-full sm:w-auto text-center rounded-sm border border-foreground/30 px-6 py-4 font-display font-bold uppercase text-white transition hover:border-primary hover:text-primary text-sm sm:text-base"
          >
            Ver planos
          </a>
        </div>
      </div>

      <!-- 3. Bloco Inferior: Cards colados aos botões (mt-8 cria uma margem fixa e pequena) -->
      <div class="mt-8 sm:mt-12 w-full font-display uppercase">
        <div class="rounded-xl border border-border/70 bg-background/60 backdrop-blur-sm divide-y divide-border/40 sm:divide-y-0 sm:border-none sm:bg-transparent sm:grid sm:grid-cols-3 sm:gap-6">
          
          <!-- Card 1: Localização -->
          <div class="flex items-center gap-3 p-3 sm:p-0">
            <div class="flex h-10 w-10 sm:h-12 sm:w-12 shrink-0 items-center justify-center rounded-md border border-primary/30 bg-primary/10 text-primary">
              <svg class="h-5 w-5 sm:h-6 sm:w-6 fill-current" viewBox="0 0 24 24">
                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
              </svg>
            </div>
            <div class="space-y-0 text-left">
              <span class="block text-[10px] sm:text-xs font-bold tracking-wider text-muted-foreground">Localização</span>
              <div class="flex items-center gap-1.5 text-xs sm:text-sm font-black text-white">
                <span class="h-1.5 w-1.5 rounded-full bg-primary animate-pulse"></span>
                <span>São Mateus do Maranhão - MA</span>
              </div>
            </div>
          </div>

          <!-- Card 2: Preço / Mensalidade -->
          <div class="flex items-center gap-3 p-3 sm:p-0">
            <div class="flex h-10 w-10 sm:h-12 sm:w-12 shrink-0 items-center justify-center rounded-md border border-primary/30 bg-primary/10 text-primary">
              <svg class="h-5 w-5 sm:h-6 sm:w-6 fill-current" viewBox="0 0 24 24">
                <path d="M21.41 11.58l-9-9C12.05 2.22 11.55 2 11 2H4c-1.1 0-2 .9-2 2v7c0 .55.22 1.05.59 1.42l9 9c.36.36.86.58 1.41.58.55 0 1.05-.22 1.41-.59l7-7c.37-.36.59-.86.59-1.41 0-.55-.23-1.06-.59-1.42zM5.5 7C4.67 7 4 6.33 4 5.5S4.67 4 5.5 4 7 4.67 7 5.5 6.33 7 5.5 7z"/>
              </svg>
            </div>
            <div class="space-y-0 text-left">
              <span class="block text-[10px] sm:text-xs font-bold tracking-wider text-muted-foreground">Plano Acessível</span>
              <span class="block text-xs sm:text-sm font-black text-white">
                Mensalidade por <span class="text-primary font-black">R$ 80 / Mês</span>
              </span>
            </div>
          </div>

          <!-- Card 3: Horários -->
          <div class="flex items-center gap-3 p-3 sm:p-0">
            <div class="flex h-10 w-10 sm:h-12 sm:w-12 shrink-0 items-center justify-center rounded-md border border-primary/30 bg-primary/10 text-primary">
              <svg class="h-5 w-5 sm:h-6 sm:w-6 fill-current" viewBox="0 0 24 24">
                <path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67z"/>
              </svg>
            </div>
            <div class="space-y-0 text-left">
              <span class="block text-[10px] sm:text-xs font-bold tracking-wider text-muted-foreground">Horário de Treino</span>
              <span class="block text-xs sm:text-sm font-black text-white">
                Seg a Sex • <span class="text-primary font-black">06h às 21h</span>
              </span>
            </div>
          </div>

        </div>
      </div>

    </div>
  </section>
</template>