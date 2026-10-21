<template>
  <section id="planos" class="w-full py-16 bg-[#0e0e10] relative">
    <div class="max-w-7xl mx-auto px-4 lg:px-12">
      <!-- Section Header -->
      <div class="text-center max-w-2xl mx-auto mb-12 space-y-2">
        <div class="inline-flex items-center gap-2 text-[#00e65b] font-display text-xs uppercase tracking-widest bg-[#201f21] px-4 py-1 rounded-full border border-[#00e65b]/20">
          <span class="material-symbols-outlined text-[16px]">price_change</span>
          Valores Diretos e Sem Burocracia
        </div>
        <h2 class="font-display text-3xl sm:text-4xl uppercase text-white font-extrabold tracking-wide">
          Planos & Preços Transparentes
        </h2>
        <p class="text-sm text-[#bacbb6]">
          Treine com o melhor custo-benefício de São Mateus do Maranhão. Sem pegadinhas, sem taxas abusivas e com estrutura pesada.
        </p>
      </div>

      <!-- Plans Bento Cards Grid -->
      <div class="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
        <!-- PLANO 1: DIÁRIA -->
        <div class="bg-[#201f21] rounded-xl p-8 flex flex-col justify-between shadow-lg relative hover:bg-[#2a2a2c] transition-colors border border-[#3c4b3b]/40">
          <div class="space-y-4">
            <div class="flex justify-between items-start">
              <div>
                <span class="font-display text-xs uppercase tracking-widest text-[#00e65b] font-bold">Avulso</span>
                <h3 class="font-display text-2xl text-white uppercase font-bold">Diária</h3>
              </div>
              <div class="w-10 h-10 rounded-lg bg-[#2a2a2c] flex items-center justify-center text-[#00e65b]">
                <span class="material-symbols-outlined text-[22px]">today</span>
              </div>
            </div>
            <p class="text-xs text-[#bacbb6] min-h-[40px]">
              Ideal para quem está de passagem na cidade, visitantes ou para quem quer experimentar o treino pesado por um dia.
            </p>
            <div class="pt-2 flex items-baseline gap-1">
              <span class="font-display text-xl text-[#00e65b] font-bold">R$</span>
              <span class="font-display text-5xl text-white font-black leading-none">10</span>
              <span class="text-xs text-[#bacbb6] ml-1">/ treino único</span>
            </div>
            <ul class="space-y-2 pt-4 text-xs text-[#e5e1e4]">
              <li class="flex items-center gap-2"><span class="material-symbols-outlined text-[#00e65b] text-[18px]">check_circle</span> Acesso total à musculação no dia</li>
              <li class="flex items-center gap-2"><span class="material-symbols-outlined text-[#00e65b] text-[18px]">check_circle</span> Pesos livres e maquinário completo</li>
              <li class="flex items-center gap-2"><span class="material-symbols-outlined text-[#00e65b] text-[18px]">check_circle</span> Ambiente climatizado e focado</li>
            </ul>
          </div>
          <div class="pt-8">
            <a href="#aplicativo" class="w-full inline-flex items-center justify-center gap-2 bg-[#2a2a2c] hover:bg-[#353437] text-white hover:text-[#00e65b] font-display text-xs uppercase py-3 rounded-lg transition-colors border border-[#3c4b3b] font-bold">
              <span>Treinar Hoje</span>
              <span class="material-symbols-outlined text-[16px]">arrow_forward</span>
            </a>
          </div>
        </div>

        <!-- PLANO 2: QUINZENA -->
        <div class="bg-[#201f21] rounded-xl p-8 flex flex-col justify-between shadow-lg relative hover:bg-[#2a2a2c] transition-colors border border-[#3c4b3b]/40">
          <div class="space-y-4">
            <div class="flex justify-between items-start">
              <div>
                <span class="font-display text-xs uppercase tracking-widest text-[#00e65b] font-bold">Flexibilidade</span>
                <h3 class="font-display text-2xl text-white uppercase font-bold">Quinzena</h3>
              </div>
              <div class="w-10 h-10 rounded-lg bg-[#2a2a2c] flex items-center justify-center text-[#00e65b]">
                <span class="material-symbols-outlined text-[22px]">date_range</span>
              </div>
            </div>
            <p class="text-xs text-[#bacbb6] min-h-[40px]">
              Flexibilidade perfeita para quem passa períodos específicos na região ou prefere renovar de 15 em 15 dias.
            </p>
            <div class="pt-2 flex items-baseline gap-1">
              <span class="font-display text-xl text-[#00e65b] font-bold">R$</span>
              <span class="font-display text-5xl text-white font-black leading-none">50</span>
              <span class="text-xs text-[#bacbb6] ml-1">/ 15 dias corridos</span>
            </div>
            <ul class="space-y-2 pt-4 text-xs text-[#e5e1e4]">
              <li class="flex items-center gap-2"><span class="material-symbols-outlined text-[#00e65b] text-[18px]">check_circle</span> 15 dias consecutivos de treino</li>
              <li class="flex items-center gap-2"><span class="material-symbols-outlined text-[#00e65b] text-[18px]">check_circle</span> Acesso livre a toda a musculação</li>
              <li class="flex items-center gap-2"><span class="material-symbols-outlined text-[#00e65b] text-[18px]">check_circle</span> Sem taxa de adesão</li>
            </ul>
          </div>
          <div class="pt-8">
            <a href="#aplicativo" class="w-full inline-flex items-center justify-center gap-2 bg-[#2a2a2c] hover:bg-[#353437] text-white hover:text-[#00e65b] font-display text-xs uppercase py-3 rounded-lg transition-colors border border-[#3c4b3b] font-bold">
              <span>Escolher Quinzena</span>
              <span class="material-symbols-outlined text-[16px]">arrow_forward</span>
            </a>
          </div>
        </div>

        <!-- PLANO 3: MENSALIDADE (DESTAQUE) -->
        <div class="bg-[#2a2a2c] rounded-xl p-8 flex flex-col justify-between shadow-[0_0_35px_rgba(0,230,91,0.22)] relative lg:-mt-4 lg:mb-[-1rem] bg-gradient-to-b from-[#353437] via-[#2a2a2c] to-[#201f21] border-2 border-[#00e65b]">
          <div class="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-[#00e65b] text-[#003910] font-display text-xs uppercase px-4 py-0.5 rounded-full shadow-md font-bold tracking-widest flex items-center gap-1">
            <span class="material-symbols-outlined text-[14px]">local_fire_department</span>
            Mais Popular • Melhor Custo-Benefício
          </div>
          <div class="space-y-4 pt-2">
            <div class="flex justify-between items-start">
              <div>
                <span class="font-display text-xs uppercase tracking-widest text-[#00e65b] font-bold">Recomendado</span>
                <h3 class="font-display text-2xl text-white uppercase font-extrabold flex items-center gap-2">
                  Mensalidade
                  <span class="material-symbols-outlined text-[#00e65b] text-[20px]">stars</span>
                </h3>
              </div>
              <div class="w-12 h-12 rounded-lg bg-[#00e65b] text-[#003910] flex items-center justify-center shadow-md">
                <span class="material-symbols-outlined text-[26px]">military_tech</span>
              </div>
            </div>
            <p class="text-xs text-[#e5e1e4] leading-relaxed min-h-[40px]">
              O plano definitivo para quem busca constância e evolução real. Acesso total e suporte com aplicativo próprio.
            </p>
            <div class="pt-2 flex items-baseline gap-1 bg-[#0e0e10]/80 p-4 rounded-lg border border-[#00e65b]/30">
              <span class="font-display text-xl text-[#00e65b] font-bold">R$</span>
              <span class="font-display text-5xl text-white font-black leading-none">80</span>
              <div class="flex flex-col ml-2">
                <span class="font-display text-sm text-white font-bold uppercase leading-none">/ mês</span>
                <span class="font-display text-xs text-[#00e65b]">Apenas ~R$ 2,66 ao dia</span>
              </div>
            </div>
            <ul class="space-y-2 pt-2 text-xs text-[#e5e1e4]">
              <li class="flex items-center gap-2"><span class="material-symbols-outlined text-[#00e65b] text-[20px]">check_circle</span> <span class="font-bold text-white">Acesso Total Musculação & Cardio</span></li>
              <li class="flex items-center gap-2"><span class="material-symbols-outlined text-[#00e65b] text-[20px]">check_circle</span> <span class="font-bold text-white">App Oficial Treino Pesado liberado</span></li>
              <li class="flex items-center gap-2"><span class="material-symbols-outlined text-[#00e65b] text-[20px]">check_circle</span> Ficha de treino periodizada e registro de cargas</li>
              <li class="flex items-center gap-2"><span class="material-symbols-outlined text-[#00e65b] text-[20px]">check_circle</span> Sem taxa abusiva de matrícula</li>
            </ul>
          </div>
          <div class="pt-8">
            <a href="#aplicativo" class="w-full inline-flex items-center justify-center gap-2 bg-[#00e65b] hover:bg-[#75ff89] text-[#003910] font-display text-sm uppercase py-4 rounded-lg shadow-[0_0_24px_rgba(0,230,91,0.4)] transition-all font-black">
              <span class="material-symbols-outlined text-[20px]">assignment_turned_in</span>
              Matricule-se Agora
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>