<template>
  <div class="min-h-screen bg-background text-foreground">
    <Navbar />
    
    <main class="space-y-4">
      <!-- Seção Principal com Transição Suave -->
      <SectionTransition type="fade-up">
        <HeroSection />
      </SectionTransition>

      <!-- Seção de Planos -->
      <SectionTransition type="fade-up">
        <PricingSection />
      </SectionTransition>

      <!-- Seção do Aplicativo com Efeito Cortina/Clip -->
      <SectionTransition type="clip">
        <AppShowcase />
      </SectionTransition>

      <!-- Seção de Avaliações -->
      <SectionTransition type="fade-up">
        <ReviewsSection />
      </SectionTransition>

      <!-- Banner do Instagram -->
      <SectionTransition type="fade-up">
        <InstagramBanner />
      </SectionTransition>
      
      <SectionTransition type="clip">
        <LocationSection />
      </SectionTransition>
    </main>
      <!-- Dúvidas/FAQ -->
      <SectionTransition type="fade-up">
        <FaqSection />
      </SectionTransition>

      <!-- Localização -->

    <FooterSection />
    <FloatingWhatsapp />
  </div>
</template>

<script setup>
import Navbar from '../components/NavBar.vue'
import HeroSection from '../components/HeroSection.vue'
import PricingSection from '../components/PricingSection.vue'
import AppShowcase from '../components/AppShowcase.vue'
import ReviewsSection from '../components/ReviewsSection.vue'
import InstagramBanner from '../components/InstagramBanner.vue'
import FaqSection from '../components/FaqSection.vue'
import LocationSection from '../components/LocationSection.vue'
import FooterSection from '../components/Footer.vue'
import FloatingWhatsapp from '../components/FloatingWhatsapp.vue'

// Importa o wrapper de transições de seção
import SectionTransition from '../components/SectionTransition.vue'
</script>