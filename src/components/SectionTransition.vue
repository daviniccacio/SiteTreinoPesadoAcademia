<template>
  <!-- Contêiner wrapper que aplica a classe de animação e alterna 'is-visible' -->
  <div 
    ref="sectionRef" 
    :class="[animationClass, { 'is-visible': isVisible }]"
  >
    <!-- Slot para renderizar qualquer componente interno -->
    <slot />
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted, computed } from 'vue'

// Propriedades para selecionar o tipo de efeito ('fade-up' ou 'clip')
const props = defineProps({
  type: {
    type: String,
    default: 'fade-up'
  }
})

const sectionRef = ref(null)
const isVisible = ref(false)
let observer = null

// Mapeamento dinâmico das classes CSS declaradas no main.css
const animationClass = computed(() => {
  return props.type === 'clip' ? 'transition-clip' : 'transition-fade-up'
})

onMounted(() => {
  // IntersectionObserver contínuo sem 'unobserve'
  observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        // Atualiza isVisible continuamente: true quando visível, false quando fora da tela
        isVisible.value = entry.isIntersecting
      })
    },
    { 
      threshold: 0.15, // Dispara quando 15% do elemento estiver visível na janela
      rootMargin: '-20px 0px -20px 0px' // Margem que previne disparos falsos nas bordas da tela
    }
  )

  if (sectionRef.value) {
    observer.observe(sectionRef.value)
  }
})

onUnmounted(() => {
  // Desconecta o observador ao desmontar o componente para economizar memória
  if (observer) {
    observer.disconnect()
  }
})
</script>