<template>
  <section id="planos" class="mx-auto max-w-6xl px-5 py-24">
    <h2 class="font-display text-4xl uppercase md:text-5xl">Planos</h2>
    <p class="mt-2 text-muted-foreground">Sem taxa de matrícula. Pagou, treinou.</p>

    <div class="mt-12 grid gap-4 md:grid-cols-3">
      <!-- Plano Diária -->
      <div class="relative flex flex-col rounded-sm border p-8 border-border bg-surface">
        <h3 class="font-display text-2xl uppercase">Diária</h3>
        <div class="mt-6 flex items-start font-display font-black">
          <span class="mt-2 text-xl">R$</span>
          <span class="text-7xl leading-none">10</span>
        </div>
        <p class="mt-4 flex-1 text-sm text-muted-foreground">Pra quem tá de passagem ou quer conhecer.</p>
        <a 
          href="https://wa.me/5585900000000?text=Ol%C3%A1!%20Quero%20saber%20mais%20sobre%20a%20Treino%20Pesado" 
          target="_blank" 
          rel="noreferrer" 
          class="mt-8 rounded-sm py-3 text-center font-bold uppercase transition border border-border hover:border-primary hover:text-primary"
        >
          Assinar diária
        </a>
      </div>

      <!-- Plano Mensal (Destaque) -->
      <div class="relative flex flex-col rounded-sm border p-8 border-primary bg-primary text-primary-foreground md:-translate-y-4">
        <span class="absolute -top-3 left-8 bg-background px-2 py-0.5 text-xs font-bold uppercase text-primary">
          Mais escolhido
        </span>
        <h3 class="font-display text-2xl uppercase">Mensal</h3>
        <div class="mt-6 flex items-start font-display font-black">
          <span class="mt-2 text-xl">R$</span>
          <span class="text-7xl leading-none">80</span>
        </div>
        <p class="mt-4 flex-1 text-sm">Acesso livre o mês inteiro. O mais escolhido.</p>
        <a 
          href="https://wa.me/5585900000000?text=Ol%C3%A1!%20Quero%20saber%20mais%20sobre%20a%20Treino%20Pesado" 
          target="_blank" 
          rel="noreferrer" 
          class="mt-8 rounded-sm py-3 text-center font-bold uppercase transition bg-background text-foreground hover:opacity-90"
        >
          Assinar mensal
        </a>
      </div>

      <!-- Plano Quinzena -->
      <div class="relative flex flex-col rounded-sm border p-8 border-border bg-surface">
        <h3 class="font-display text-2xl uppercase">Quinzena</h3>
        <div class="mt-6 flex items-start font-display font-black">
          <span class="mt-2 text-xl">R$</span>
          <span class="text-7xl leading-none">50</span>
        </div>
        <p class="mt-4 flex-1 text-sm text-muted-foreground">15 dias de treino sem compromisso.</p>
        <a 
          href="https://wa.me/5585900000000?text=Ol%C3%A1!%20Quero%20saber%20mais%20sobre%20a%20Treino%20Pesado" 
          target="_blank" 
          rel="noreferrer" 
          class="mt-8 rounded-sm py-3 text-center font-bold uppercase transition border border-border hover:border-primary hover:text-primary"
        >
          Assinar quinzena
        </a>
      </div>
    </div>
  </section>
</template>