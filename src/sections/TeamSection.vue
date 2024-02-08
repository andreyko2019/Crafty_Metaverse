<template>
  <section class="team-section">
    <div class="team-section__container">
      <SectionTitle title="Our Team" titleDescription="WHO WE ARE" />
      <div class="team-section__team">
        <TeamUser
          class="team-section__team-user"
          position="CTO/Creative Director"
          name="STAN"
          :imageUrl="User1"
          facebookLink="https://crafty-metaverse.netlify.app/"
          twitterLink="https://crafty-metaverse.netlify.app/"
          instagramLink="https://crafty-metaverse.netlify.app/"
          linkedinLink="https://crafty-metaverse.netlify.app/"
        />
        <TeamUser
          class="team-section__team-user"
          position="Chief Financial Officer"
          name="Kwasi"
          :imageUrl="User2"
          facebookLink="https://crafty-metaverse.netlify.app/"
          twitterLink="https://crafty-metaverse.netlify.app/"
          instagramLink="https://crafty-metaverse.netlify.app/"
          linkedinLink="https://crafty-metaverse.netlify.app/"
        />
        <TeamUser
          class="team-section__team-user"
          position="COO/Marketing Director"
          name="Kwame"
          :imageUrl="User3"
          facebookLink="https://crafty-metaverse.netlify.app/"
          twitterLink="https://crafty-metaverse.netlify.app/"
          instagramLink="https://crafty-metaverse.netlify.app/"
          linkedinLink="https://crafty-metaverse.netlify.app/"
        />
        <TeamUser
          class="team-section__team-user"
          position="CEO/Developer"
          name="Kojo"
          :imageUrl="User4"
          facebookLink="https://crafty-metaverse.netlify.app/"
          twitterLink="https://crafty-metaverse.netlify.app/"
          instagramLink="https://crafty-metaverse.netlify.app/"
          linkedinLink="https://crafty-metaverse.netlify.app/"
        />
      </div>
    </div>
  </section>
</template>

<script setup>
import SectionTitle from '@/components/SectionTitle.vue'
import TeamUser from '@/components/TeamUser.vue'
import User1 from '@/assets/images/User1.png'
import User2 from '@/assets/images/User2.png'
import User3 from '@/assets/images/User3.png'
import User4 from '@/assets/images/User4.png'
const props = defineProps({
  titleDescription: String,
  title: String,
})
</script>

<style>
@import '@/scss/components/teamSection.scss';
</style>
