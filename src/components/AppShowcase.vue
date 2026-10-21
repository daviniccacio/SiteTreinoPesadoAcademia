<template>
  <section id="aplicativo" class="w-full py-16 bg-brand-dark relative overflow-hidden">
    <div class="absolute -left-48 top-1/2 -translate-y-1/2 w-96 h-96 bg-brand-primary/10 rounded-full blur-3xl pointer-events-none"></div>
    <div class="max-w-7xl mx-auto px-4 lg:px-12">
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        <!-- Esquerda: Informações -->
        <div class="lg:col-span-7 space-y-6">
          <div class="space-y-2">
            <div class="inline-flex items-center gap-2 bg-brand-card px-4 py-1 rounded-full border border-brand-primary/20">
              <span class="material-symbols-outlined text-brand-primary text-[18px]">smartphone</span>
              <span class="font-display text-xs uppercase tracking-widest text-brand-primary font-bold">Tecnologia Própria</span>
            </div>
            <h2 class="font-display text-3xl sm:text-4xl uppercase text-white font-extrabold tracking-wide">
              Treine com o App Oficial da Treino Pesado
            </h2>
            <p class="text-base text-[#bacbb6] leading-relaxed">
              Diga adeus às fichas de papel rasgadas. Tenha seu programa de treino individualizado, histórico de cargas e notificações da academia direto no seu Android.
            </p>
          </div>

          <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div class="bg-brand-card p-4 rounded-lg space-y-1 border border-[#3c4b3b]/30">
              <div class="flex items-center gap-2">
                <span class="material-symbols-outlined text-brand-primary text-[22px]">history_edu</span>
                <h4 class="font-display text-sm uppercase text-white font-bold">Ficha Digital</h4>
              </div>
              <p class="text-xs text-[#bacbb6]">Exercícios, séries e repetições organizados para você.</p>
            </div>

            <div class="bg-brand-card p-4 rounded-lg space-y-1 border border-[#3c4b3b]/30">
              <div class="flex items-center gap-2">
                <span class="material-symbols-outlined text-brand-primary text-[22px]">trending_up</span>
                <h4 class="font-display text-sm uppercase text-white font-bold">Histórico de Cargas</h4>
              </div>
              <p class="text-xs text-[#bacbb6]">Acompanhe sua progressão de carga semanalmente.</p>
            </div>

            <div class="bg-brand-card p-4 rounded-lg space-y-1 border border-[#3c4b3b]/30">
              <div class="flex items-center gap-2">
                <span class="material-symbols-outlined text-brand-primary text-[22px]">timer</span>
                <h4 class="font-display text-sm uppercase text-white font-bold">Cronômetro de Descanso</h4>
              </div>
              <p class="text-xs text-[#bacbb6]">Controle o tempo entre séries com alertas sonoros.</p>
            </div>

            <div class="bg-brand-card p-4 rounded-lg space-y-1 border border-[#3c4b3b]/30">
              <div class="flex items-center gap-2">
                <span class="material-symbols-outlined text-brand-primary text-[22px]">notifications_active</span>
                <h4 class="font-display text-sm uppercase text-white font-bold">Avisos em Tempo Real</h4>
              </div>
              <p class="text-xs text-[#bacbb6]">Fique por dentro de avisos e comunicados da academia.</p>
            </div>
          </div>

          <div class="pt-2 flex flex-wrap items-center gap-4">
            <a 
              href="https://play.google.com/store/apps/details?id=com.daviniccacio.treinopesado" 
              target="_blank" 
              rel="noopener noreferrer"
              class="inline-flex items-center gap-4 bg-brand-card-high hover:bg-[#353437] px-6 py-3 rounded-xl transition-all shadow-lg border border-[#3c4b3b] hover:border-brand-primary"
            >
              <svg class="w-8 h-8 text-brand-primary" fill="currentColor" viewBox="0 0 24 24">
                <path d="M3.609 1.814L13.792 12 3.61 22.186c-.378-.403-.61-.954-.61-1.579V3.393c0-.625.232-1.176.61-1.579zm1.44-.946L16.29 7.155 14.5 11.29 5.049.868zm11.241 10.424l3.963 2.278c1.034.594 1.034 1.56 0 2.154l-3.963 2.278-2.499-2.355 2.5-4.355zM5.05 23.132l9.45-10.422 1.79 4.135-11.24 6.287z"></path>
              </svg>
              <div class="flex flex-col text-left">
                <span class="font-display text-[11px] text-[#bacbb6] uppercase tracking-widest leading-none">Disponível no</span>
                <span class="font-display text-base text-white font-bold leading-tight">Google Play Store</span>
              </div>
            </a>
          </div>
        </div>

        <!-- Direita: Mockup do App -->
        <div class="lg:col-span-5 flex justify-center">
          <div class="relative w-full max-w-[320px] bg-[#0e0e10] rounded-[2.5rem] p-4 shadow-2xl border border-brand-card-high">
            <div class="w-full bg-brand-card-high rounded-4xl p-4 flex flex-col gap-3 border border-[#3c4b3b]/30">
              <div class="flex items-center justify-between pb-2">
                <span class="font-display text-sm uppercase text-white font-bold">Treino Pesado</span>
                <span class="material-symbols-outlined text-brand-primary text-[20px]">notifications</span>
              </div>

              <div class="bg-[#0e0e10] p-3 rounded-xl border border-[#3c4b3b]/30">
                <div class="flex justify-between items-center mb-1">
                  <span class="font-display text-[11px] uppercase text-brand-primary font-bold">Treino A • Hipertrofia</span>
                  <span class="bg-brand-primary/20 text-brand-primary text-[10px] px-2 py-0.5 rounded font-bold uppercase">Ativo</span>
                </div>
                <p class="font-display text-sm text-white font-bold uppercase">Peito & Tríceps Pesado</p>
              </div>

              <div class="bg-brand-card p-3 rounded-xl flex items-center justify-between">
                <div>
                  <h5 class="font-display text-xs text-white uppercase font-bold">Supino Reto Barra</h5>
                  <p class="text-[11px] text-[#bacbb6]">4x 8-10 reps • <span class="text-brand-primary font-bold">110 kg</span></p>
                </div>
                <span class="material-symbols-outlined text-brand-primary text-[18px]">verified</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>