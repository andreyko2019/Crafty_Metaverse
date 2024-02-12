<template>
  <div class="roadmap-component">
    <div class="roadmap-component__circle">
      <div
        class="roadmap-component__circle-first roadmap-component__circle-animation"
      ></div>
      <div
        class="roadmap-component__circle-second roadmap-component__circle-animation"
      ></div>
      <div
        class="roadmap-component__circle-third roadmap-component__circle-animation"
      ></div>
      <div
        class="roadmap-component__circle-fourth roadmap-component__circle-animation"
      ></div>
      <div
        class="roadmap-component__circle-fiveth roadmap-component__circle-animation"
      ></div>
    </div>
    <div class="roadmap-component__text-block">
      <h3 class="roadmap-component__text-block-title">
        Governance Token Launch on BSC ($CMETA)
      </h3>
      <transition-group
        tag="ul"
        name="list-transition"
        class="roadmap-component__list"
        @before-enter="beforeEnter"
        @enter="enter"
        @before-leave="beforeLeave"
        @leave="leave"
      >
        <template
          v-for="(item, index) in roadmapItem.list"
          :key="`item-${index}`"
        >
          <li
            class="roadmap-component__list-item"
            v-show="index < visibleItemElements"
          >
            <ListIcon class="roadmap-component__list-item-icon" />
            <div class="roadmap-component__list-item-text">
              {{ item.event }}
              <ul
                v-if="item.subItems && item.subItems.length > 0"
                class="roadmap-component__sub-list"
              >
                <li
                  v-for="(subItem, subIndex) in item.subItems"
                  :key="`subItem-${subIndex}`"
                  class="roadmap-component__sub-list-item"
                >
                  {{ subItem.event }}
                </li>
              </ul>
            </div>
          </li>
        </template>
      </transition-group>
      <button
        class="roadmap-component__button"
        @click="toggleVisibility"
        v-if="
          props.roadmapItem.defaultQuantityVisibleElements <
          props.roadmapItem.list.length
        "
      >
        {{ showingAll ? 'Hide' : 'More' }}
        <ArrowIcon
          class="roadmap-component__button-arrow"
          :class="{ 'arrow-rotate': showingAll }"
        />
      </button>
    </div>
  </div>
</template>

<script setup>
import { ref, defineProps } from 'vue'
import ListIcon from '../icons/ListIcon.vue'
import ArrowIcon from '../icons/ArrowIcon.vue'

const props = defineProps({
  roadmapItem: Object,
})

const visibleItemElements = ref(
  props.roadmapItem.defaultQuantityVisibleElements
)
const showingAll = ref(false)

function toggleVisibility() {
  if (showingAll.value) {
    visibleItemElements.value = props.roadmapItem.defaultQuantityVisibleElements
    showingAll.value = false
  } else {
    visibleItemElements.value = props.roadmapItem.list.length
    showingAll.value = true
  }
}

function beforeEnter(el) {
  el.style.height = '0'
}

function enter(el, done) {
  el.style.transition = 'height 0.3s ease'
  el.style.height = el.scrollHeight + 'px'
  el.addEventListener('transitionend', done)
}

function beforeLeave(el) {
  el.style.height = el.scrollHeight + 'px'
}

function leave(el, done) {
  el.style.transition = 'height 0.3s ease'
  el.style.height = '0'
  el.addEventListener('transitionend', done)
}
</script>

<style>
@import './RoadMapComponent.scss';
</style>
