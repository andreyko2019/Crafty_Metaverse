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
    </div>
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
            <img
              class="social-media-section__link-img_mobile"
              :src="platform.mobileImgSrc"
              :alt="platform.name"
            />
          </div>
        </a>
      </SwiperSlide>
    </Swiper>
  </section>
</template>

<script setup>
import TwitterImage from '@/assets/images/SocialMediaSection/Twitter.png'
import TelegramImage from '@/assets/images/SocialMediaSection/Telegram.png'
import YoutubeImage from '@/assets/images/SocialMediaSection/YouTube.png'
import DiscordImage from '@/assets/images/SocialMediaSection/Discord.png'
import TwitterMobileImage from '@/assets/images/SocialMediaSection/TwitterMobile.png'
import TelegramMobileImage from '@/assets/images/SocialMediaSection/TelegramMobile.png'
import YoutubeMobileImage from '@/assets/images/SocialMediaSection/YouTubeMobile.png'
import DiscordMobileImage from '@/assets/images/SocialMediaSection/DiscordMobile.png'

import SectionTitle from '@/components/SectionTitle.vue'
import { Swiper, SwiperSlide } from 'swiper/vue'
import 'swiper/swiper-bundle.css'

const swiperOptions = {
  breakpoints: {
    0: {
      slidesPerView: 'auto',
      allowTouchMove: true,
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
    mobileImgSrc: TwitterMobileImage,
  },
  {
    name: 'Telegram',
    url: 'https://web.telegram.org/',
    imgSrc: TelegramImage,
    mobileImgSrc: TelegramMobileImage,
  },
  {
    name: 'YouTube',
    url: 'https://www.youtube.com/',
    imgSrc: YoutubeImage,
    mobileImgSrc: YoutubeMobileImage,
  },
  {
    name: 'Discord',
    url: 'https://discord.com/',
    imgSrc: DiscordImage,
    mobileImgSrc: DiscordMobileImage,
  },
]
</script>

<style lang="scss">
@import '@/scss/socialMedia.scss';
</style>
