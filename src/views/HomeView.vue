<template>
  <div class="min-h-screen bg-background text-foreground">
    <Navbar />
    <main>
      <HeroSection />
      <PricingSection />
      <AppShowcase />
      <ReviewsSection />
      <InstagramBanner />
      <FaqSection />
      <LocationSection />
    </main>
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
</script>