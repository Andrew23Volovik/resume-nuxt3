<script setup lang="ts">
import type { Ref } from 'vue';
import { ref, watch } from '#imports';

const props = defineProps<{
  activeSectionId: number;
}>();

const emit = defineEmits<{
  (e: 'click-section', idx: number): void;
}>();

const dataNames: string[] = ['Promo', 'Profile', 'Skills', 'Experience', 'Thanks'];

const currIdx: Ref<number> = ref(0);
const changeListItem = (idx: number): void => {
  currIdx.value = idx;

  emit('click-section', idx);
};

watch(
  () => props.activeSectionId,
  (idx: number) => {
    currIdx.value = idx;
  },
  { immediate: true },
);
</script>

<template>
  <nav class="nav">
    <ul
      v-motion-pop-visible-once
      class="nav__list"
    >
      <li
        v-for="(name, idx) in dataNames"
        :key="idx"
        class="nav__items"
        :class="{ active: currIdx === idx }"
        @click="changeListItem(idx)"
      >
        <div>
          <h2>{{ name }}</h2>
          <span></span>
        </div>
      </li>
    </ul>
  </nav>
</template>

<style scoped lang="scss">
.nav {
  position: fixed;
  top: 50%;
  transform: translate(-20%, -50%);
  right: 0;
  height: 50vh;
  background: transparent;
  z-index: 10;
  &__list {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    gap: 1rem;
    list-style-type: none;
    height: 100%;
    background: transparent;
  }
  &__items {
    height: 100%;
    cursor: pointer;
    background: transparent;
    &:hover > div span {
      background: #0ebbd2;
    }
    &:hover > div h2 {
      visibility: visible;
      opacity: 1;
    }
    div {
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 1rem;
      height: 100%;
      background: transparent;
      h2 {
        color: white;
        font-size: 1.5rem;
        line-height: 1.75rem;
        font-weight: 400;
        transition: 0.5s all ease-in;
        visibility: hidden;
        opacity: 0;
        background: transparent;
      }
      span {
        width: 0.25rem;
        height: 100%;
        border-radius: 1rem;
        background: rgba($text-color, 20%);
        transition: 0.5s all ease-in;
      }
    }
  }
}

.active {
  div > span {
    background: #00dc82;
  }
}

@media screen and (max-width: 1440px) {
  .nav {
    transform: translate(-10%, -50%);
    height: 40vh;
    &__items {
      div {
        h2 {
          font-size: 1.25rem;
          line-height: 1.5rem;
        }
      }
    }
  }
}
</style>
