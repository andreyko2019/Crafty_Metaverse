<template>
  <footer class="footer">
    <div class="footer__inner">
      <div
        v-for="(blurImg, index) in blurImages"
        :key="`blur-${index}`"
        class="footer__blur"
      >
        <img :src="blurImg" loading="lazy" :alt="`Blur ${index}`" />
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
        <div ref="marqueeElementRef4" class="footer__marquee">
          <span>
            <a href="mailto: info@craftymetaverse.com"
              >info@craftymetaverse.com</a
            >
          </span>
          <span>
            <a href="mailto: info@craftymetaverse.com"
              >info@craftymetaverse.com</a
            >
          </span>
          <span>
            <a href="mailto: info@craftymetaverse.com"
              >info@craftymetaverse.com</a
            >
          </span>
          <span>
            <a href="mailto: info@craftymetaverse.com"
              >info@craftymetaverse.com</a
            >
          </span>
          <span>
            <a href="mailto: info@craftymetaverse.com"
              >info@craftymetaverse.com</a
            >
          </span>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { ref } from 'vue';
import { intersectionObserver } from '@/composables/IntersectionObserver';
import GlobalIcon from '@/components/icons/GlobalIcon.vue';
import Blur1 from '@/assets/images/TheFooter/blur-1.webp';
import Blur2 from '@/assets/images/TheFooter/blur-2.webp';
import Blur3 from '@/assets/images/TheFooter/blur-3.webp';
import Blur4 from '@/assets/images/TheFooter/blur-4.webp';

const blurImages = [Blur1, Blur2, Blur3, Blur4];

const marqueeElementRef4 = ref([]);

intersectionObserver(marqueeElementRef4, (entry) => {
  if (entry.isIntersecting) {
    marqueeElementRef4.value.classList.add('animated');
  } else {
    marqueeElementRef4.value.classList.remove('animated');
  }
});
</script>

<style>
@import './TheFooter.scss';
</style>
