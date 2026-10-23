<template>
  <section id="aplicativo" class="border-y border-border bg-surface py-24">
    <div class="mx-auto grid max-w-6xl items-center gap-12 px-5 md:grid-cols-2">
      
      <!-- Esquerda: Informações e Download -->
      <div class="space-y-6">
        <div class="space-y-2">
          <span class="inline-block bg-primary px-3 py-1 font-display text-[10px] font-black uppercase text-primary-foreground">
            APP OFICIAL TREINO PESADO
          </span>
          <h2 class="font-display text-4xl font-black uppercase md:text-6xl leading-none">
            Seu treino <br />
            <span class="text-primary">no bolso.</span>
          </h2>
        </div>

        <p class="text-sm text-muted-foreground leading-relaxed max-w-md">
          Acompanhe suas fichas de musculação, receba avisos importantes da academia e acompanhe a sua evolução diária direto pelo celular.
        </p>

        <!-- Lista de Recursos no estilo Checagem Editorial -->
        <ul class="space-y-3 font-display text-xs font-bold uppercase text-foreground">
          <li class="flex items-center gap-3">
            <span class="flex h-5 w-5 items-center justify-center rounded-full bg-primary/20 text-primary font-mono text-xs">✓</span>
            Fichas de treino 100% digitais e atualizadas
          </li>
          <li class="flex items-center gap-3">
            <span class="flex h-5 w-5 items-center justify-center rounded-full bg-primary/20 text-primary font-mono text-xs">✓</span>
            Avisos de horários e comunicados da academia
          </li>
          <li class="flex items-center gap-3">
            <span class="flex h-5 w-5 items-center justify-center rounded-full bg-primary/20 text-primary font-mono text-xs">✓</span>
            Histórico e acompanhamento de carga
          </li>
        </ul>

        <!-- Botão Google Play -->
        <div class="pt-4">
          <a 
            href="https://play.google.com/store/apps/details?id=com.daviniccacio.treinopesado" 
            target="_blank" 
            rel="noreferrer" 
            class="group inline-flex items-center gap-4 rounded-xl bg-background border border-border px-6 py-4 transition-all duration-300 hover:border-primary hover:shadow-[0_0_20px_rgba(0,230,91,0.15)]"
          >
            <svg viewBox="0 0 24 24" class="h-8 w-8 fill-primary">
              <path d="M3.6 1.8 13.8 12 3.6 22.2c-.4-.2-.6-.6-.6-1.1V2.9c0-.5.2-.9.6-1.1Zm11.3 11.3 2.4 2.4-11 6.3 8.6-8.7Zm3.6-3.6 2.8 1.6c.8.5.8 1.4 0 1.9l-2.8 1.6-2.6-2.6 2.6-2.5ZM6.3 2.2l11 6.3-2.4 2.4-8.6-8.7Z"></path>
            </svg>
            <span class="text-left leading-tight">
              <span class="block text-[10px] uppercase text-muted-foreground text-center font-mono">Disponível apenas no</span>
              <span class="font-display text-lg font-black uppercase text-foreground group-hover:text-primary transition-colors">Google Play</span>
            </span>
          </a>
        </div>
      </div>

      <!-- Direita: Moldura de Smartphone Flutuante (Pronta para Screenshot) -->
      <div class="flex justify-center">
        <div class="animate-float relative h-[500px] w-[250px] rounded-[3rem] border-[8px] border-secondary bg-background p-3 shadow-2xl transition-all hover:border-primary">
          <!-- Notch do Celular (Câmera) -->
          <div class="absolute top-4 left-1/2 -translate-x-1/2 h-4 w-20 rounded-full bg-secondary z-20"></div>

          <!-- AQUI ENTRA A FOTO OFICIAL DO APLICATIVO -->
          <div class="h-full w-full overflow-hidden rounded-[2.2rem] bg-background">
            <img 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDCN_9vT5wwOS8mQhgSZRx0OaDqXOsn_anJOuCU-NmBU-qPC13wrqLb-l1idvgdDw1nmET6WbouUdEuRn0AtrGTpLG4R9LaCTvyoopKMg2M0gdLGHBdP1sCajVvSz6UQZ6tUYDELRxDcbjJyXW6nzjEu6y34aiHvE-b1ik7fWbTuWShMrmuVCBQAwEYRJy7mZjmn3CjufQ115qxgAF2E7mK0WrglzR313RWcCF5JmGex0RlVj0FLDygmtj8LS_ohn5IElk" 
              alt="Captura de tela do aplicativo Treino Pesado" 
              class="h-full w-full object-cover object-top"
            />
          </div>
        </div>
      </div>

    </div>
  </section>
</template>