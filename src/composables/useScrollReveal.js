import { onMounted, onUnmounted } from 'vue'

/**
 * Composable que observa elementos com a classe .reveal-element 
 * e adiciona a classe .is-visible quando entram no campo de visão.
 */
export function useScrollReveal() {
  let observer = null

  onMounted(() => {
    // Configura o observador com margem de ativação de 15% da altura do elemento
    observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
            // Para de observar após animar uma vez
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.15 }
    )

    // Seleciona e observa todos os elementos marcados para revelação
    const elements = document.querySelectorAll('.reveal-element')
    elements.forEach((el) => observer.observe(el))
  })

  onUnmounted(() => {
    if (observer) {
      observer.disconnect()
    }
  })
}