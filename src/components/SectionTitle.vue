<template>
  <div class="section-title-block">
    <p class="section-title-block__description">{{ props.titleDescription }}</p>
    <h2 class="section-title-block__title">{{ props.title }}</h2>
  </div>
</template>

<script setup>
const props = defineProps({
  titleDescription: String,
  title: String,
})
</script>

<style scoped>
@import '@/scss/components/sectionTitle.scss';
</style>
