<template>
  <section class="relative w-full overflow-hidden pt-20 bg-[#0e0e10]">
    <div class="absolute inset-0 pointer-events-none z-10 bg-linear-to-t from-brand-dark via-brand-dark/70 to-transparent"></div>
    <div class="absolute -top-32 -right-32 w-96 h-96 bg-brand-primary/15 rounded-full blur-3xl pointer-events-none z-10"></div>

    <div class="relative min-h-[92vh] flex items-center">
      <div 
        class="absolute inset-0 bg-cover bg-center brightness-[0.40] contrast-125 scale-105" 
        style="background-image: url('https://lh3.googleusercontent.com/aida-public/AB6AXuArDX5hJc8rEVs9HN4bMYmxQ_3Z8aeEK7vzlMSNls99bm7IWF7RaArD36nSY71ipuWKsjFiLKBJinkviWo0BPD9Q2L1f6eDZZYysRxyuL9byWoq_iwX1zZekL8mcMqb5SS-LZL_d7OMpwLZdX-Rt_SqhM5kH3yTSQpbhftV0yszic9sNdqD7TOI21D7dDpmOFWUOlx_RZjSROvNKp536flhlnju5cE2P7xaHQiuGArNKmo5tZsA7_EMqw')"
      ></div>

      <div class="relative z-20 max-w-7xl mx-auto px-4 lg:px-12 py-14 w-full">
        <!-- Social Proof Pill -->
        <div class="inline-flex flex-wrap items-center gap-2 bg-brand-card-high/90 backdrop-blur-md px-4 py-1.5 rounded-lg shadow-xl mb-6 border border-[#353437]">
          <div class="flex items-center text-brand-primary text-[15px]">
            <span class="material-symbols-outlined text-[18px]" style="font-variation-settings: 'FILL' 1;">star</span>
            <span class="material-symbols-outlined text-[18px]" style="font-variation-settings: 'FILL' 1;">star</span>
            <span class="material-symbols-outlined text-[18px]" style="font-variation-settings: 'FILL' 1;">star</span>
            <span class="material-symbols-outlined text-[18px]" style="font-variation-settings: 'FILL' 1;">star</span>
            <span class="material-symbols-outlined text-[18px]" style="font-variation-settings: 'FILL' 1;">star_half</span>
          </div>
          <span class="font-display text-white font-bold">4.4</span>
          <span class="text-[#bacbb6] text-xs hidden sm:inline">• +30 avaliações no Google</span>
          <span class="w-1.5 h-1.5 rounded-full bg-brand-primary hidden sm:inline"></span>
          <a href="https://instagram.com/treinopesadoa" target="_blank" rel="noopener noreferrer" class="text-brand-primary hover:underline font-display text-xs uppercase tracking-wider flex items-center gap-1">
            <span class="material-symbols-outlined text-[16px]">groups</span>
            +3.000 seguidores no Instagram
          </a>
        </div>

        <!-- Headline Mass -->
        <div class="max-w-4xl space-y-4">
          <div class="flex items-center gap-2">
            <span class="h-1 w-12 bg-brand-primary shadow-[0_0_10px_#00e65b]"></span>
            <p class="font-display text-sm uppercase tracking-widest text-brand-primary font-bold">São Mateus do Maranhão</p>
          </div>

          <h1 class="font-display text-5xl sm:text-6xl lg:text-7xl uppercase tracking-tight text-white font-extrabold leading-none">
            SEM DESCULPAS.<br/>
            <span class="text-brand-primary underline decoration-brand-primary/40 underline-offset-8">SÓ RESULTADOS.</span>
          </h1>

          <p class="font-display text-xl sm:text-2xl text-brand-primary font-bold uppercase tracking-wide">
            O SEU OBJETIVO É A NOSSA PRIORIDADE.
          </p>

          <p class="text-base sm:text-lg text-[#bacbb6] max-w-2xl leading-relaxed">
            Estrutura bruta, maquinário pesado de biomecânica precisa e o suporte real que você precisa para quebrar seus recordes. Aqui o ferro forja a sua melhor versão.
          </p>

          <!-- Dual CTA -->
          <div class="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-4">
            <a href="#planos" class="inline-flex items-center justify-center gap-2 bg-brand-primary hover:bg-[#75ff89] text-[#003910] font-display text-base uppercase px-8 py-4 rounded-lg shadow-[0_0_30px_rgba(0,230,91,0.4)] hover:shadow-[0_0_40px_rgba(0,230,91,0.6)] transition-all font-black">
              <span class="material-symbols-outlined text-[20px]">fitness_center</span>
              Começar Agora
            </a>
            <a href="https://play.google.com/store/apps/details?id=com.daviniccacio.treinopesado" target="_blank" rel="noopener noreferrer" class="inline-flex items-center justify-center gap-2 bg-brand-card-high hover:bg-[#353437] text-white font-display text-base uppercase px-6 py-4 rounded-lg transition-colors border border-[#3c4b3b] hover:border-brand-primary">
              <span class="material-symbols-outlined text-brand-primary text-[22px]">android</span>
              Baixar App Treino Pesado
            </a>
          </div>

          <!-- Bottom Micro Metrics Strip -->
          <div class="grid grid-cols-2 md:grid-cols-3 gap-4 pt-6 max-w-xl">
            <div class="bg-[#1b1b1d]/90 border border-[#3c4b3b]/60 backdrop-blur-sm p-3 rounded-lg flex flex-col">
              <span class="font-display text-2xl text-white font-bold leading-none">06:00 - 21:00</span>
              <span class="font-display text-xs text-[#bacbb6] uppercase mt-1">Segunda a Sexta</span>
            </div>
            <div class="bg-[#1b1b1d]/90 border border-[#3c4b3b]/60 backdrop-blur-sm p-3 rounded-lg flex flex-col">
              <span class="font-display text-2xl text-brand-primary font-bold leading-none">R$ 10</span>
              <span class="font-display text-xs text-[#bacbb6] uppercase mt-1">Diária acessível</span>
            </div>
            <div class="bg-[#1b1b1d]/90 border border-[#3c4b3b]/60 backdrop-blur-sm p-3 rounded-lg flex flex-col col-span-2 md:col-span-1">
              <span class="font-display text-2xl text-[#4edea3] font-bold leading-none">APP 100%</span>
              <span class="font-display text-xs text-[#bacbb6] uppercase mt-1">Fichas & Cargas</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>