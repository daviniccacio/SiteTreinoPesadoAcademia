<template>
  <section id="duvidas" class="mx-auto max-w-7xl px-5 py-24">
    <!-- Cabeçalho Pôster Superior (Coluna Única) -->
    <div class="mb-12 border-b border-border pb-8 flex flex-col md:flex-row md:items-end justify-between gap-6">
      <div class="space-y-3 max-w-xl">
        <span class="mb-4 inline-block bg-primary px-2 py-1 text-xs font-bold uppercase tracking-widest text-primary-foreground">
          Dúvidas Frequentes
        </span>
        <h2 class="font-display text-4xl font-black uppercase md:text-6xl">
          Tudo o que você precisa <span class="text-primary">saber.</span>
        </h2>
      </div>
    </div>

    <!-- Lista de Acordeões Editoriais em Coluna Única -->
    <div class="space-y-4">
      <div 
        v-for="(item, index) in faqList" 
        :key="index"
        class="rounded-xl border border-border bg-surface/40 overflow-hidden transition-all duration-300 hover:border-primary/50"
        :class="{ 'border-primary/80 bg-surface shadow-[0_0_20px_rgba(0,230,91,0.08)]': openIndex === index }"
      >
        <button 
          @click="toggleFaq(index)" 
          class="flex w-full items-center justify-between p-6 text-left font-display text-base md:text-lg font-bold uppercase cursor-pointer"
        >
          <span class="flex items-center gap-3">
            <span class="text-xs font-mono text-primary font-bold">// 0{{ index + 1 }}</span>
            <span class="text-foreground">{{ item.question }}</span>
          </span>
          <span 
            class="font-mono text-xl text-primary transition-transform duration-300"
            :class="{ 'rotate-180': openIndex === index }"
          >
            {{ openIndex === index ? '−' : '+' }}
          </span>
        </button>

        <Transition name="faq-expand">
          <div v-if="openIndex === index" class="px-6 pb-6 pt-0 text-xs md:text-sm text-muted-foreground leading-relaxed border-t border-border/40">
            <p class="pt-4 pl-4 border-l-2 border-primary/40">{{ item.answer }}</p>
          </div>
        </Transition>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'

// Estado reativo para controlar o item aberto (-1 indica que nenhum está aberto)
const openIndex = ref(0)

const faqList = [
  {
    question: 'Preciso fazer matrícula?',
    answer: 'Não. Você paga o plano escolhido no balcão ou WhatsApp e já pode começar a treinar no mesmo dia.'
  },
  {
    question: 'Tem professor pra me orientar?',
    answer: 'Sim! Contamos com instrutores na sala de musculação para tirar dúvidas, orientar suas séries e auxiliar na execução correta dos exercícios.'
  },
  {
    question: 'Como funciona o aplicativo?',
    answer: 'Você faz o download na Google Play Store e nós liberamos o seu acesso para acompanhar seus treinos e fichas de forma 100% digital.'
  },
  {
    question: 'Quais formas de pagamento?',
    answer: 'Aceitamos Pix, cartões de débito, crédito e dinheiro.'
  },
  {
    question: 'Posso fazer só uma diária pra testar?',
    answer: 'Com certeza! A diária custa apenas R$10 e dá acesso completo aos equipamentos durante todo o dia.'
  }
]

function toggleFaq(index) {
  openIndex.value = openIndex.value === index ? -1 : index
}
</script>