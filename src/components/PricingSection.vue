<template>
  <section id="planos" class="mx-auto max-w-6xl px-5 py-24">
    <div class="mb-12 flex flex-col items-start justify-between gap-4 md:flex-row md:items-end">
      <div>
        <span class="inline-block bg-primary px-3 py-1 font-display text-xs font-black uppercase text-primary-foreground">
          Sem Taxa de Matrícula
        </span>
        <h2 class="mt-3 font-display text-4xl font-black uppercase tracking-tight md:text-6xl">
          Escolha seu <span class="text-primary">Plano</span>
        </h2>
      </div>
      <p class="text-sm font-semibold uppercase tracking-wider text-muted-foreground">
        Pagou • Treinou • Sem Fidelidade
      </p>
    </div>

    <div class="grid gap-8 md:grid-cols-3 pt-4">
      <!-- Diária -->
      <div class="relative flex flex-col justify-between border-2 border-border rounded-lg bg-surface p-8 shadow-[6px_6px_0px_0px_rgba(255,255,255,0.1)] transition-transform hover:-translate-y-1">
        <div>
          <div class="flex items-center justify-between">
            <h3 class="font-display text-2xl font-black uppercase tracking-wider">Diária</h3>
            <span class="border border-border bg-background px-2 py-0.5 font-display text-[10px] font-bold uppercase text-muted-foreground">Avulso</span>
          </div>
          <div class="mt-6 flex items-baseline gap-1 font-display font-black">
            <span class="text-2xl text-primary">R$</span>
            <span class="text-7xl leading-none">10</span>
          </div>
          <p class="mt-4 text-sm leading-relaxed text-muted-foreground">Pra quem tá de passagem ou quer conhecer a estrutura hoje.</p>
        </div>
        <a 
          href="https://wa.me/5585900000000?text=Ol%C3%A1!%20Quero%20saber%20mais%20sobre%20a%20Di%C3%A1ria" 
          target="_blank" 
          rel="noreferrer" 
          class="mt-8 block border-2 border-foreground py-3.5 text-center font-display font-black uppercase tracking-wider transition-all hover:bg-foreground hover:text-background"
        >
          Treinar Hoje
        </a>
      </div>

      <!-- Mensal (Destaque) -->
      <div class="relative flex flex-col justify-between border-2 border-primary rounded-lg  bg-surface p-8 shadow-[8px_8px_0px_0px_var(--color-primary)] md:-translate-y-4">
        <div class="absolute -top-4 right-6 bg-primary px-3 py-1 rounded-sm font-display text-xs font-black uppercase text-primary-foreground shadow-sm">
          ★ Melhor Plano
        </div>
        <div>
          <div class="flex items-center justify-between">
            <h3 class="font-display text-3xl font-black uppercase tracking-wider text-primary">Mensal</h3>
            <span class="bg-primary/20 text-primary px-2 py-0.5 font-display text-[10px] font-bold uppercase">30 Dias</span>
          </div>
          <div class="mt-6 flex items-baseline gap-1 font-display font-black">
            <span class="text-2xl text-primary">R$</span>
            <span class="text-7xl leading-none text-foreground">80</span>
            <span class="text-xs text-muted-foreground">/mês</span>
          </div>
          <p class="mt-4 text-sm leading-relaxed text-foreground/90 font-medium">Acesso livre o mês inteiro. O melhor custo-benefício para quem treina sério.</p>
        </div>
        <a 
          href="https://wa.me/5585900000000?text=Ol%C3%A1!%20Quero%20saber%20mais%20sobre%20o%20Plano%20Mensal" 
          target="_blank" 
          rel="noreferrer" 
          class="mt-8 block bg-primary py-4 text-center font-display font-black uppercase tracking-wider text-primary-foreground transition-all hover:bg-[#00b347] shadow-md"
        >
          Garantir Mensal
        </a>
      </div>

      <!-- Quinzena -->
      <div class="relative flex flex-col justify-between border-2 border-border rounded-lg  bg-surface p-8 shadow-[6px_6px_0px_0px_rgba(255,255,255,0.1)] transition-transform hover:-translate-y-1">
        <div>
          <div class="flex items-center justify-between">
            <h3 class="font-display text-2xl font-black uppercase tracking-wider">Quinzena</h3>
            <span class="border border-border bg-background px-2 py-0.5 font-display text-[10px] font-bold uppercase text-muted-foreground">15 Dias</span>
          </div>
          <div class="mt-6 flex items-baseline gap-1 font-display font-black">
            <span class="text-2xl text-primary">R$</span>
            <span class="text-7xl leading-none">50</span>
          </div>
          <p class="mt-4 text-sm leading-relaxed text-muted-foreground">15 dias de treino sem compromisso longo.</p>
        </div>
        <a 
          href="https://wa.me/5585900000000?text=Ol%C3%A1!%20Quero%20saber%20mais%20sobre%20a%20Quinzena" 
          target="_blank" 
          rel="noreferrer" 
          class="mt-8 block border-2 border-foreground py-3.5 text-center font-display font-black uppercase tracking-wider transition-all hover:bg-foreground hover:text-background"
        >
          Assinar Quinzena
        </a>
      </div>
    </div>
  </section>
</template>