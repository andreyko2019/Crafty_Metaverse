<template>
  <section class="social-media-section">
    <img
      class="social-media-section__background"
      src="@/assets/images/socialMediaBackground.png"
      alt="Background"
    />
    <div class="social-media-section__container">
      <SectionTitle title="Social media" titleDescription="Questions" />
      <Swiper class="social-media-section__swiper" v-bind="swiperOptions">
        <SwiperSlide
          class="social-media-section__swiper-slide social-media-section__swiper-slide_twitter"
          ><a
            class="social-media-section__link social-media-section__link"
            href="https://twitter.com/"
          >
            <div class="social-media-section__link-img-container">
              <img
                class="social-media-section__link-img"
                src="@/assets/images/Twitter.png"
                alt=""
              /></div></a
        ></SwiperSlide>
        <SwiperSlide
          class="social-media-section__swiper-slide social-media-section__swiper-slide_telegram"
          ><a
            class="social-media-section__link"
            href="https://web.telegram.org/"
          >
            <div class="social-media-section__link-img-container">
              <img
                class="social-media-section__link-img"
                src="@/assets/images/Telegram.png"
                alt=""
              /></div></a
        ></SwiperSlide>
        <SwiperSlide
          class="social-media-section__swiper-slide social-media-section__swiper-slide_youtube"
          ><a
            class="social-media-section__link social-media-section__link"
            href="https://www.youtube.com/"
          >
            <div class="social-media-section__link-img-container">
              <img
                class="social-media-section__link-img"
                src="@/assets/images/YouTube.png"
                alt=""
              /></div></a
        ></SwiperSlide>
        <SwiperSlide
          class="social-media-section__swiper-slide social-media-section__swiper-slide_discord"
          ><a
            class="social-media-section__link social-media-section__link"
            href="https://discord.com/"
            ><div class="social-media-section__link-img-container">
              <img
                class="social-media-section__link-img"
                src="@/assets/images/Discord.png"
                alt=""
              /></div></a
        ></SwiperSlide>
      </Swiper>
    </div>
  </section>
</template>

<script setup>
import SectionTitle from '@/components/SectionTitle.vue'
import { Swiper, SwiperSlide } from 'swiper/vue'
import 'swiper/swiper-bundle.css'

const swiperOptions = {
  breakpoints: {
    0: {
      slidesPerView: 1,
      allowTouchMove: true,
    },
    390: {
      slidesPerView: 'auto',
    },
    1024: {
      slidesPerView: 4,
      allowTouchMove: false,
    },
  },
}
</script>

<style lang="scss">
@import '@/scss/socialMedia.scss';
</style>
