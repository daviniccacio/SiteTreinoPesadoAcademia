<template>
  <section id="topo" class="relative flex min-h-[92vh] items-end overflow-hidden pt-16">
    <!-- Imagem de Fundo com Degradê -->
    <img 
      src="https://lh3.googleusercontent.com/aida-public/AB6AXuArDX5hJc8rEVs9HN4bMYmxQ_3Z8aeEK7vzlMSNls99bm7IWF7RaArD36nSY71ipuWKsjFiLKBJinkviWo0BPD9Q2L1f6eDZZYysRxyuL9byWoq_iwX1zZekL8mcMqb5SS-LZL_d7OMpwLZdX-Rt_SqhM5kH3yTSQpbhftV0yszic9sNdqD7TOI21D7dDpmOFWUOlx_RZjSROvNKp536flhlnju5cE2P7xaHQiuGArNKmo5tZsA7_EMqw" 
      alt="Interior da academia" 
      class="absolute inset-0 h-full w-full object-cover opacity-50" 
    />
    <div class="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent"></div>

    <!-- Conteúdo Principal -->
    <div class="relative mx-auto w-full max-w-6xl px-5 pb-20">
      <p class="mb-4 inline-block bg-primary px-2 py-1 text-xs font-bold uppercase tracking-widest text-primary-foreground">
        Academia de bairro, treino de verdade
      </p>
      <h1 class="max-w-3xl font-display text-6xl font-black uppercase leading-[0.9] md:text-8xl">
        Aqui o treino é <span class="text-primary">pesado.</span>
      </h1>
      <p class="mt-6 max-w-lg text-lg text-muted-foreground">
        Estrutura completa, galera que treina sério e preço que cabe no bolso. Mensal por R$80.
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

  <!-- Listra Decorativa -->
  <div class="stripe h-3"></div>
</template>