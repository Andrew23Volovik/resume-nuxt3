<script setup lang="ts">
import type { Ref } from 'vue';
import { ref } from '#imports';

const dataSlides: string[] = ['ThePromo', 'TheProfile', 'TheSkills', 'TheExperience', 'TheThanks'];

const slides: Ref<string[]> = ref([]);
slides.value = dataSlides.map(() => 'div');
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
