<template>
  <div class="faq-accordeon">
    <div
      v-for="(item, index) in faqItems"
      :key="index"
      class="faq-accordeon__item"
    >
      <div class="faq-accordeon__item-header" @click="toggle(index)">
        <p class="faq-accordeon__item-header-question">{{ item.question }}</p>
        <div
          :class="{
            'faq-accordeon__item-header-button_close': isItemOpen(index),
          }"
          class="faq-accordeon__item-header-button"
        ></div>
      </div>
      <transition
        name="faq-accordeon__item-content"
        enter-active-class="faq-accordeon__item-content-enter-active"
        leave-active-class="faq-accordeon__item-content-leave-active"
        enter-from-class="faq-accordeon__item-content-enter-from"
        enter-to-class="faq-accordeon__item-content-enter-to"
        leave-from-class="faq-accordeon__item-content-leave-from"
        leave-to-class="faq-accordeon__item-content-leave-to"
      >
        <div v-show="isItemOpen(index)" class="faq-accordeon__item-content">
          {{ item.answer }}
        </div>
      </transition>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
const faqItems = ref([
  {
    question: '1. What is CMETA and which tokens we use?',
    answer:
      'Crafty Metaverse is a blockchain-based virtual reality metaverse platform focused on building a decentralized, persistent online 3D/VR environment that will allow interactions among humans in the form of Avatars.',
  },
  {
    question: '2. What is CMETA and which tokens we use?',
    answer:
      'Crafty Metaverse is a blockchain-based virtual reality metaverse platform focused on building a decentralized, persistent online 3D/VR environment that will allow interactions among humans in the form of Avatars.',
  },
  {
    question: '3. What is CMETA and which tokens we use?',
    answer:
      'Crafty Metaverse is a blockchain-based virtual reality metaverse platform focused on building a decentralized, persistent online 3D/VR environment that will allow interactions among humans in the form of Avatars.',
  },
  {
    question: '4. What is CMETA and which tokens we use?',
    answer:
      'Crafty Metaverse is a blockchain-based virtual reality metaverse platform focused on building a decentralized, persistent online 3D/VR environment that will allow interactions among humans in the form of Avatars.',
  },
  {
    question: '5. What is CMETA and which tokens we use?',
    answer:
      'Crafty Metaverse is a blockchain-based virtual reality metaverse platform focused on building a decentralized, persistent online 3D/VR environment that will allow interactions among humans in the form of Avatars.',
  },
  {
    question: '6. What is CMETA and which tokens we use?',
    answer:
      'Crafty Metaverse is a blockchain-based virtual reality metaverse platform focused on building a decentralized, persistent online 3D/VR environment that will allow interactions among humans in the form of Avatars.',
  },
])

const openIndex = ref(null)
const toggle = index => {
  openIndex.value = openIndex.value === index ? null : index
}

const isItemOpen = index => {
  return openIndex.value === index
}

const enter = (el, done) => {
  el.style.height = '0'
  el.style.opacity = '0'
  done()
}

const afterEnter = el => {
  el.style.height = ''
  el.style.opacity = ''
}

const leave = (el, done) => {
  el.style.height = `${el.scrollHeight}px`
  el.style.opacity = '1'
  getComputedStyle(el).height
  done()
}

const afterLeave = el => {
  el.style.height = ''
  el.style.opacity = ''
}
</script>

<style>
@import '@/scss/components/ui/faqAccordeon.scss';
</style>
