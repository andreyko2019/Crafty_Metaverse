<template>
  <div class="brand-component">
    <BrandCard :image="image" />
    <div class="our-brands-section__blur our-brands-section__blur-3">
      <img :src="blur" loading="lazy" alt="Blur" />
    </div>
    <div class="brand-component__text-block">
      <p class="brand-component__text-block-title">
        {{ props.title }}
      </p>
      <p class="brand-component__text-block-description">
        {{ props.description }}
      </p>
    </div>
  </div>
</template>

<script setup>
import BrandCard from '../BrandCard/BrandCard.vue';

const props = defineProps({
  image: Object,
  blur: Object,
  title: String,
  description: String,
});
</script>

<style>
@import './BrandComponent.scss';
</style>
