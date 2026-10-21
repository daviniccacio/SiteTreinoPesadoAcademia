<template>
  <section id="localizacao" class="w-full py-16 bg-brand-dark">
    <div class="max-w-7xl mx-auto px-4 lg:px-12">
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-8">
        <div class="lg:col-span-5 space-y-6">
          <div class="space-y-2">
            <div class="inline-flex items-center gap-2 text-brand-primary font-display text-xs uppercase tracking-widest">
              <span class="material-symbols-outlined text-[18px]">location_on</span>
              Venha Conhecer Nosso Espaço
            </div>
            <h2 class="font-display text-3xl sm:text-4xl uppercase text-white font-extrabold tracking-wide">
              Localização & Horários
            </h2>
          </div>

          <div class="bg-brand-card p-6 rounded-xl space-y-2 border border-[#3c4b3b]/30">
            <h4 class="font-display text-sm text-white uppercase font-bold">Endereço Oficial</h4>
            <p class="text-xs text-[#bacbb6]">
              Rua Santo Antônio, 19<br/>
              São Mateus do Maranhão - MA<br/>
              CEP: 65470-000
            </p>
          </div>

          <div class="bg-brand-card p-6 rounded-xl space-y-3 border border-[#3c4b3b]/30">
            <h4 class="font-display text-sm text-white uppercase font-bold">Horários de Funcionamento</h4>
            <div class="flex justify-between items-center text-xs border-b border-brand-card-high pb-2">
              <span class="text-white font-semibold">Segunda a Sexta</span>
              <span class="text-brand-primary font-display font-bold">06:00 às 21:00</span>
            </div>
            <div class="flex justify-between items-center text-xs">
              <span class="text-[#bacbb6]">Sábado, Domingo e Feriados</span>
              <span class="text-[#bacbb6] uppercase">Fechado</span>
            </div>
          </div>

          <a 
            href="https://maps.google.com/?q=R.+Santo+Antônio,+19,+São+Mateus+do+Maranhão" 
            target="_blank" 
            rel="noopener noreferrer"
            class="w-full inline-flex items-center justify-center gap-2 bg-brand-primary hover:bg-[#75ff89] text-[#003910] font-display text-sm uppercase py-3.5 rounded-lg font-bold transition-colors"
          >
            <span class="material-symbols-outlined text-[18px]">directions</span>
            Como Chegar no Google Maps
          </a>
        </div>

        <div class="lg:col-span-7">
          <div class="bg-brand-card rounded-2xl overflow-hidden p-2 shadow-2xl border border-[#3c4b3b]/30 h-full min-h-95">
            <div 
              class="w-full h-full min-h-90 rounded-xl bg-cover bg-center relative flex items-end p-4" 
              style="background-image: url('https://lh3.googleusercontent.com/aida-public/AB6AXuBT40y0qtADvu0N4reVFO9XFsiudmuiZAZaR0pjdSC-Mf21KKQSXdKJfHK9hWAoKaKbxk8oaaB105NLDAGsqCQfMh1Mogf6RrlBtPBv2VS7185HDox9Df1k5Io35bVKiSYhmo2UUr28cfG4hikfpzuvtmoWID7RMNM4e74gQT6KEbCHesvjJMeIVz1cSiZKaj0kzT9B7nL7utQbGdQtfBRzgpR8ugM1TaP75OM6VPhbLP7pfeumFyBFVA')"
            >
              <div class="bg-[#0e0e10]/90 backdrop-blur-md p-4 rounded-xl shadow-xl flex items-center justify-between gap-4 w-full border border-brand-card-high">
                <div>
                  <span class="font-display text-sm uppercase text-white font-bold">Treino Pesado</span>
                  <p class="text-xs text-[#bacbb6]">São Mateus do Maranhão</p>
                </div>
                <a href="https://maps.google.com/?q=Treino+Pesado+São+Mateus+do+Maranhão" target="_blank" rel="noopener noreferrer" class="text-brand-primary">
                  <span class="material-symbols-outlined text-[20px]">open_in_new</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>