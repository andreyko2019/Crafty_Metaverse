<template>
  <Header></Header>
  <TeamSection />
  <FAQSection />
  <SocialMediaSection />
  <Footer></Footer>
</template>

<script setup>
import Header from '@/components/TheHeader.vue'
import FAQSection from '@/components/FAQSection.vue'
import SocialMediaSection from '@/components/SocialMedia.vue'
import Footer from '@/components/TheFooter.vue'
import TeamSection from '@/components/TeamSection.vue'
</script>

<style lang="scss">
@import '@/scss/normalize.scss';
</style>
