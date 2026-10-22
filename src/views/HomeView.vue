<template>
  <div class="min-h-screen bg-background text-foreground">
    <Navbar />
    
    <main class="space-y-4">
      <div class="reveal-element">
        <HeroSection />
      </div>

      <div class="reveal-element">
        <PricingSection />
      </div>

      <div class="reveal-element">
        <AppShowcase />
      </div>

      <div class="reveal-element">
        <ReviewsSection />
      </div>

      <div class="reveal-element">
        <InstagramBanner />
      </div>

      <div class="reveal-element">
        <FaqSection />
      </div>

      <div class="reveal-element">
        <LocationSection />
      </div>
    </main>

    <FooterSection />
    <FloatingWhatsapp />
  </div>
</template>

<script setup>
import Navbar from '../components/Navbar.vue'
import HeroSection from '../components/HeroSection.vue'
import PricingSection from '../components/PricingSection.vue'
import AppShowcase from '../components/AppShowcase.vue'
import ReviewsSection from '../components/ReviewsSection.vue'
import InstagramBanner from '../components/InstagramBanner.vue'
import FaqSection from '../components/FaqSection.vue'
import LocationSection from '../components/LocationSection.vue'
import FooterSection from '../components/Footer.vue'
import FloatingWhatsapp from '../components/FloatingWhatsapp.vue'

// Importa e inicializa a animação ao rolar a página
import { useScrollReveal } from '../composables/useScrollReveal'

useScrollReveal()
</script>