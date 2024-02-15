<template>
  <section class="team-section">
    <img
      class="team-section__background"
      src="@/assets/images/OurTeamSection/background.png"
      alt=""
    />
    <div class="team-section__container">
      <div class="team-section__blur team-section__blur-1">
        <img
          src="@/assets/images/OurTeamSection/blur-1.svg"
          loading="lazy"
          alt="Blur"
        />
      </div>
      <div class="team-section__blur team-section__blur-2">
        <img
          src="@/assets/images/OurTeamSection/blur-2.svg"
          loading="lazy"
          alt="Blur"
        />
      </div>
      <div class="team-section__blur team-section__blur-3">
        <img
          src="@/assets/images/OurTeamSection/blur-3.svg"
          loading="lazy"
          alt="Blur"
        />
      </div>
      <SectionTitle
        title="Our Team"
        titleDescription="WHO WE ARE"
        data-aos="fade-up"
      />
      <div class="team-section__team" data-aos="fade-right">
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
import User1 from '@/assets/images/OurTeamSection/User1.webp'
import User2 from '@/assets/images/OurTeamSection/User2.webp'
import User3 from '@/assets/images/OurTeamSection/User3.webp'
import User4 from '@/assets/images/OurTeamSection/User4.webp'
const props = defineProps({
  titleDescription: String,
  title: String,
})
</script>

<style>
@import '@/scss/components/teamSection.scss';
</style>
