<template>
  <section class="our-brands-section" :style="backgroundStyle">
    <div class="our-brands-section__container">
      <div class="our-brands-section__blur our-brands-section__blur-1">
        <img
          src="@/assets/images/OurBrandsSection/blur-1.svg"
          loading="lazy"
          alt="Blur"
        />
      </div>
      <div class="our-brands-section__blur our-brands-section__blur-2">
        <img
          src="@/assets/images/OurBrandsSection/blur-2.svg"
          loading="lazy"
          alt="Blur"
        />
      </div>
      <div class="our-brands-section__blur our-brands-section__blur-3">
        <img
          src="@/assets/images/OurBrandsSection/blur-3.svg"
          loading="lazy"
          alt="Blur"
        />
      </div>
      <div class="our-brands-section__blur our-brands-section__blur-4">
        <img
          src="@/assets/images/OurBrandsSection/blur-4.svg"
          loading="lazy"
          alt="Blur"
        />
      </div>
      <SectionTitle
        title="Our brands"
        titleDescription="No problem"
        data-aos="fade-up"
      />
      <div class="our-brands-section__cards">
        <BrandComponent
          data-aos="zoom-in"
          v-for="(brand, index) in brands"
          :key="index"
          :title="brand.title"
          :image="brand.image"
          :description="brand.description"
        />
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, computed } from 'vue'
import SectionTitle from '@/components/SectionTitle.vue'
import BrandComponent from '@/components/BrandComponent/BrandComponent.vue'
import Card1 from '@/assets/images/OurBrandsSection/card-1.webp'
import Card2 from '@/assets/images/OurBrandsSection/card-2.webp'
import Card3 from '@/assets/images/OurBrandsSection/card-3.webp'
import BackgroundLines from '@/assets/images/backgroundLines.svg'

const imageUrl = ref(BackgroundLines)

const backgroundStyle = computed(() => ({
  backgroundImage: `url(${imageUrl.value})`,
}))

const brands = [
  {
    title: 'Guardians of Lost Worlds (P2E Game)',
    image: Card1,
    description:
      'Crafty Metaverse will soon launch Guardians of Lost Worlds, the first cross-chain P2E gaming experience. Our game will be available on multiple blockchains and then eventually on our side chain (SANKOFA). This will give users a seamless gameplay experience with little to no gas fees that allow users to focus on the game rather than worrying about losing their returns.',
  },
  {
    title: 'Crafty Metaverse Ecosystem',
    image: Card2,
    description:
      'Crafty Metaverse presents a Virtual Arts Studio where you can enhance your creativity by creating digital arts inspired by your game. A virtual marketplace to allow the users to trade and stake our $CMETA token and their NFTs. Negotiate with the digital avatars of other users to sell your NFTs at the best prices and generate passive income while playing',
  },
  {
    title: 'SANKOFA',
    image: Card3,
    description:
      'SANKOFA($KOFA) is an Ethereum sidechain that will be created with Guardians of Lost Worlds community in mind. LYQUID, the team behind Guardians of Lost Worlds, will build a reliable, fast and cheap network that could cater to the demands of the game.',
  },
]
</script>

<style>
@import './OurBrands.scss';
</style>
