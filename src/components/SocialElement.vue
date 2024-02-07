<template>
  <div class="social-element">
    <div class="social-element__inner">
      <component :is="props.layoutComponent" class="social-element__layout" />
      <div class="social-element__second-inner">
        <SocialLayout class="social-element__second-layout" :color="color" />
        <div class="social-element__thrid-inner">
          <SocialLayout class="social-element__thrid-layout" />
          <component :is="props.iconComponent" />
          <p class="social-element__name">{{ props.socialName }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import SocialLayout from '@/components/icons/SocialLayout.vue'

const props = defineProps({
  layoutComponent: Object,
  iconComponent: Object,
  socialName: String,
  color: String,
})
</script>

<style scoped>
@import '@/scss/socialElement.scss';
</style>
