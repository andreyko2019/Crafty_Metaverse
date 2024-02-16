<template>
  <section class="faq-section" id="howtobuy">
    <div class="faq-section__container">
      <div
        v-for="(blurImg, index) in blurImages"
        :key="`blur-${index}`"
        class="faq-section__blur"
      >
        <img :src="blurImg" loading="lazy" :alt="`Blur ${index}`" />
      </div>

      <div class="faq-section__background-block">
        <div class="faq-section__background-block-border"></div>

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
  import Blur1 from '@/assets/images/FAQSection/blur-1.webp'
  import Blur2 from '@/assets/images/FAQSection/blur-1.webp'

  const blurImages = [Blur1, Blur2]

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
  @import url('./FAQSection.scss');
</style>
