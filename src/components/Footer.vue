<template>
  <footer class="w-full bg-[#0e0e10] text-[#e5e1e4] py-12 border-t border-brand-card-high">
    <div class="max-w-7xl mx-auto px-4 lg:px-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
      <div class="flex flex-col gap-4">
        <div class="flex items-center gap-2">
          <span class="font-display text-lg uppercase text-brand-primary tracking-wider font-bold">Treino Pesado</span>
        </div>
        <p class="text-xs text-[#bacbb6] leading-relaxed">
          Força bruta, disciplina e alta performance em São Mateus do Maranhão.
        </p>
      </div>

      <div class="flex flex-col gap-2">
        <h4 class="font-display text-sm uppercase text-brand-primary tracking-wider font-bold">Localização</h4>
        <p class="text-xs text-[#bacbb6]">
          Rua Santo Antônio, 19<br/>
          São Mateus do Maranhão - MA<br/>
          CEP: 65470-000
        </p>
      </div>

      <div class="flex flex-col gap-2">
        <h4 class="font-display text-sm uppercase text-brand-primary tracking-wider font-bold">Horários</h4>
        <p class="text-xs text-[#bacbb6]">Segunda a Sexta: <span class="text-brand-primary font-bold">06:00 às 21:00</span></p>
        <p class="text-xs text-[#bacbb6]">Sáb/Dom/Feriados: Fechado</p>
      </div>

      <div class="flex flex-col gap-2">
        <h4 class="font-display text-sm uppercase text-brand-primary tracking-wider font-bold">App Oficial</h4>
        <a 
          href="https://play.google.com/store/apps/details?id=com.daviniccacio.treinopesado" 
          target="_blank" 
          rel="noopener noreferrer" 
          class="text-xs text-brand-primary hover:underline"
        >
          Baixar na Google Play Store →
        </a>
      </div>
    </div>

    <div class="max-w-7xl mx-auto px-4 lg:px-12 mt-12 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#bacbb6] border-t border-brand-card-high">
      <p>© 2026 Academia Treino Pesado. Todos os direitos reservados.</p>
      <p class="font-display text-brand-primary font-bold uppercase">Construído para quem não desiste</p>
    </div>
  </footer>
</template>