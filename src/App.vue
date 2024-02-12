<template>
  <Header></Header>
  <div class="scroll-container">
    <MainSection />
    <AboutUsSection class="full-screen" />
    <div class="full-screen">
      <RoadMapSection />
      <OurBrands />
      <OurResources />
      <GameSection />
      <ExploreNowSection />
      <VirtualArtsSection />
      <TeamSection />
      <FAQSection />
      <SocialMediaSection />
      <Footer></Footer>
    </div>
  </div>
</template>

<script setup>
import Header from '@/components/TheHeader.vue'
import FAQSection from '@/components/FAQSection.vue'
import SocialMediaSection from '@/components/SocialMedia.vue'
import Footer from '@/components/TheFooter.vue'
import TeamSection from '@/components/TeamSection.vue'
import MainSection from './components/MainSection/MainSection.vue'
import AboutUsSection from './components/AboutUsSection/AboutUsSection.vue'
import OurBrands from './components/OurBrands/OurBrands.vue'
import OurResources from './components/OurResources/OurResources.vue'
import ExploreNowSection from '@/components/ExploreNowSection/ExploreNowSection.vue'
import VirtualArtsSection from './components/VirtualArtsSection/VirtualArtsSection.vue'
import RoadMapSection from './components/RoadMapSection/RoadMapSection.vue'
import GameSection from './components/GameSection/GameSection.vue'
</script>

<style lang="scss">
@import '@/scss/base/normalize.scss';
@import '@/scss/base/base.scss';
@import '@/scss/base/vars.scss';
</style>
