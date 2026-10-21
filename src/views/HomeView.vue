<template>
  <div class="min-h-screen bg-[#131315] text-[#e5e1e4]">
    <Navbar />
    <main>
      <HeroSection />
      <StatsTicker />
      <PricingSection />
      <AppShowcase />
      <StructureSection />
      <LocationSection />
      <InstagramBanner />
      <FaqSection />
    </main>
    <FooterSection />
  </div>
</template>

<script setup>
import Navbar from '../components/NavBar.vue'
import HeroSection from '../components/HeroSection.vue'
import StatsTicker from '../components/StatsTicker.vue'
import PricingSection from '../components/PricingSection.vue'
import AppShowcase from '../components/AppShowcase.vue'
import StructureSection from '../components/StructureSection.vue'
import LocationSection from '../components/LocationSection.vue'
import InstagramBanner from '../components/InstagramBanner.vue'
import FaqSection from '../components/FaqSection.vue'
import FooterSection from '../components/Footer.vue'
</script>