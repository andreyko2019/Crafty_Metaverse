<template>
  <button class="button">
    {{ $props.text }}
  </button>
</template>

<script setup>
  defineProps({ text: String })
</script>

<style lang="scss">
  @import './TheButton.scss';
</style>
