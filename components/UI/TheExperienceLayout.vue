<script setup lang="ts">
import type { IExperienceLayoutProps } from '~/components/componentsTypes';

defineProps<IExperienceLayoutProps>();
</script>

<template>
  <div
    v-if="title"
    class="experience"
  >
    <div class="experience__title">
      <h3 class="accent-color">{{ title }}</h3>
      <span>{{ date }}</span>
    </div>
    <p class="experience__desc">
      {{ descr }}
    </p>
    <h3>Responsibility:</h3>
    <p class="experience__desc">
      {{ responsibility }}
    </p>
    <h3>Tools and technologies:</h3>
    <div class="experience__chips">
      <UITheChip
        v-for="(technology, idx) in technologies"
        :key="idx"
      >
        {{ technology }}
      </UITheChip>
    </div>
  </div>
  <div
    v-else
    style="display: flex; margin: 0 auto; align-items: center"
  >
    <h2 class="accent-color">SOON</h2>
  </div>
</template>

<style scoped lang="scss">
.experience {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 0.5rem;
  h3 {
    color: rgba($text-color, 80%);
    font-size: 1rem;
    line-height: 1.25rem;
    font-weight: 300;
  }
  &__desc {
    color: $text-color;
    font-size: 1rem;
    line-height: 1.25rem;
    text-align: justify;
    text-justify: inter-word;
    letter-spacing: 1px;
    text-indent: 1rem;
  }
  &__title {
    display: flex;
    justify-content: space-between;
    color: $text-color;
    h3 {
      color: $secondary-color;
      font-size: 1.5rem;
      line-height: 1.75rem;
      font-weight: 500;
    }
    span {
      font-weight: 300;
    }
  }
  &__chips {
    display: flex;
    gap: 0.5rem;
    flex-wrap: wrap;
  }
}

@media screen and (max-width: 1440px) {
  .experience {
    h3 {
      font-size: 1rem;
      line-height: 1rem;
    }
    p {
      font-size: 1rem;
      line-height: 1.125rem;
      letter-spacing: 1px;
    }
    &__title {
      h3 {
        font-size: 1.25rem;
        line-height: 1.5rem;
      }
    }
  }
}

@media screen and (max-width: 375px) {
  .experience {
    h3 {
      font-size: 1rem;
      line-height: 1rem;
    }
    p {
      font-size: 0.75rem;
      line-height: 0.825rem;
      letter-spacing: 1px;
    }
    &__title {
      h3 {
        font-size: 1rem;
        line-height: 1.125rem;
      }
      span {
        font-size: 0.75rem;
        line-height: 1.125rem;
      }
    }
  }
}
</style>
