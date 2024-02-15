<template>
  <section class="our-resources-section" id="tokenomics">
    <div class="our-resources-section__container">
      <div class="our-resources-section__blur our-resources-section__blur-1">
        <img
          src="@/assets/images/OurResourcesSection/blur-1.svg"
          loading="lazy"
          alt="Blur"
        />
      </div>
      <SectionTitle
        title="Our resources"
        data-aos="fade-up"
        titleDescription="What we do"
      />
      <div class="our-resources-section__content" data-aos="fade-left">
        <div class="our-resources-section__text-block">
          <div class="our-resources-section__text-block-logo">
            <img
              src="@/assets/images/OurResourcesSection/Logo2.webp"
              loading="lazy"
              alt="Logo"
            />
          </div>
          <h2 class="our-resources-section__text-block-title">
            About toKen $Cmeta
          </h2>
          <p class="our-resources-section__text-block-description">
            CMETA, a BSC-based cryptocurrency token will be the sole governance
            token on the platform. This means that every single transaction in
            the Crafty Metaverse space will be conducted with the $CMETA token
          </p>
          <TheButton
            class="our-resources-section__text-block-button"
            text="Play (Coming Soon)"
          />
        </div>
        <div class="our-resources-section__image-block">
          <img
            class="our-resources-section__image"
            src="@/assets/images/OurResourcesSection/tokenImage.webp"
            loading="lazy"
            alt=""
          />
          <div
            class="our-resources-section__image-info-block image-info-block image-info-block-1"
          >
            <div class="image-info-block__elips-button"></div>
            <div class="image-info-block__info-list">
              <div class="image-info-block__item">
                <div class="image-info-block__info-title">
                  Circulating Supply:
                </div>
                <div class="image-info-block__info-value">1,000,000,000</div>
              </div>
            </div>
          </div>
          <div
            class="our-resources-section__image-info-block image-info-block image-info-block-2"
          >
            <div class="image-info-block__elips-button"></div>
            <div class="image-info-block__info-list">
              <div class="image-info-block__item">
                <div class="image-info-block__info-title">Maximum supply:</div>
                <div class="image-info-block__info-value">1,000,000,000</div>
              </div>
            </div>
          </div>
          <div
            class="our-resources-section__image-info-block image-info-block image-info-block-3"
          >
            <div class="image-info-block__elips-button"></div>
            <div class="image-info-block__info-list">
              <div class="image-info-block__item">
                <div class="image-info-block__info-title">Tax:</div>
                <div class="image-info-block__info-value">10%</div>
              </div>
              <div class="image-info-block__item">
                <div class="image-info-block__info-title">Marketing:</div>
                <div class="image-info-block__info-value">5%</div>
              </div>
              <div class="image-info-block__item">
                <div class="image-info-block__info-title">Development:</div>
                <div class="image-info-block__info-value">5%</div>
              </div>
            </div>
          </div>
          <div
            class="our-resources-section__image-info-block image-info-block image-info-block-4"
          >
            <div class="image-info-block__elips-button"></div>
            <div class="image-info-block__info-list">
              <div class="image-info-block__item">
                <div class="image-info-block__info-title">Token symbol:</div>
                <div class="image-info-block__info-value">$CMETA</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import SectionTitle from '@/components/SectionTitle.vue'
import TheButton from '@/components/ui/TheButton/TheButton.vue'
import Logo2Icon from '@/components/icons/Logo2Icon.vue'
</script>

<style>
@import './OurResources.scss';
</style>
