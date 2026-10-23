<template>
  <section id="topo" class="relative flex min-h-[92vh] items-end overflow-hidden pt-16">
    <!-- Imagem de Fundo com Degradê -->
    <img 
      src="../assets/img/fotoacademia1.png"
      alt="Interior da academia" 
      class="absolute inset-0 h-full w-full object-cover opacity-40" 
    />
    <div class="absolute inset-0 bg-linear-to-t from-background via-background/60 to-transparent"></div>

    <!-- Conteúdo Principal -->
    <div class="relative mx-auto w-full max-w-6xl px-5 pb-20">
      <p class="mb-4 inline-block bg-primary px-2 py-1 text-xs font-bold uppercase tracking-widest text-primary-foreground">
        A minha, a sua, a nossa academia.
      </p>
      <h1 class="max-w-3xl font-display text-6xl font-black uppercase leading-[0.9] md:text-8xl">
        Aqui o treino é <span class="text-primary">pesado.</span>
      </h1>
      <p class="mt-6 max-w-lg text-lg text-muted-foreground">
        Estrutura completa, galera que treina sério e preço que cabe no bolso. Mensalidade por apenas R$80.
      </p>

      <!-- Botões de Ação -->
      <div class="mt-8 flex flex-wrap gap-3">
        <a 
          href="https://wa.me/5585900000000?text=Ol%C3%A1!%20Quero%20saber%20mais%20sobre%20a%20Treino%20Pesado" 
          target="_blank" 
          rel="noreferrer" 
          class="rounded-sm bg-primary px-6 py-4 font-display font-bold uppercase text-primary-foreground transition hover:-translate-y-0.5"
        >
          Quero começar
        </a>
        <a 
          href="#planos" 
          class="rounded-sm border border-foreground/30 px-6 py-4 font-display font-bold uppercase transition hover:border-primary hover:text-primary"
        >
          Ver planos
        </a>
      </div>
    </div>
  </section>

  <!-- Borda Final: Barra de Status das Especificações -->
  <div class="border-y border-border bg-surface px-5 py-3.5">
    <div class="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4 font-display text-xs font-bold uppercase">
      <div class="flex items-center gap-2">
        <span class="h-2 w-2 rounded-full bg-primary animate-pulse"></span>
        <span class="text-foreground">São Mateus do Maranhão - MA</span>
      </div>
      <div class="text-white">
        Mensalidade <span class="text-primary font-black">• R$ 80</span> 
      </div>
      <div class="text-foreground hidden sm:block">
        Segunda a Sexta • <span class="text-primary font-black">06h às 21h</span>
      </div>
    </div>
  </div>
</template>