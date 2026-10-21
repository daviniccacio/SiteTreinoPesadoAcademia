<template>
  <header class="fixed top-0 w-full z-50 bg-[#131315]/90 backdrop-blur-md border-b border-[#2a2a2c] shadow-[0_1px_12px_rgba(0,0,0,0.7)]">
    <div class="h-20 max-w-7xl mx-auto px-4 lg:px-12 flex items-center justify-between gap-4">
      <div class="flex items-center gap-4 shrink-0">
        <img 
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuDCN_9vT5wwOS8mQhgSZRx0OaDqXOsn_anJOuCU-NmBU-qPC13wrqLb-l1idvgdDw1nmET6WbouUdEuRn0AtrGTpLG4R9LaCTvyoopKMg2M0gdLGHBdP1sCajVvSz6UQZ6tUYDELRxDcbjJyXW6nzjEu6y34aiHvE-b1ik7fWbTuWShMrmuVCBQAwEYRJy7mZjmn3CjufQ115qxgAF2E7mK0WrglzR313RWcCF5JmGex0RlVj0FLDygmtj8LS_ohn5IElk" 
          alt="Treino Pesado Logo" 
          class="h-12 md:h-14 w-auto object-contain" 
        />
        <div class="flex flex-col">
          <span class="font-display text-lg uppercase text-[#00e65b] tracking-wider font-bold">Treino Pesado</span>
          <span class="font-display text-xs text-[#bacbb6] uppercase tracking-widest hidden sm:inline">São Mateus do Maranhão</span>
        </div>
      </div>

      <nav class="hidden xl:flex items-center gap-6">
        <a href="#planos" class="uppercase tracking-wider transition-colors py-1 px-4 bg-[#00e65b] text-[#003910] font-display text-sm rounded-lg font-bold shadow-[0_0_15px_rgba(0,230,91,0.35)]">
          Planos & Preços
        </a>
        <a href="#estrutura" class="font-display text-sm uppercase tracking-wider text-[#bacbb6] hover:text-[#00e65b] transition-colors py-1 px-2">Estrutura</a>
        <a href="#aplicativo" class="font-display text-sm uppercase tracking-wider text-[#bacbb6] hover:text-[#00e65b] transition-colors py-1 px-2">Aplicativo Oficial</a>
        <a href="#localizacao" class="font-display text-sm uppercase tracking-wider text-[#bacbb6] hover:text-[#00e65b] transition-colors py-1 px-2">Localização & Horários</a>
      </nav>

      <div class="flex items-center gap-4 shrink-0">
        <a 
          href="https://play.google.com/store/apps/details?id=com.daviniccacio.treinopesado" 
          target="_blank" 
          rel="noopener noreferrer"
          class="inline-flex items-center justify-center gap-2 bg-[#00e65b] hover:bg-[#75ff89] text-[#003910] font-display text-sm uppercase px-6 py-2 rounded-lg transition-all duration-300 shadow-[0_0_22px_rgba(0,230,91,0.4)] hover:shadow-[0_0_30px_rgba(0,230,91,0.6)] font-bold"
        >
          <span class="material-symbols-outlined text-[18px]">android</span>
          <span>Baixar App</span>
        </a>
      </div>
    </div>
  </header>
</template>