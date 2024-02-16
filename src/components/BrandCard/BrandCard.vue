<template>
  <div
    ref="card"
    class="brand-card"
    @mousemove="handleMouseMove"
    @mouseleave="handleMouseLeave"
  >
    <img class="brand-card__image" :src="image" alt="" />
    <slot></slot>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const card = ref(null);

const props = defineProps({
  image: Object,
  blur: Object,
});

const handleMouseMove = (event) => {
  const { clientWidth, clientHeight } = card.value;
  const centerX = clientWidth / 2;
  const centerY = clientHeight / 2;
  const mouseX = event.clientX - card.value.getBoundingClientRect().left;
  const mouseY = event.clientY - card.value.getBoundingClientRect().top;
  const rotateY = 30 * (mouseX / clientWidth - 0.5);
  const rotateX = -30 * (mouseY / clientHeight - 0.5);

  card.value.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
};

const handleMouseLeave = () => {
  card.value.style.transform =
    'perspective(1000px) rotateX(0deg) rotateY(0deg)';
};
</script>

<style>
@import './BrandCard.scss';
</style>
