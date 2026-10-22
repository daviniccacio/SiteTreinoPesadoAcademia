<template>
  <section id="avaliacoes" class="mx-auto max-w-6xl px-5 py-24">
    <!-- Cabeçalho Editorial com Média de Notas do Google -->
    <div class="mb-12 flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-border pb-8">
      <div class="space-y-3">
        <div class="flex items-center gap-3">
          <span class="inline-block bg-primary px-3 py-1 font-display text-[10px] font-black uppercase text-primary-foreground">
            AVALIAÇÕES REAIS
          </span>

        </div>
        
        <h2 class="font-display text-4xl font-black uppercase md:text-6xl leading-none">
          Quem treina, <span class="text-primary">aprova.</span>
        </h2>
        
        <p class="text-xs text-muted-foreground leading-relaxed max-w-lg">
          Opinião sincera de quem vive a rotina da Treino Pesado em São Mateus do Maranhão.
        </p>
      </div>

      <!-- Link para ver no Google (Substituído por font-display) -->
      <a 
        href="https://share.google/WnMKkkIYJaTxqVCL6" 
        target="_blank" 
        rel="noreferrer" 
        class="inline-flex items-center gap-2 text-xs font-display font-bold uppercase text-primary border border-primary/30 bg-primary/10 px-4 py-2.5 rounded-lg transition-all hover:bg-primary/20 hover:border-primary"
      >
        <span>Ver todas no Google</span>
        <span>↗</span>
      </a>
    </div>

    <!-- Grid de Cartões de Depoimento -->
    <div class="grid gap-6 md:grid-cols-3">
      <figure 
        v-for="(review, index) in reviewsList" 
        :key="index"
        class="group flex flex-col justify-between rounded-xl border border-border bg-surface/50 p-7 transition-all duration-300 hover:border-primary/60 hover:bg-surface"
      >
        <div>
          <!-- Topo do Card: Estrelas e Badge (Substituídos por font-display) -->
          <div class="flex items-center justify-between">
            <div class="text-primary font-display text-sm tracking-widest">
              ★★★★★
            </div>
            <span 
              v-if="review.badge" 
              class="rounded bg-background px-2 py-0.5 font-display text-[10px] font-bold text-muted-foreground uppercase border border-border"
            >
              {{ review.badge }}
            </span>
          </div>

          <!-- Depoimento -->
          <blockquote class="mt-5 text-sm leading-relaxed text-foreground/90 font-medium italic">
            "{{ review.comment }}"
          </blockquote>
        </div>

        <!-- Autor do Depoimento (Substituído por font-sans no timeAgo) -->
        <figcaption class="mt-6 pt-4 border-t border-border/50 flex items-center justify-between">
          <span class="font-display font-bold text-sm uppercase text-foreground group-hover:text-primary transition-colors">
            {{ review.author }}
          </span>
          <span class="font-sans text-[11px] font-medium text-muted-foreground">
            {{ review.timeAgo }}
          </span>
        </figcaption>
      </figure>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'

// Array reativo com as avaliações reais do Google Maps
const reviewsList = ref([
  {
    author: 'Junilson Viegas',
    comment: 'Uma ótima academia, tem instrumentos certo para cada atividade, tem um profissional de educação física gabaritado e os donos são bem atenciosos. Super recomendo, talvez a melhor da cidade.'
  },
  {
    author: 'Aurea Sousa',
    comment: 'Otimo local pra praticar exercicios físicos. Uma boa receptividade. Super recomendo.'
  },
  {
    author: 'Hermes Carvalho',
    comment: 'Melhor academia da cidade'
  }
])
</script>