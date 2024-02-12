<template>
  <section class="roadmap-section" id="roadmap">
    <div class="roadmap-section__container">
      <SectionTitle title="Roadmap" titleDescription="Our Way" />
      <div class="roadmap-section__list">
        <RoadMapComponent
          v-for="(item, index) in roadmapItems"
          class="roadmap-section__element"
          :roadmapItem="item"
        />
      </div>
    </div>
  </section>
</template>

<script setup>
import SectionTitle from '@/components/SectionTitle.vue'
import RoadMapComponent from '../RoadMapComponent/RoadMapComponent.vue'

const roadmapItems = [
  {
    defaultQuantityVisibleElements: 6,
    title: 'Governance Token Launch on BSC ($CMETA)',
    list: [
      {
        event: 'Launch Date: Jan 8th, 2022 Contract Audit',
      },
      {
        event: 'TechAudit Completed on Jan 21st, 2022 5k Telegram members',
      },
      {
        event: '32k Telegram Members.  CG and CMC listings',
      },
      {
        event: 'Application Sent CEX Listings',
      },
      {
        event: 'CoinsBit Listing – Feb 8th . Website Revamp',
      },
      {
        event: 'Contracted UI/UX Developers',
      },
      {
        event: '10K Telegram Members',
      },
      {
        event: '10K Twitter Followers',
      },
      {
        event: 'Contracted UI/UX Developers',
      },
      {
        event: 'Launch Date: Jan 8th, 2022 Contract Audit',
      },
      {
        event: 'TechAudit Completed on Jan 21st, 2022 5k Telegram members',
      },
    ],
  },
  {
    defaultQuantityVisibleElements: 5,
    title: 'CMETA Ecosystem Begins',
    list: [
      {
        event: 'CMETA Staking Release',
      },
      {
        event: 'SANKOFA Sidechain DEV Starts ($KOFA)',
        subItems: [
          { event: 'CEX Listings and Marketing' },
          { event: 'Governance Token Launch on SOL ($CMETA)' },
        ],
      },
      {
        event: 'Bridge BSC, ETH Smart Contracts to Solana Contract',
        subItems: [{ event: 'Social Media Marketing Pushü' }],
      },
      {
        event: '10K Telegram Members',
      },
      {
        event: '10K Twitter Followers',
      },
      {
        event: 'Contracted UI/UX Developers',
      },
      {
        event: 'Launch Date: Jan 8th, 2022 Contract Audit',
      },
      {
        event: 'TechAudit Completed on Jan 21st, 2022 5k Telegram members',
      },
    ],
  },
  {
    defaultQuantityVisibleElements: 3,
    title: 'Guardians of Lost Worlds Released to Public (PC)',
    list: [
      {
        event: 'Implement In-Game Staking ($KOFA Rewards)',
      },
      {
        event: 'In-Game NFT Released',
        subItems: [{ event: 'SANKOFA Sidechain on Test Net' }],
      },
      {
        event: 'Fiat On-Ramp Added',
        subItems: [
          { event: 'Gameplay Battle Mode Introduced' },
          { event: 'Marketplace Introduced' },
          { event: 'CEX Listings and Marketing' },
        ],
      },
    ],
  },
  {
    defaultQuantityVisibleElements: 2,
    title: 'SANKOFA Mainnet Launch',
    list: [
      {
        event: ' Migrate Guardians of Lost Worlds to SANKOFA Sidechain',
        subItems: [
          { event: 'CEX Listings & Marketing' },
          { event: 'Virtual Arts Studio Introduced' },
          { event: 'Mobile Beta Gameplay Revealed' },
          { event: 'CMETA DEX Introduced: FORGE' },
        ],
      },
      {
        event: 'Multi-Network Implementation',
        subItems: [{ event: 'VR Game Dev Begins' }],
      },
    ],
  },
]
</script>

<style>
@import './RoadMapSection.scss';
</style>
