<template>
  <footer class="footer">
    <div class="footer__inner">
      <div class="footer__blur footer__blur-1">
        <img src="@/assets/images/TheFooter/blur-1.svg" alt="Blur" />
      </div>
      <div class="footer__blur footer__blur-2">
        <img src="@/assets/images/TheFooter/blur-2.svg" alt="Blur" />
      </div>
      <div class="footer__blur footer__blur-3">
        <img src="@/assets/images/TheFooter/blur-3.svg" alt="Blur" />
      </div>
      <div class="footer__blur footer__blur-4">
        <img src="@/assets/images/TheFooter/blur-4.svg" alt="Blur" />
      </div>
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
