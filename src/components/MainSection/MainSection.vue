<template>
  <section class="main-section">
    <img
      class="main-section__background"
      src="@/assets/images/mainSection/background.png"
      alt="Background"
    />
    <div class="main-section__container">
      <div class="main-section__text-block">
        <p class="main-section__text-block-sub-title">Crafty Metaverse</p>
        <h1 class="main-section__text-block-title">
          A SHARED, IMMERSIVE MULTI-BLOCKCHAIN BASED METAVERSE ECOSYSTEM
        </h1>
        <TheButton
          class="main-section__text-block-button button"
          text="Invest Now"
        />
      </div>
    </div>
  </section>
</template>

<script setup>
import TheButton from '@/components/ui/TheButton/TheButton.vue'
</script>

<style>
@import './MainSection.scss';
</style>
