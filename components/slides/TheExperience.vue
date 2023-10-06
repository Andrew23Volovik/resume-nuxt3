<script setup lang="ts">
import { useBreakpoints } from '#imports';

defineProps<{
  dataIdx: number;
}>();

const { screenType } = useBreakpoints();

const experiences = [
  {
    id: 1,
    title: 'Convo-itc',
    date: '07/2021 to 12/2021',
    descr:
      'Junior front-end developer of a service for people with disabilities. The core functionality of the application enables deaf individuals to engage in real-time communication with others through the use of a translator.',
    responsibility:
      'Developing service functionality, implementing accessibility features to make the application usable for individuals with disabilities, and also investigating and developing a Chrome extension for this service.',
    technologies: [
      'VueJs',
      'Vuex',
      'VueRouter',
      'Vue Class Component',
      'ElementUI',
      'DayJS',
      'Vue Smart Widget',
      'Vuelidate',
    ],
    timestamp: '2023-09-26 21:16:38',
  },
  {
    id: 2,
    title: 'Echomarkets',
    date: '01/2022 to 07/2022',
    descr:
      'Junior front-end developer for a marketplace that offers real-time stock performance tracking, market trend updates, and portfolio management. Also provides cryptocurrency tracking for staying current in the digital asset landscape.',
    responsibility:
      'Design and development marketplace functionality. Updating and improving legacy website templates already on the marketplace. Refactoring online payment system from legacy code.',
    technologies: ['VueJs', 'Vuex', 'VueRouter', 'VeeValidate', 'VueBootstrap', 'Vue Chart JS', 'Vue Apex Charts'],
    timestamp: '2023-09-26 21:18:19',
  },
  {
    id: 3,
    title: 'Panda',
    date: '07/2022 to 02/2023',
    descr:
      'Junior+ front-end developer for an online store specializing in furniture and home goods. The goal of the application is to create an attractive and user-friendly shopping experience for customers.',
    responsibility:
      'I refactored the code to enhance readability, maintainability, and performance. Additionally, I worked on implementing user interface improvements and resolving layout and design issues across various devices.',
    technologies: [
      'VueJs',
      'Vuex',
      'VueRouter',
      'Vuelidate',
      'Vuetify',
      'Video Js',
      'i18n',
      'Lodash',
      'Vue Test Utils',
    ],
    timestamp: '2023-09-26 21:20:42',
  },
  {
    id: 4,
    title: 'Carbidder',
    date: '02/2023 to 09/2023',
    descr:
      'Middle front-end development of a car auction website. The purpose of the car auction app is to offer a convenient and potentially cost-effective way to buy and sell vehicles.',
    responsibility:
      'Optimized web application for performance, considering factors like page load time, rendering efficiency, and responsive design across various devices and browsers. Transferring the project to a new UI framework version.',
    technologies: [
      'TypeScript',
      'NuxtJs',
      'Pinia',
      'VeeValidate',
      'Vuetify',
      'Apex Charts',
      'nuxt/i18n',
      'Lodash',
      'Node.js',
    ],
    timestamp: '2023-09-26 21:21:49',
  },
];
</script>

<template>
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
          :title="work.title"
          :date="work.date"
          :descr="work.descr"
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
  grid-template-columns: repeat(2, 1fr);
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
