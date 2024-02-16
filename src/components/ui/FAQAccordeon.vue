<template>
  <div class="faq-accordeon">
    <div class="faq-accordeon__header" @click="toggle">
      <p class="faq-accordeon__header-question">{{ item.question }}</p>

      <div
        :class="{ 'faq-accordeon__header-button_close': isOpen }"
        class="faq-accordeon__header-button"
      ></div>
    </div>

    <transition name="faq-accordeon__content">
      <div v-show="isOpen" class="faq-accordeon__content">
        <div class="faq-accordeon__content-text">{{ item.answer }}</div>
      </div>
    </transition>
  </div>
</template>

<script setup>
  import { defineProps, defineEmits } from 'vue'

  const props = defineProps({
    item: Object,
    index: Number,
    isOpen: Boolean,
  })
  const emit = defineEmits(['update:open'])

  const toggle = () => {
    emit('update:open', props.index)
  }
</script>

<style>
  @import url('@/scss/components/ui/faqAccordeon.scss');
</style>
