<template>
  <section class="main-section" id="home">
    <img
      class="main-section__background"
      src="@/assets/images/mainSection/background.webp"
      loading="eager"
      alt="Background"
    />

    <div class="main-section__container">
      <div class="main-section__text-block">
        <p class="main-section__text-block-sub-title">Crafty Metaverse</p>

        <h1 class="main-section__text-block-title">
          A SHARED, IMMERSIVE MULTI-BLOCKCHAIN BASED
          <span class="main-section__star main-section__star-1">
            <StarIcon class="main-section__star-icon" />
          </span>
          METAVERSE
          <span class="main-section__star main-section__star-2">
            <StarIcon class="main-section__star-icon" />
          </span>
          ECOSYSTEM
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
  import StarIcon from '@/components/icons/StarIcon.vue'
</script>

<style>
  @import url('./MainSection.scss');
</style>
