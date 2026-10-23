<template>
  <section id="aplicativo" ref="sectionRef" class="border-y border-border bg-surface py-24 overflow-hidden">
    <div class="mx-auto grid max-w-6xl items-center gap-12 px-5 md:grid-cols-2">

      <!-- Esquerda: Informações e Download -->
      <div class="space-y-6">
        <div class="space-y-2">
          <span
            class="inline-block bg-primary px-3 py-1 font-display text-xs font-black uppercase text-primary-foreground">
            Aplicativo OFICIAL TREINO PESADO
          </span>
          <h2 class="font-display text-4xl font-black uppercase md:text-6xl leading-none">
            Seu treino <br />
            <span class="text-primary">no bolso</span>
          </h2>
        </div>

        <p class="text-sm text-muted-foreground leading-relaxed max-w-md">
          Acompanhe suas fichas de musculação, receba avisos importantes da academia e acompanhe a sua evolução diária
          direto pelo celular.
        </p>

        <!-- Lista de Recursos -->
        <ul class="space-y-3 font-display text-xs font-bold uppercase text-foreground">
          <li class="flex items-center gap-3">
            <span
              class="flex h-5 w-5 items-center justify-center rounded-full bg-primary/20 text-primary font-mono text-xs">✓</span>
            Fichas de treino 100% digitais e atualizadas
          </li>
          <li class="flex items-center gap-3">
            <span
              class="flex h-5 w-5 items-center justify-center rounded-full bg-primary/20 text-primary font-mono text-xs">✓</span>
            Avisos de horários e comunicados da academia
          </li>
          <li class="flex items-center gap-3">
            <span
              class="flex h-5 w-5 items-center justify-center rounded-full bg-primary/20 text-primary font-mono text-xs">✓</span>
            Histórico e acompanhamento de carga
          </li>
        </ul>

        <!-- Botão Google Play -->
        <div class="pt-4">
          <a href="https://play.google.com/store/apps/details?id=com.daviniccacio.treinopesado" target="_blank"
            rel="noreferrer"
            class="group inline-flex items-center gap-4 rounded-xl bg-background border border-border px-6 py-4 transition-all duration-300 hover:border-primary hover:shadow-[0_0_20px_rgba(0,230,91,0.15)]">
            <svg viewBox="0 0 24 24" class="h-8 w-8 fill-primary">
              <path
                d="M3.6 1.8 13.8 12 3.6 22.2c-.4-.2-.6-.6-.6-1.1V2.9c0-.5.2-.9.6-1.1Zm11.3 11.3 2.4 2.4-11 6.3 8.6-8.7Zm3.6-3.6 2.8 1.6c.8.5.8 1.4 0 1.9l-2.8 1.6-2.6-2.6 2.6-2.5ZM6.3 2.2l11 6.3-2.4 2.4-8.6-8.7Z">
              </path>
            </svg>
            <span class="text-left leading-tight">
              <span class="block text-[10px] uppercase text-muted-foreground text-center font-mono">Disponível apenas
                no</span>
              <span
                class="font-display text-lg font-black uppercase text-foreground group-hover:text-primary transition-colors">Google
                Play</span>
            </span>
          </a>
        </div>
      </div>

      <!-- Direita: Apresentação Tripla dos Celulares -->
      <div class="group relative flex min-h-135 items-center justify-center cursor-pointer"
        @mouseenter="isHovered = true" @mouseleave="isHovered = false">

        <!-- 1. CELULAR DA ESQUERDA -->
        <div
          class="absolute z-10 h-110 w-55 rounded-[2.5rem] border-[6px] border-secondary bg-background p-2 shadow-xl transition-all duration-700 ease-in-out"
          :class="(isRevealed || isHovered)
            ? 'opacity-90 -translate-x-28 md:-translate-x-36 -rotate-12 scale-90'
            : 'opacity-0 translate-x-0 rotate-0 scale-75 pointer-events-none'">
          <div class="absolute top-3 left-1/2 -translate-x-1/2 h-3 w-12 rounded-full bg-secondary z-20"></div>
          <div class="h-full w-full overflow-hidden rounded-4xl bg-[#f8f9fa] flex items-center justify-center">
            <img :src="appPrintLeftImg || appPrint" alt="Tela secundária do app - Treino Pesado"
              class="h-full w-full object-contain object-center" loading="lazy" decoding="async" width="220" height="440" />
          </div>
        </div>

        <!-- 2. CELULAR PRINCIPAL (Centro) -->
        <div
          class="animate-float relative z-20 h-130 w-65 rounded-[3rem] border-8 border-secondary bg-background p-2.5 shadow-2xl transition-all duration-300">
          <div class="absolute top-3.5 left-1/2 -translate-x-1/2 h-3.5 w-16 rounded-full bg-secondary z-20"></div>
          <div class="h-full w-full overflow-hidden rounded-[2.2rem] bg-[#f8f9fa] flex items-center justify-center">
            <img :src="appPrint" alt="Tela principal do app - Treino Pesado Academia"
              class="h-full w-full object-contain object-center" loading="lazy" decoding="async" width="260" height="520" />
          </div>
        </div>

        <!-- 3. CELULAR DA DIREITA -->
        <div
          class="absolute z-10 h-110 w-55 rounded-[2.5rem] border-[6px] border-secondary bg-background p-2 shadow-xl transition-all duration-700 ease-in-out"
          :class="(isRevealed || isHovered)
            ? 'opacity-90 translate-x-28 md:translate-x-36 rotate-12 scale-90'
            : 'opacity-0 translate-x-0 rotate-0 scale-75 pointer-events-none'">
          <div class="absolute top-3 left-1/2 -translate-x-1/2 h-3 w-12 rounded-full bg-secondary z-20"></div>
          <div class="h-full w-full overflow-hidden rounded-4xl bg-[#f8f9fa] flex items-center justify-center">
            <img :src="appPrintRightImg || appPrint" alt="Tela secundária do app - Treino Pesado"
              class="h-full w-full object-contain object-center" loading="lazy" decoding="async" width="220" height="440" />
          </div>
        </div>

      </div>

    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

// Importando caminhos dinâmicos corretos da pasta public ou src/assets
import appPrint from '/assets/img/treinopesadoappprint5.webp'
import appPrintLeftImg from '/assets/img/treinopesadoappprint6.webp'
import appPrintRightImg from '/assets/img/treinopesadoappprint4.webp'

const sectionRef = ref(null)
const isRevealed = ref(false)
const isHovered = ref(false)

let observer = null

onMounted(() => {
  observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        isRevealed.value = entry.isIntersecting
      })
    },
    {
      rootMargin: '-15% 0px -15% 0px',
      threshold: 0.25
    }
  )

  if (sectionRef.value) {
    observer.observe(sectionRef.value)
  }
})

onUnmounted(() => {
  if (observer) {
    observer.disconnect()
  }
})
</script>