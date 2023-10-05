<script setup lang="ts">
import { useBreakpoints } from '#imports';

defineProps<{
  dataIdx: number;
}>();

const { screenType } = useBreakpoints();

const paragraphs = [
  `I am an experienced and qualified IT specialist with over two years of work experience in the field of web
  development. Each new project presents me with an opportunity to explore and update my knowledge about the
  latest trends and technologies in the industry. This drives me toward continuous skill improvement, methodologies,
  and approaches, as well as the search for solutions to complex tasks.`,
  `I am convinced that a successful web application is a skillful blend of aesthetics and functionality, and I strive
  to achieve this balance in every project. My goal is to expand the horizons of possibilities, and I am excited to
  continue my journey in creating innovative web solutions. My successful experience in collaborating with teams and
  completing projects confirms my ability to work effectively.`,
];

const additionalData = {
  Experience: '2+',
  Education: 'ZNU Software engineer',
  English: 'Intermediate',
  Ukrainian: 'Native',
};
</script>

<template>
  <UITheCard
    animation
    class="profile"
  >
    <div class="profile__wrapper">
      <div class="profile__descr">
        <h2 class="accent-color"><span>&lt;PROFILE /&gt;</span></h2>
        <p
          v-for="paragraph in paragraphs"
          :key="paragraph"
        >
          {{ paragraph }}
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
      border-radius: 1.5rem;
      box-shadow: 0.25rem 0.25rem 1rem 0.25rem rgba(#1a1a1a, 20%);
    }
  }
  &__descr {
    display: flex;
    flex-direction: column;
    gap: 1.25rem;
    p {
      color: $text-color;
      font-size: 1.25rem;
      line-height: 1.75rem;
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
        font-size: 1.75rem;
        line-height: 2rem;
      }
    }
    li > span {
      color: rgba($text-color, 50%);
      font-size: 1.25rem;
      line-height: 1.5rem;
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
