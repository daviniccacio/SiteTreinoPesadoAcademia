<template>
  <section id="app" class="border-y border-border bg-surface">
    <div class="mx-auto grid max-w-6xl items-center gap-12 px-5 py-24 md:grid-cols-2">
      <!-- Esquerda: Texto e Botão da Store -->
      <div>
        <p class="text-sm font-bold uppercase tracking-widest text-primary">Aplicativo oficial</p>
        <h2 class="mt-3 font-display text-4xl uppercase md:text-5xl">Seu treino no bolso</h2>
        <p class="mt-5 text-muted-foreground">
          Com o app da Treino Pesado você acompanha seus treinos, fica por dentro dos avisos da academia e não perde o foco nem fora dela.
        </p>
        
        <ul class="mt-6 space-y-3">
          <li class="flex items-center gap-3">
            <span class="h-2 w-2 bg-primary"></span>Fichas de treino sempre à mão
          </li>
          <li class="flex items-center gap-3">
            <span class="h-2 w-2 bg-primary"></span>Avisos e novidades da academia
          </li>
          <li class="flex items-center gap-3">
            <span class="h-2 w-2 bg-primary"></span>Acompanhe sua evolução
          </li>
        </ul>

        <a 
          href="https://play.google.com/store/apps/details?id=com.daviniccacio.treinopesado" 
          target="_blank" 
          rel="noreferrer" 
          class="mt-8 inline-flex items-center gap-3 rounded-sm bg-foreground px-5 py-3 text-background transition hover:opacity-90"
        >
          <svg viewBox="0 0 24 24" class="h-7 w-7 fill-current">
            <path d="M3.6 1.8 13.8 12 3.6 22.2c-.4-.2-.6-.6-.6-1.1V2.9c0-.5.2-.9.6-1.1Zm11.3 11.3 2.4 2.4-11 6.3 8.6-8.7Zm3.6-3.6 2.8 1.6c.8.5.8 1.4 0 1.9l-2.8 1.6-2.6-2.6 2.6-2.5ZM6.3 2.2l11 6.3-2.4 2.4-8.6-8.7Z"></path>
          </svg>
          <span class="text-left leading-tight">
            <span class="block text-[10px] uppercase">Disponível no</span>
            <span class="font-display text-lg font-bold">Google Play</span>
          </span>
        </a>
      </div>

      <!-- Direita: Mockup do Smartphone -->
      <div class="flex justify-center">
        <div class="relative h-[480px] w-[240px] rounded-[2.5rem] border-[10px] border-secondary bg-background p-5 shadow-2xl">
          <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuDCN_9vT5wwOS8mQhgSZRx0OaDqXOsn_anJOuCU-NmBU-qPC13wrqLb-l1idvgdDw1nmET6WbouUdEuRn0AtrGTpLG4R9LaCTvyoopKMg2M0gdLGHBdP1sCajVvSz6UQZ6tUYDELRxDcbjJyXW6nzjEu6y34aiHvE-b1ik7fWbTuWShMrmuVCBQAwEYRJy7mZjmn3CjufQ115qxgAF2E7mK0WrglzR313RWcCF5JmGex0RlVj0FLDygmtj8LS_ohn5IElk" alt="Logo" class="mx-auto mt-6 w-32" />
          <div class="mt-8 space-y-3">
            <div class="rounded-sm p-3 text-sm font-bold bg-primary text-primary-foreground">Treino A — Peito</div>
            <div class="rounded-sm p-3 text-sm font-bold bg-surface">Treino B — Costas</div>
            <div class="rounded-sm p-3 text-sm font-bold bg-surface">Treino C — Perna</div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>