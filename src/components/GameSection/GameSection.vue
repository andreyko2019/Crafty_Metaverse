<template>
  <section class="game-section" id="whitepaper">
    <img
      class="game-section__background"
      src="@/assets/images/GameSection/background.webp"
      loading="lazy"
      alt="Background"
    />

    <img
      class="game-section__background_mobile"
      src="@/assets/images/GameSection/backgroundMobile.webp"
      loading="lazy"
      alt="Background"
    />

    <div class="game-section__container">
      <div class="game-section__text-block">
        <h2 class="game-section__text-block-title">Game</h2>

        <p class="game-section__text-block-description">
          The space will also offer avid gamers to be a part of an amazing 3D
          gaming experience (details to be published soon).
        </p>

        <p class="game-section__text-block-description-2">
          Crafty Metaverse space will continuously evolve its 3D gaming space to
          include technologies such as VR headsets, augmented reality glasses,
          and game consoles.
        </p>

        <TheButton class="game-section__text-block-button" text="Invest Now" />
      </div>

      <div class="game-section__npc-1">
        <img
          src="@/assets/images/GameSection/npc-1.webp"
          loading="lazy"
          alt="Npc"
        />
      </div>

      <div class="game-section__npc-2">
        <img
          src="@/assets/images/GameSection/npc-2.webp"
          loading="lazy"
          alt="Npc"
        />
      </div>
    </div>
  </section>
</template>

<script setup>
  import TheButton from '@/components/ui/TheButton/TheButton.vue'
</script>

<style>
  @import url('./GameSection.scss');
</style>
