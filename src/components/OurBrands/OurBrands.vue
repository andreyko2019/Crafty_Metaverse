<template>
  <section class="our-brands-section" :style="backgroundStyle">
    <img
      class="our-brands-section__background"
      src="@/assets/images/background-lines.png"
      alt="Background"
    />

    <div class="our-brands-section__container">
      <SectionTitle title="Our brands" titleDescription="No problem" />
      <div class="our-brands-section__cards">
        <BrandComponent
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
import Card1 from '@/assets/images/OurBrandsSection/card-1.png'
import Card2 from '@/assets/images/OurBrandsSection/card-2.png'
import Card3 from '@/assets/images/OurBrandsSection/card-3.png'
import BackgroundLines from '@/assets/images/background-lines.png'

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
    title: 'Brand Title 2',
    image: Card2,
    description:
      'Crafty Metaverse presents a Virtual Arts Studio where you can enhance your creativity by creating digital arts inspired by your game. A virtual marketplace to allow the users to trade and stake our $CMETA token and their NFTs. Negotiate with the digital avatars of other users to sell your NFTs at the best prices and generate passive income while playing',
  },
  {
    title: 'Brand Title 3',
    image: Card3,
    description:
      'SANKOFA($KOFA) is an Ethereum sidechain that will be created with Guardians of Lost Worlds community in mind. LYQUID, the team behind Guardians of Lost Worlds, will build a reliable, fast and cheap network that could cater to the demands of the game.',
  },
]
</script>

<style>
@import './OurBrands.scss';
</style>
