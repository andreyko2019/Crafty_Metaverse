<template>
  <div class="marquee-line-block marquee-line-block-2">
    <div ref="marqueeElementRef3" class="marquee-line marquee-line-2">
      <div class="marquee-line__inner">
        <span
          >CRAFTY METAVERSE <StarIcon class="star-icon" />CRAFTY METAVERSE
          <StarIcon class="star-icon"
        /></span>
        <span
          >CRAFTY METAVERSE <StarIcon class="star-icon" />CRAFTY METAVERSE
          <StarIcon class="star-icon"
        /></span>
        <span
          >CRAFTY METAVERSE <StarIcon class="star-icon" />CRAFTY METAVERSE
          <StarIcon class="star-icon"
        /></span>
        <span
          >CRAFTY METAVERSE <StarIcon class="star-icon" />CRAFTY METAVERSE
          <StarIcon class="star-icon"
        /></span>
        <span
          >CRAFTY METAVERSE <StarIcon class="star-icon" />CRAFTY METAVERSE
          <StarIcon class="star-icon"
        /></span>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { intersectionObserver } from '@/composables/IntersectionObserver';
import StarIcon from '@/components/icons/MarqueeIcon.vue';

const marqueeElementRef3 = ref(null);

intersectionObserver(marqueeElementRef3, (entry) => {
  if (entry.isIntersecting) {
    marqueeElementRef3.value.classList.add('animated');
  } else {
    marqueeElementRef3.value.classList.remove('animated');
  }
});
</script>

<style>
@import './Marquee.scss';
</style>
