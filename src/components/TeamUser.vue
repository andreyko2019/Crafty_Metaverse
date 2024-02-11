<template>
  <div class="team-user">
    <div class="team-user__img-container">
      <img class="team-user__img" :src="imageUrl" :alt="props.name" />
    </div>
    <div class="team-user__info">
      <p class="team-user__info-position">{{ props.position }}</p>
      <p class="team-user__info-name">{{ props.name }}</p>
      <SocialLinks
        :facebook-link="facebookLink"
        :twitterLink="twitterLink"
        :instagramLink="instagramLink"
        :linkedinLink="linkedinLink"
      />
    </div>
  </div>
</template>

<script setup>
import SocialLinks from './SocialLinks.vue'

const props = defineProps({
  position: String,
  name: String,
  facebookLink: String,
  twitterLink: String,
  instagramLink: String,
  linkedinLink: String,
  imageUrl: Object,
})
</script>

<style scoped>
@import '@/scss/components/teamUser.scss';
</style>
