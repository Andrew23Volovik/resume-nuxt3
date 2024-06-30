<script setup lang="ts">
import type { AsyncComponentLoader, ComputedRef, Ref } from 'vue';
import type { IArrayOfIcons } from '~/components/componentsTypes';
import { useBreakpoints, defineAsyncComponent, computed, ref, markRaw } from '#imports';

defineProps<{
  dataIdx: number;
}>();

const { screenType } = useBreakpoints();

const dataNameIcons: string[] = [
  'HTML5',
  'CSS3',
  'JavaScript',
  'Bootstrap',
  'tailwindcss',
  'Materialize',
  'BULMA',
  'UIkit',
  'Sass',
  'VueJs',
  'VueX',
  'Pinia',
  'VueRouter',
  'npm',
  'Git',
  'GitHub',
  'Jest',
  'Vuetify',
  'ElementUI',
  'Vitest',
  'TypeScript',
  'NuxtJs',
  'Vite',
  'NodeJs',
  'Express',
  'ubuntu',
  'PostgreSQL',
  'Redis',
];

const arrOfIcons: Ref<IArrayOfIcons[]> = ref([]);

let idx: number = 0;
const delay: number = 60;
const intervalId = setInterval(() => {
  if (idx < dataNameIcons.length) {
    const name = dataNameIcons[idx];
    const component: ComputedRef<AsyncComponentLoader> = computed(() =>
      defineAsyncComponent(() => import('~' + `/components/icons/${name}.vue`)),
    );
    arrOfIcons.value.push({
      component: markRaw(component.value),
      name,
    });
    idx++;
  }
}, delay);

setTimeout(() => clearInterval(intervalId), dataNameIcons.length * delay);
</script>

<template>
  <UITheCard
    style="flex-direction: column; gap: 1rem"
    animation
    class="skills"
  >
    <h2 class="accent-color"><span>&lt;SKILLS /&gt;</span></h2>
    <div
      class="skills__wrapper"
      :class="{ 'skills__wrapper-mobile': screenType === 'sm' }"
    >
      <TransitionGroup name="fade">
        <UITheCard
          v-for="(obj, index) in arrOfIcons"
          :key="index"
          :background="'#1a1a1a'"
          hover-background="rgba(93, 93, 93, 0.3)"
          hover-box-shadow="none"
          border="none"
          border-hover="none"
          width="auto"
          padding="1rem"
        >
          <div class="skills__item">
            <Component
              :is="obj.component"
              class="icon"
            />
            <span>{{ obj.name }}</span>
          </div>
        </UITheCard>
      </TransitionGroup>
    </div>
  </UITheCard>
</template>

<style scoped lang="scss">
.skills {
  &__wrapper {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(8rem, 1fr));
    gap: 1rem;
    &-mobile {
      display: flex;
      flex-direction: column;
      padding-right: 0.5rem;
      height: 28rem;
      overflow-x: hidden;
      overflow-y: auto;

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
  }
  &__item {
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    gap: 1rem;
    .icon {
      width: 2.25rem;
      height: 2.25rem;
    }

    span {
      color: $text-color;
      font-size: 1rem;
      line-height: 1.25rem;
      font-weight: 400;
      text-align: center;
    }
  }
}

.fade-enter-active,
.fade-leave-active {
  opacity: 1;
  visibility: visible;
  transition: all 1s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
  visibility: hidden;
  transform: translateY(4rem);
}

@media screen and (max-width: 1440px) {
  .skills {
    h2 {
      font-size: 2rem;
      line-height: 2.25rem;
    }
    &__item {
      .icon {
        width: 2.5rem;
        height: 2.5rem;
      }
    }
  }
}

@media screen and (max-width: 1024px) {
  .skills {
    h2 {
      font-size: 1.75rem;
      line-height: 2rem;
    }
    &__wrapper {
      grid-template-columns: repeat(auto-fit, minmax(8rem, 1fr));
    }
    &__item {
      .icon {
        width: 2rem;
        height: 2rem;
      }

      span {
        font-size: 1rem;
        line-height: 1.125rem;
      }
    }
  }
}
@media screen and (max-width: 768px) {
  .skills {
    h2 {
      font-size: 1.5rem;
      line-height: 1.75rem;
    }
    &__wrapper {
      gap: 0.5rem;
      grid-template-columns: repeat(auto-fit, minmax(6.5rem, 1fr));
    }
    &__item {
      .icon {
        width: 1.75rem;
        height: 1.75rem;
      }

      span {
        font-size: 0.75rem;
        line-height: 1rem;
      }
    }
  }
}
@media screen and (max-width: 375px) {
  .skills {
    h2 {
      font-size: 1.25rem;
      line-height: 1.5rem;
    }
    &__wrapper {
      gap: 0.5rem;
      grid-template-columns: repeat(auto-fit, minmax(6.5rem, 1fr));
    }
    &__item {
      .icon {
        width: 1.5rem;
        height: 1.5rem;
      }

      span {
        font-size: 0.75rem;
        line-height: 1rem;
      }
    }
  }
}
</style>
