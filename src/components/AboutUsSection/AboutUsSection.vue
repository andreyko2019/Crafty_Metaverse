<template>
  <section class="about-us-section" id="about">
    <img
      class="about-us-section__background"
      src="@/assets/images/AboutUsSection/background.webp"
      alt="Background"
    />

    <div class="about-us-section__container">
      <div class="about-us-section__blur-1">
        <img src="@/assets/images/AboutUsSection/blur-1.svg" alt="Blur" />
      </div>

      <div class="about-us-section__text-block">
        <p class="about-us-section__text-block-sub-title">Profile</p>

        <h2 class="about-us-section__text-block-title">About Us</h2>

        <Swiper
          class="about-us-section__text-block-swiper"
          v-bind="swiperOptions"
        >
          <SwiperSlide
            class="about-us-section__text-block-swiper-slide"
            v-for="slide in slides"
            :key="slide.id"
          >
            <p class="about-us-section__text-block-description">
              {{ slide.description }}
            </p>
          </SwiperSlide>

          <div class="swiper-pagination">
            <span class="swiper-pagination__title">1 CHAPTER</span>

            <span class="swiper-pagination__title-2">2</span>
          </div>
        </Swiper>
      </div>
    </div>
  </section>
</template>

<script setup>
  import { Swiper, SwiperSlide } from 'swiper/vue'
  import SwiperCore, { Pagination } from 'swiper'
  import 'swiper/swiper-bundle.css'

  SwiperCore.use([Pagination])

  const slides = [
    {
      id: 1,
      title: 'CHAPTER 1',
      description:
        'Crafty Metaverse is a multi-blockchain based virtual reality metaverse platform to develop the most immersive, imaginative, and addictive gaming experiences. We are providing our gaming community with the near-real-world experience while using their digital avatars. Our ecosystem will be a futuristic, decentralized, and persistent 3D virtual metaverse gaming platform especially for crypto enthusiasts, gamers, artists, and metaverse fans.',
    },
    {
      id: 2,
      title: 'CHAPTER 2',
      description:
        'Another description for the second chapter, continuing the narrative or providing additional information about the Crafty Metaverse platform, its goals, technology, or any other relevant aspects that contribute to the understanding of the project and its ecosystem.',
    },
  ]

  const swiperOptions = {
    pagination: {
      el: '.swiper-pagination',
      type: 'progressbar',
      slidesPerView: '1',
      allowTouchMove: true,
    },
  }
</script>

<style>
  @import url('./AboutUsSection.scss');
</style>
