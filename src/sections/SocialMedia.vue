<template>
  <section class="social-media-section">
    <div class="social-media-section__container">
      <SectionTitle title="Social media" titleDescription="Questions" />
      <Swiper
        class="social-media-section__swiper"
        :slidesPerView="4"
        spaceBetween="0"
        :allowTouchMove="false"
      >
        <SwiperSlide class="social-media-section__swiper-slide"
          ><a class="social-media-section__link" href="https://twitter.com/"
            ><img src="@/assets/images/Twitter.png" alt="" /></a
        ></SwiperSlide>
        <SwiperSlide
          ><a
            class="social-media-section__link"
            href="https://web.telegram.org/"
            ><img src="@/assets/images/Telegram.png" alt="" /></a
        ></SwiperSlide>
        <SwiperSlide
          ><a class="social-media-section__link" href="https://www.youtube.com/"
            ><img src="@/assets/images/YouTube.png" alt="" /></a
        ></SwiperSlide>
        <SwiperSlide
          ><a class="social-media-section__link" href="https://discord.com/"
            ><img src="@/assets/images/Discord.png" alt="" /></a
        ></SwiperSlide>
      </Swiper>
    </div>
  </section>
</template>

<script setup>
import SectionTitle from '@/components/SectionTitle.vue'
import { Swiper, SwiperSlide } from 'swiper/vue'
import 'swiper/swiper-bundle.css'
</script>

<style lang="scss">
@import '@/scss/socialMedia.scss';
</style>
