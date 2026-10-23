<template>
  <section id="local" class="relative overflow-hidden bg-background py-24">

    <div class="relative mx-auto max-w-6xl px-5">
      
      <!-- Título de Impacto -->
      <div class="mb-14">
        <span class="inline-block bg-primary px-3 py-1 font-display text-xs font-black uppercase text-primary-foreground">VENHA CONHECER</span>
        <h2 class=" font-display text-4xl font-black uppercase md:text-6xl">
          Nossa <span class="text-primary">Localização</span>
        </h2>
        <p class="mt-2 max-w-md text-sm text-muted-foreground">
          Estrutura pronta pra você evoluir. A primeira diária custa apenas R$10.
        </p>
      </div>

      <!-- Layout Integrado -->
      <div class="grid gap-10 md:grid-cols-12 items-center">
        
        <!-- Cartão Principal Flutuante (5 colunas) -->
        <div class="md:col-span-5 z-10 rounded-2xl bg-surface p-8 border border-border shadow-2xl space-y-6">
          
          <div class="space-y-1">
            <span class="text-[11px] uppercase tracking-wider text-primary font-bold">Endereço</span>
            <h3 class="font-display text-2xl font-bold uppercase text-foreground">R. Santo Antônio, 19</h3>
            <p class="text-xs text-muted-foreground">São Mateus do Maranhão - MA</p>
          </div>

          <div class="border-t border-border/80 pt-4 space-y-1">
            <span class="text-[11px] uppercase tracking-wider text-primary font-bold">Horário de Funcionamento</span>
            <p class="font-display text-base font-bold text-foreground">Segunda a Sexta: 06:00 - 21:00</p>
            <p class="text-xs text-muted-foreground">Finais de semana: Fechado</p>
          </div>

          <div class="pt-2 flex flex-col gap-3">
            <a 
              href="https://share.google/WnMKkkIYJaTxqVCL6" 
              target="_blank" 
              rel="noreferrer" 
              class="w-full rounded-xl bg-primary py-4 text-center font-display text-xs font-black uppercase tracking-wider text-primary-foreground shadow-lg transition hover:scale-[1.02] active:scale-95"
            >
              Abrir rota no Maps
            </a>
            <a 
              href="https://wa.me/5585900000000?text=Ol%C3%A1!%20Quero%20saber%20mais%20sobre%20a%20Treino%20Pesado" 
              target="_blank" 
              rel="noreferrer" 
              class="w-full rounded-xl border border-border bg-background py-3.5 text-center font-display text-xs font-bold uppercase tracking-wider text-foreground transition hover:border-primary hover:text-primary"
            >
              Falar com o atendimento
            </a>
          </div>

        </div>

        <!-- Container do Mapa (7 colunas) -->
        <div class="md:col-span-7">
          <iframe 
            title="Mapa da Treino Pesado Academia" 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7761.0662944912665!2d-44.481039787429715!3d-4.031016005734605!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x78afc06ea42294d%3A0xf491983484ce08d4!2sTreino%20Pesado%20Academia!5e0!3m2!1spt-BR!2sbr!4v1792687527230!5m2!1spt-BR!2sbr" 
            class="h-100 w-full rounded-2xl border border-border grayscale transition-all duration-300 hover:grayscale-0 shadow-xl" 
            loading="lazy"
            referrerpolicy="strict-origin-when-cross-origin"
          ></iframe>
        </div>

      </div>

    </div>
  </section>
</template>