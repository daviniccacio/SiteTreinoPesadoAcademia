<template>
  <section id="duvidas" class="mx-auto max-w-3xl px-5 py-24">
    <h2 class="font-display text-4xl uppercase md:text-5xl">Dúvidas</h2>
    
    <div class="mt-10 divide-y divide-border border-y border-border">
      <div v-for="(item, index) in faqList" :key="index">
        <button 
          @click="toggleFaq(index)" 
          class="flex w-full items-center justify-between py-5 text-left font-display text-lg font-bold transition-colors hover:text-primary"
        >
          <span>{{ item.question }}</span>
          <span 
            class="ml-4 text-2xl text-primary transition-transform duration-300"
            :class="{ 'rotate-180': openIndex === index }"
          >
            {{ openIndex === index ? '−' : '+' }}
          </span>
        </button>

        <Transition name="faq-expand">
          <p v-if="openIndex === index" class="pb-5 text-muted-foreground">
            {{ item.answer }}
          </p>
        </Transition>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'

const openIndex = ref(0)

const faqList = [
  {
    question: 'Preciso fazer matrícula?',
    answer: 'Não. Você paga o plano e já pode começar a treinar no mesmo dia.'
  },
  {
    question: 'Tem professor pra me orientar?',
    answer: 'Sim, contamos com instrutores para tirar dúvidas, orientar suas séries e auxiliar na execução correta.'
  },
  {
    question: 'Como funciona o aplicativo?',
    answer: 'Você faz o download na Play Store e recebe o seu acesso para acompanhar seus treinos e fichas de forma digital.'
  },
  {
    question: 'Quais formas de pagamento?',
    answer: 'Aceitamos Pix, cartões de débito/crédito e dinheiro.'
  },
  {
    question: 'Posso fazer só uma diária pra testar?',
    answer: 'Com certeza! A diária custa apenas R$10 e dá acesso completo aos equipamentos no dia.'
  }
]

function toggleFaq(index) {
  openIndex.value = openIndex.value === index ? -1 : index
}
</script>