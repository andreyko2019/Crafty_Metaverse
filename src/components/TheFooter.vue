<template>
  <footer class="footer">
    <div class="footer__inner">
      <div class="footer__global-block">
        <GlobalIcon class="footer__global-block-icon" />
        <p class="footer__global-block-description">
          Based in US Active worldwide
        </p>
      </div>
      <div class="footer__contacts-block">
        <div class="footer__contacts-block-element">CONTACT</div>
        <div class="footer__contacts-block-element">CONTACT</div>
      </div>
      <marquee scrolldelay="60" class="footer__marquee-block">
        info@craftymetaverse.com
      </marquee>
    </div>
  </footer>
</template>

<script setup>
import GlobalIcon from '@/components/icons/GlobalIcon.vue'
</script>

<style scoped>
@import '@/scss/components/footer.scss';
</style>
