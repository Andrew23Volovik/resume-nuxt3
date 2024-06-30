<script setup lang="ts">
import type { JSONResponse } from '~/server/types/types';
import type { Experiences } from '~/db/schema/experience';
import { useBreakpoints } from '#imports';
import { ExperienceWithTechnologies } from '~/components/componentsTypes';

defineProps<{
  dataIdx: number;
}>();

const { screenType } = useBreakpoints();

const experiences: Ref<ExperienceWithTechnologies<Experiences>[]> = ref([]);
const { data, pending } = await useLazyFetch<JSONResponse>('/api/experience', {
  server: false,
  pick: ['data'],
});

watch(data, (newData: JSONResponse | null) => {
  if (newData) {
    experiences.value = newData.data.experiences;
  }
});
</script>

<template>
  <UITheLoadingProgress v-if="pending" />
  <UITheCard
    style="flex-direction: column; gap: 1rem"
    animation
  >
    <h2><span class="accent-color">&lt;Experience /&gt;</span></h2>
    <div
      class="experience-wrapper"
      :class="{
        'experience-wrapper-mobile': screenType === 'lg' || screenType === 'md' || screenType === 'sm',
      }"
    >
      <UITheCard
        v-for="(work, idx) in experiences"
        :key="idx"
        width="auto"
        padding="1rem"
        border="none"
        border-hover="none"
        background="#1a1a1a"
        hover-background="rgba(93, 93, 93, 0.3)"
        hover-box-shadow="none"
        style="justify-content: flex-start"
      >
        <UITheExperienceLayout
          :id="idx + 1"
          :title="work.title"
          :date="work.date"
          :descr="work.description"
          :responsibility="work.responsibility"
          :technologies="work.technologies"
        />
      </UITheCard>
    </div>
  </UITheCard>
</template>

<style scoped lang="scss">
h2 {
  span {
    font-size: 3rem;
    line-height: 3.5rem;
    font-weight: 700;
  }
}

.experience-wrapper {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(32rem, 1fr));
  gap: 1rem;
}

.experience-wrapper-mobile {
  display: flex;
  flex-direction: column;
  height: 28rem;
  overflow-x: hidden;
  overflow-y: auto;
  padding-right: 0.5rem;

  &::-webkit-scrollbar {
    width: 0.5rem;
    margin: 1rem;
    &-track {
      background-color: rgba($text-color, 20%);
      border-radius: 1rem;
    }
    &-thumb {
      background-color: $primary-color;
      background-image: none;
      border-radius: 1rem;
    }
  }
}

@media screen and (max-width: 1440px) {
  h2 {
    span {
      font-size: 2rem;
      line-height: 2.25rem;
    }
  }

  .experience-wrapper {
    gap: 0.5rem;
  }
}
</style>
