<template>
  <header class="header">
    <div class="header__container">
      <a class="header__logo" href="#">
        <LogoIcon class="header__logo-icon" />
      </a>
      <button
        :class="{ 'header__burger-btn_active': isMenuOpen }"
        class="header__burger-btn"
        @click="openBurgerMenu"
      >
        <span></span>
      </button>
      <div :class="{ menu_active: isMenuOpen }" class="header__menu menu">
        <img
          class="menu__background"
          src="@/assets/images/menu-background.jpg"
          alt="Logo"
        />
        <nav class="menu__navigation">
          <a
            v-for="(link, index) in links"
            :key="index"
            class="menu__navigation-link"
            :href="link.url"
            >{{ link.name }}</a
          >
        </nav>
      </div>
    </div>
  </header>
</template>

<script setup>
import { ref } from 'vue'
import LogoIcon from '@/components/icons/LogoIcon.vue'
import { disablePageScroll, enablePageScroll } from 'scroll-lock'

const isMenuOpen = ref(false)
const links = [
  { name: 'Home', url: '#' },
  { name: 'About Us', url: '#about' },
  { name: 'White paper', url: '#whitepaper' },
  { name: 'Tokenomics', url: '#tokenomics' },
  { name: 'Road Map', url: '#roadmap' },
  { name: 'How to buy', url: '#howtobuy' },
  { name: 'Buy', url: '#buy' },
]

function openBurgerMenu() {
  isMenuOpen.value = !isMenuOpen.value
  if (isMenuOpen.value) {
    disablePageScroll()
  } else {
    enablePageScroll()
  }
}
</script>

<style>
@import '@/scss/components/header.scss';
</style>
