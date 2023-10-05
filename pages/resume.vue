<script setup lang="ts">
import type { AsyncComponentLoader, ComputedRef, Raw, Ref } from 'vue';
import type { LocationQueryValue } from 'vue-router';
import { defineAsyncComponent, ref, markRaw, watch, useRoute } from '#imports';

const dataSlides: string[] = ['ThePromo', 'TheProfile', 'TheSkills', 'TheExperience', 'TheThanks'];

const createLazyComponent = (name: string): Raw<AsyncComponentLoader> => {
  return markRaw(defineAsyncComponent(() => import('~' + `/components/slides/${name}.vue`)));
};

const slides: Ref<string[] | NonNullable<unknown>[]> = ref([]);
slides.value = dataSlides.map(() => 'div');

const route = useRoute();
const currPage: ComputedRef<LocationQueryValue | LocationQueryValue[]> = computed(() => route.query.page);

const addSLide = (slideIndex: number): void => {
  if (typeof slides.value[Number(slideIndex)] === 'string') {
    slides.value[Number(slideIndex)] = createLazyComponent(dataSlides[Number(slideIndex)]);
  }
};

watch(
  currPage,
  (newPage) => {
    addSLide(Number(newPage) - 1);
  },
  { immediate: true },
);
</script>

<template>
  <ThePage>
    <ThePageSlide
      v-for="(slide, idx) in slides"
      :key="idx"
    >
      <Component
        :is="slide"
        :key="idx"
      />
    </ThePageSlide>
  </ThePage>
</template>
