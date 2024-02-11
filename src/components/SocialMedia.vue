<template>
  <section class="social-media-section">
    <img
      class="social-media-section__background"
      src="@/assets/images/socialMediaBackground.png"
      alt="Background"
    />
    <div class="social-media-section__container">
      <!--<div
        class="social-media-section__blur social-media-section__blur-1"
      ></div>
      <div
        class="social-media-section__blur social-media-section__blur-2"
      ></div>
      <div
        class="social-media-section__blur social-media-section__blur-3"
      ></div>
    -->
      <SectionTitle title="Social media" titleDescription="Questions" />
      <Swiper class="social-media-section__swiper" v-bind="swiperOptions">
        <SwiperSlide
          v-for="(platform, index) in socialMediaPlatforms"
          :key="index"
          class="social-media-section__swiper-slide"
        >
          <a class="social-media-section__link" :href="platform.url">
            <div class="social-media-section__link-img-container">
              <img
                class="social-media-section__link-img"
                :src="platform.imgSrc"
                :alt="platform.name"
              />
            </div>
          </a>
        </SwiperSlide>
      </Swiper>
    </div>
  </section>
</template>

<script setup>
import TwitterImage from '@/assets/images/Twitter.png'
import TelegramImage from '@/assets/images/Telegram.png'
import YoutubeImage from '@/assets/images/YouTube.png'
import DiscordImage from '@/assets/images/Discord.png'

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

const socialMediaPlatforms = [
  {
    name: 'Twitter',
    url: 'https://twitter.com/',
    imgSrc: TwitterImage,
  },
  {
    name: 'Telegram',
    url: 'https://web.telegram.org/',
    imgSrc: TelegramImage,
  },
  {
    name: 'YouTube',
    url: 'https://www.youtube.com/',
    imgSrc: YoutubeImage,
  },
  {
    name: 'Discord',
    url: 'https://discord.com/',
    imgSrc: DiscordImage,
  },
]
</script>

<style lang="scss">
@import '@/scss/socialMedia.scss';
</style>
