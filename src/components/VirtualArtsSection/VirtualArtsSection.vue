<template>
  <section
    class="virtual-arts-section"
    data-aos="fade-up"
    data-aos-duration="3000"
  >
    <div class="virtual-arts-section__container">
      <img
        class="virtual-arts-section__background"
        src="@/assets/images/VirtualArtsSection/virtuaImage.webp"
        alt="Background"
      />
      <div class="virtual-arts-section__text-block">
        <h2 class="virtual-arts-section__text-block-title">
          Virtual Arts Studio
        </h2>
        <TheButton
          class="virtual-arts-section__text-block-button"
          text="Create"
        />
        <p class="virtual-arts-section__text-block-description">
          Virtual Arts Studio where you can enhance your creativity by creating
          digital arts inspired by your game
        </p>
      </div>
    </div>
  </section>
</template>

<script setup>
import TheButton from '@/components/ui/TheButton/TheButton.vue'
</script>

<style>
@import './VirtualArtsSection.scss';
</style>
