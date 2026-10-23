<template>
  <div class="min-h-screen bg-background text-foreground">
    <!-- Barra de Navegação Superior -->
    <Navbar />

    <main class="space-y-4">
      <!-- 1. Hero / Destaque Principal -->
      <SectionTransition type="fade-up">
        <HeroSection />
      </SectionTransition>

      <!-- 2. Contador / Estatísticas Rápidas -->
      <SectionTransition type="fade-up">
        <StatsTicker />
      </SectionTransition>

      <!-- 3. Estrutura da Academia -->
      <SectionTransition type="fade-up">
        <StructureSection />
      </SectionTransition>

      <!-- 4. Tabela de Planos e Preços -->
      <SectionTransition type="fade-up">
        <PricingSection />
      </SectionTransition>

      <!-- 5. Aplicativo Treino Pesado (Efeito Cortina) -->
      <SectionTransition type="clip">
        <AppShowcase />
      </SectionTransition>

      <!-- 6. Avaliações dos Alunos -->
      <SectionTransition type="fade-up">
        <ReviewsSection />
      </SectionTransition>

      <!-- 7. Chamada do Instagram -->
      <SectionTransition type="fade-up">
        <InstagramBanner />
      </SectionTransition>

      <!-- 8. Localização e Mapa -->
      <SectionTransition type="clip">
        <LocationSection />
      </SectionTransition>

      <!-- 9. Perguntas Frequentes (FAQ) -->
      <SectionTransition type="fade-up">
        <FaqSection />
      </SectionTransition>
    </main>

    <!-- Rodapé da Página -->
    <FooterSection />

    <!-- Botão Flutuante do WhatsApp -->
    <FloatingWhatsapp />
  </div>
</template>

<script setup>
// Importações correspondentes exatamente aos arquivos da pasta src/components/
import Navbar from '../components/Navbar.vue'
import HeroSection from '../components/HeroSection.vue'
import PricingSection from '../components/PricingSection.vue'
import AppShowcase from '../components/AppShowcase.vue'
import ReviewsSection from '../components/ReviewsSection.vue'
import InstagramBanner from '../components/InstagramBanner.vue'
import LocationSection from '../components/LocationSection.vue'
import FaqSection from '../components/FaqSection.vue'
import FooterSection from '../components/Footer.vue'
import FloatingWhatsapp from '../components/FloatingWhatsapp.vue'

// Importação do invólucro de transição
import SectionTransition from '../components/SectionTransition.vue'
</script>