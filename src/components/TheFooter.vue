<template>
  <footer class="footer">
    <div class="footer__inner">
      <!--
      <div class="footer__blur footer__blur-1"></div>
      <div class="footer__blur footer__blur-2"></div>
      <div class="footer__blur footer__blur-3"></div>
      <div class="footer__blur footer__blur-4"></div>
      -->
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
      <div class="footer__marquee-block">
        <div class="footer__marquee">
          <span>info@craftymetaverse.com</span>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
import GlobalIcon from '@/components/icons/GlobalIcon.vue'
</script>

<style scoped>
@import '@/scss/components/footer.scss';
</style>
