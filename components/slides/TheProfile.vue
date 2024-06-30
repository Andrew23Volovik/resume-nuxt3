<script setup lang="ts">
import type { Ref } from 'vue';
import type { JSONResponse } from '~/server/types/types';
import type { AdditionalDataReturn, Paragraphs } from '~/db/schema/profile';
import { useBreakpoints, ref, useLazyFetch, watch } from '#imports';

defineProps<{
  dataIdx: number;
}>();

const { screenType } = useBreakpoints();

const paragraphs: Ref<Paragraphs[]> = ref([]);
const additionalData: Ref<AdditionalDataReturn | undefined> = ref();
const { data, pending } = await useLazyFetch<JSONResponse>(`/api/profile`, {
  server: false,
  pick: ['data'],
});

watch(data, (newData: JSONResponse | null) => {
  if (newData) {
    paragraphs.value = newData.data.paragraphs;
    additionalData.value = newData.data.additionalData;
  }
});
</script>

<template>
  <UITheLoadingProgress v-if="pending" />
  <UITheCard
    animation
    class="profile"
  >
    <div class="profile__wrapper">
      <div class="profile__descr">
        <h2 class="accent-color"><span>&lt;PROFILE /&gt;</span></h2>
        <p
          v-for="paragraph in paragraphs"
          :key="paragraph.id"
        >
          {{ paragraph.paragraph }}
        </p>
        <ul class="profile__ul">
          <li
            v-for="(value, key, idx) in additionalData"
            :key="idx"
          >
            <h2 class="accent-color">
              <span>{{ value }}</span>
            </h2>
            <span>{{ key }}</span>
          </li>
          <img
            v-if="screenType === 'lg' || screenType === 'md'"
            src="/images/result.png"
            alt="photo"
          />
        </ul>
      </div>
      <img
        v-if="screenType === '2xl' || screenType === 'xl'"
        src="/images/result.png"
        alt="photo"
      />
    </div>
  </UITheCard>
</template>

<style scoped lang="scss">
.profile {
  &__wrapper {
    display: grid;
    grid-template-columns: 60% 1fr;
    justify-items: center;
    align-items: start;
    gap: 2rem;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      border-radius: 1rem;
      box-shadow: 0.25rem 0.25rem 1rem 0.25rem rgba(#1a1a1a, 20%);
    }
  }
  &__descr {
    display: flex;
    flex-direction: column;
    gap: 1.25rem;
    p {
      color: $text-color;
      font-size: 1rem;
      line-height: 1.25rem;
      font-weight: 300;
      text-align: justify;
      text-justify: inter-word;
      text-indent: 2rem;
    }
  }
  &__ul {
    display: grid;
    grid-auto-flow: column;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(2, 1fr);
    align-items: center;
    justify-content: center;
    list-style-type: none;
    gap: 0.25rem;
    li {
      display: flex;
      flex-direction: column;
      h2 > span {
        font-size: 1.5rem;
        line-height: 1.75rem;
      }
    }
    li > span {
      color: rgba($text-color, 50%);
      font-size: 1rem;
      line-height: 1.25rem;
      font-weight: 300;
    }
  }
}

@media screen and (max-width: 1440px) {
  .profile {
    &__wrapper {
      gap: 1.5rem;
    }
    &__descr {
      gap: 1rem;
      h2 {
        font-size: 2rem;
        line-height: 2.25rem;
      }
      p {
        font-size: 1.25rem;
        line-height: 1.5rem;
        text-indent: 1.5rem;
      }
    }
    &__ul {
      li {
        h2 > span {
          font-size: 1.5rem;
          line-height: 1.75rem;
        }
      }
      li > span {
        font-size: 1rem;
        line-height: 1.25rem;
      }
    }
  }
}

@media screen and (max-width: 1024px) {
  .profile {
    &__wrapper {
      display: flex;
      flex-direction: column;
      gap: 1rem;

      img {
        border-radius: 1rem;
      }
    }
    &__descr {
      h2 {
        font-size: 1.5rem;
        line-height: 1.75rem;
      }
      p {
        font-size: 0.75rem;
        line-height: 1rem;
        text-indent: 1rem;
      }
    }
    &__ul {
      li {
        h2 > span {
          font-size: 1rem;
          line-height: 1.25rem;
        }
      }
      li > span {
        font-size: 0.75rem;
        line-height: 1rem;
      }
      img {
        width: 10rem;
        grid-area: 1 / 3 / -1 / -1;
      }
    }
  }
}
@media screen and (max-width: 768px) {
  .profile {
    &__wrapper {
      gap: 1rem;
    }
    &__descr {
      h2 {
        font-size: 1.5rem;
        line-height: 1.75rem;
      }
      p {
        font-size: 1rem;
        line-height: 1.125rem;
        text-indent: 1rem;
      }
    }
    &__ul {
      gap: 0.5rem;
      li {
        h2 > span {
          font-size: 1.25rem;
          line-height: 1.5rem;
        }
      }
      li > span {
        font-size: 1rem;
        line-height: 1.25rem;
      }
      img {
        width: 10rem;
        grid-area: 1 / 3 / -1 / -1;
      }
    }
  }
}
@media screen and (max-width: 375px) {
  .profile {
    &__wrapper {
      gap: 0.5rem;
    }
    &__descr {
      h2 {
        font-size: 1.25rem;
        line-height: 1.5rem;
      }
      p {
        font-size: 0.75rem;
        line-height: 0.825rem;
        text-indent: 0.75rem;
      }
    }
    &__ul {
      li {
        h2 > span {
          font-size: 1rem;
          line-height: 1.25rem;
        }
      }
      li > span {
        font-size: 0.75rem;
        line-height: 0.825rem;
      }
    }
  }
}
</style>
