<template>
  <section id="local" class="border-t border-border bg-surface">
    <div class="mx-auto grid max-w-6xl gap-10 px-5 py-24 md:grid-cols-[1fr_1.5fr]">
      <div>
        <h2 class="font-display text-4xl uppercase md:text-5xl">Onde estamos</h2>
        <p class="mt-4 text-muted-foreground">Passa aqui pra conhecer. A primeira diária é só R$10.</p>
        
        <div class="mt-8 flex flex-col gap-3">
          <a 
            href="https://share.google/WnMKkkIYJaTxqVCL6" 
            target="_blank" 
            rel="noreferrer" 
            class="rounded-sm border border-border px-5 py-3 font-bold uppercase transition hover:border-primary hover:text-primary text-center"
          >
            Abrir no Google Maps
          </a>
          <a 
            href="https://wa.me/5585900000000?text=Ol%C3%A1!%20Quero%20saber%20mais%20sobre%20a%20Treino%20Pesado" 
            target="_blank" 
            rel="noreferrer" 
            class="rounded-sm bg-primary px-5 py-3 font-bold uppercase text-primary-foreground text-center"
          >
            Falar no WhatsApp
          </a>
        </div>
      </div>

      <!-- Mapa Google Iframe -->
      <iframe 
        title="Mapa da Treino Pesado Academia" 
        src="https://www.google.com/maps?q=Treino+Pesado+Academia&output=embed" 
        class="h-[380px] w-full rounded-sm border border-border grayscale" 
        loading="lazy"
      ></iframe>
    </div>
  </section>
</template>