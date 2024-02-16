<template>
  <div class="marquee-line-block marquee-line-block-1">
    <div ref="marqueeElementRef1" class="marquee-line marquee-line-1">
      <div class="marquee-line__inner">
        <span>VR GAME MARKETPLACE</span>
        <span>VR GAME MARKETPLACE</span>
        <span>VR GAME MARKETPLACE</span>
        <span>VR GAME MARKETPLACE</span>
        <span>VR GAME MARKETPLACE</span>
      </div>
    </div>
    <div ref="marqueeElementRef2" class="marquee-line marquee-line-2">
      <div class="marquee-line__inner">
        <span>CRAFTY METAVERSE ✦ CRAFTY METAVERSE ✦</span>
        <span>CRAFTY METAVERSE ✦ CRAFTY METAVERSE ✦</span>
        <span>CRAFTY METAVERSE ✦ CRAFTY METAVERSE ✦</span>
        <span>CRAFTY METAVERSE ✦ CRAFTY METAVERSE ✦</span>
        <span>CRAFTY METAVERSE ✦ CRAFTY METAVERSE ✦</span>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { intersectionObserver } from '@/composables/IntersectionObserver';

const marqueeElementRef1 = ref(null);
const marqueeElementRef2 = ref(null);

intersectionObserver(marqueeElementRef1, (entry) => {
  if (entry.isIntersecting) {
    marqueeElementRef1.value.classList.add('animated');
  } else {
    marqueeElementRef1.value.classList.remove('animated');
  }
});

intersectionObserver(marqueeElementRef2, (entry) => {
  if (entry.isIntersecting) {
    marqueeElementRef2.value.classList.add('animated');
  } else {
    marqueeElementRef2.value.classList.remove('animated');
  }
});
</script>

<style>
@import './Marquee.scss';
</style>
