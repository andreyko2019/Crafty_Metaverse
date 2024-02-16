<template>
  <section class="social-media-section">
    <img
      class="social-media-section__background"
      src="@/assets/images/socialMediaBackground.png"
      alt="Background"
    />

    <div class="social-media-section__container">
      <div
        v-for="(blurImg, index) in blurImages"
        :key="`blur-${index}`"
        class="social-media-section__blur"
      >
        <img :src="blurImg" loading="lazy" :alt="`Blur ${index}`" />
      </div>

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
              loading="lazy"
              :src="platform.imgSrc"
              :alt="platform.name"
            />

            <img
              class="social-media-section__link-img_mobile"
              loading="lazy"
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
  import TwitterImage from '@/assets/images/SocialMediaSection/Twitter.webp'
  import TelegramImage from '@/assets/images/SocialMediaSection/Telegram.webp'
  import YoutubeImage from '@/assets/images/SocialMediaSection/YouTube.webp'
  import DiscordImage from '@/assets/images/SocialMediaSection/Discord.webp'
  import TwitterMobileImage from '@/assets/images/SocialMediaSection/TwitterMobile.webp'
  import TelegramMobileImage from '@/assets/images/SocialMediaSection/TelegramMobile.webp'
  import YoutubeMobileImage from '@/assets/images/SocialMediaSection/YouTubeMobile.webp'
  import DiscordMobileImage from '@/assets/images/SocialMediaSection/DiscordMobile.webp'
  import Blur1 from '@/assets/images/SocialMediaSection/blur-1.webp'
  import Blur2 from '@/assets/images/SocialMediaSection/blur-2.webp'
  import Blur3 from '@/assets/images/SocialMediaSection/blur-3.webp'
  import SectionTitle from '@/components/SectionTitle.vue'
  import { Swiper, SwiperSlide } from 'swiper/vue'
  import 'swiper/swiper-bundle.css'

  const swiperOptions = {
    initialSlide: 0,
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

  const blurImages = [Blur1, Blur2, Blur3]

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
  @import './SocialMediaSection.scss';
</style>
