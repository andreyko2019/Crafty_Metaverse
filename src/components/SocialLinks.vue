<template>
  <div class="socialLinks-block">
    <a v-if="facebookLink" class="socialLinks-block__link" :href="facebookLink"
      ><FacebookIcon class="socialLinks-block__link-icon"
    /></a>
    <a v-if="twitterLink" class="socialLinks-block__link" :href="twitterLink"
      ><TwitterIcon class="socialLinks-block__link-icon"
    /></a>
    <a
      v-if="instagramLink"
      class="socialLinks-block__link"
      :href="instagramLink"
      ><InstagramIcon class="socialLinks-block__link-icon"
    /></a>
    <a v-if="linkedinLink" class="socialLinks-block__link" :href="linkedinLink"
      ><LinkedinIcon class="socialLinks-block__link-icon"
    /></a>
  </div>
</template>

<script setup>
import FacebookIcon from '@/components/icons/FacebookIcon.vue'
import TwitterIcon from '@/components/icons/TwitterIcon.vue'
import InstagramIcon from '@/components/icons/InstagramIcon.vue'
import LinkedinIcon from '@/components/icons/LinkedinIcon.vue'

const props = defineProps({
  facebookLink: String,
  twitterLink: String,
  instagramLink: String,
  linkedinLink: String,
})
</script>

<style scoped>
@import '@/scss/components/socialLinks.scss';
</style>
