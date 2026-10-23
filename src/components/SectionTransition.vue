<template>
  <!-- Renderiza o contêiner com a classe de animação escolhida via prop -->
  <div 
    ref="sectionRef" 
    :class="[animationClass, { 'is-visible': isVisible }]"
  >
    <!-- Slot que recebe o componente interno (Hero, Planos, App, etc.) -->
    <slot />
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted, computed } from 'vue'

// Define a propriedade 'type' com valor padrão 'fade-up'
const props = defineProps({
  type: {
    type: String,
    default: 'fade-up' // Opções: 'fade-up' ou 'clip'
  }
})

const sectionRef = ref(null)
const isVisible = ref(false)
let observer = null

// Mapeia o tipo da animação para a classe CSS
const animationClass = computed(() => {
  return props.type === 'clip' ? 'transition-clip' : 'transition-fade-up'
})

onMounted(() => {
  // Configura o IntersectionObserver para disparar quando 15% da seção estiver visível
  observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          isVisible.value = true
          // Cancela a observação após a animação acontecer uma vez
          if (sectionRef.value) {
            observer.unobserve(sectionRef.value)
          }
        }
      })
    },
    { threshold: 0.15 }
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