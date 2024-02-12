<template>
  <section class="explore-now-section" id="buy">
    <div class="explore-now-section__container">
      <div class="explore-now-section__text-block" :style="backgroundStyle">
        <h2 class="explore-now-section__text-block-title">Explore Now</h2>
        <p class="explore-now-section__text-block-description-2">
          Each human will control his/her own digital identity in the Crafty
          Metaverse space.
        </p>
        <TheButton
          class="explore-now-section__text-block-button"
          text="Invest Now"
        />
        <p class="explore-now-section__text-block-description">
          A virtual marketplace to allow the users to trade and stake our $CMETA
          token and their NFTs. Negotiate with the digital avatars of other
          users to sell your NFTs at the best prices and generate passive income
          while playing.
        </p>
      </div>
      <div class="explore-now-section__image-block">
        <img
          class="explore-now-section__image"
          src="@/assets/images/ExploreNowSection/exploreImage.png"
          alt=""
        />
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, computed } from 'vue'
import TheButton from '@/components/ui/TheButton/TheButton.vue'
import BackgroundLines from '@/assets/images/background-lines.png'

const imageUrl = ref(BackgroundLines)

const backgroundStyle = computed(() => ({
  backgroundImage: `linear-gradient(
                      -90deg, 
                      rgba(58, 78, 255, 0) 0%, 
                      rgba(156, 58, 255, 0.14) 100%
                    ), url(${imageUrl.value})`,
}))
</script>

<style>
@import './ExploreNowSection.scss';
</style>
