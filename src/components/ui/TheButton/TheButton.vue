<template>
  <button class="button">
    {{ $props.text }}
  </button>
</template>

<script setup>
const props = defineProps({ text: String })
</script>

<style>
@import './TheButton.scss';
</style>
