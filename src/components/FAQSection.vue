<template>
  <section class="faq-section">
    <div class="faq-section__container">
      <!--
      <div class="faq-section__blur faq-section__blur-1"></div>
      <div class="faq-section__blur faq-section__blur-2"></div>
      -->
      <div class="faq-section__background-block">
        <SectionTitle
          class="faq-section__title-block"
          titleDescription="Questions"
          title="FAQ"
        />
        <div class="faq-section__accordeons-list">
          <FAQAccordeon
            v-for="(item, index) in faqAccordeonsList"
            :key="index"
            :item="item"
            :index="index"
            :isOpen="openIndex === index"
            @update:open="openIndex = $event === openIndex ? null : $event"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'
import SectionTitle from '@/components/SectionTitle.vue'
import FAQAccordeon from '@/components/ui/FAQAccordeon.vue'

const faqAccordeonsList = ref([
  {
    question: 'What is CMETA and which tokens we use?',
    answer:
      'Crafty Metaverse is a blockchain-based virtual reality metaverse platform focused on building a decentralized, persistent online 3D/VR environment that will allow interactions among humans in the form of Avatars.',
  },
  {
    question: 'What is CMETA and which tokens we use?',
    answer:
      'Crafty Metaverse is a blockchain-based virtual reality metaverse platform focused on building a decentralized, persistent online 3D/VR environment that will allow interactions among humans in the form of Avatars.',
  },
  {
    question: 'What is CMETA and which tokens we use?',
    answer:
      'Crafty Metaverse is a blockchain-based virtual reality metaverse platform focused on building a decentralized, persistent online 3D/VR environment that will allow interactions among humans in the form of Avatars.',
  },
  {
    question: 'What is CMETA and which tokens we use?',
    answer:
      'Crafty Metaverse is a blockchain-based virtual reality metaverse platform focused on building a decentralized, persistent online 3D/VR environment that will allow interactions among humans in the form of Avatars.',
  },
  {
    question: 'What is CMETA and which tokens we use?',
    answer:
      'Crafty Metaverse is a blockchain-based virtual reality metaverse platform focused on building a decentralized, persistent online 3D/VR environment that will allow interactions among humans in the form of Avatars.',
  },
  {
    question: 'What is CMETA and which tokens we use?',
    answer:
      'Crafty Metaverse is a blockchain-based virtual reality metaverse platform focused on building a decentralized, persistent online 3D/VR environment that will allow interactions among humans in the form of Avatars.',
  },
])
const openIndex = ref(null)
</script>

<style scoped>
@import '@/scss/components/faqSection.scss';
</style>
