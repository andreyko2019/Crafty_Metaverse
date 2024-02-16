<template>
  <Header />

  <MainSection />

  <AboutUsSection />

  <RoadMapSection />

  <OurBrands />

  <OurResources />

  <Marquee />

  <GameSection />

  <ExploreNowSection />

  <VirtualArtsSection />

  <TeamSection />

  <Marquee2 />

  <FAQSection />

  <SocialMediaSection />

  <Footer />
</template>

<script setup>
  import MainSection from '@/components/MainSection/MainSection.vue'
  import Header from '@/components/TheHeader/TheHeader.vue'
  import AboutUsSection from '@/components/AboutUsSection/AboutUsSection.vue'
  import RoadMapSection from '@/components/RoadMapSection/RoadMapSection.vue'
  import OurBrands from '@/components/OurBrands/OurBrands.vue'
  import OurResources from '@/components/OurResources/OurResources.vue'
  import Marquee from '@/components/Marquee/TheMarquee.vue'
  import GameSection from '@/components/GameSection/GameSection.vue'
  import ExploreNowSection from '@/components/ExploreNowSection/ExploreNowSection.vue'
  import VirtualArtsSection from '@/components/VirtualArtsSection/VirtualArtsSection.vue'
  import TeamSection from '@/components/TeamSection/TeamSection.vue'
  import Marquee2 from '@/components/Marquee/Marquee-2.vue'
  import FAQSection from '@/components/FAQSection/FAQSection.vue'
  import SocialMediaSection from '@/components/SocialMediaSection/SocialMediaSection.vue'
  import Footer from '@/components/TheFooter/TheFooter.vue'
</script>

<style lang="scss">
  @import '@/scss/base/normalize.scss';
  @import '@/scss/base/base.scss';
  @import '@/scss/base/vars.scss';
</style>
