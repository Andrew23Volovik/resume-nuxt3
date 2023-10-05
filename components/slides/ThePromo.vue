<script setup lang="ts">
import { useBreakpoints } from '#imports';

defineProps<{
  dataIdx: number;
}>();

const { screenType } = useBreakpoints();
</script>

<template>
  <div class="promo">
    <div class="promo__wrapper">
      <h1 class="promo__name">
        Hey! I'm <br />
        ANDREY VOLOVIK
      </h1>
      <div class="promo__subname">
        <span class="accent-color">Front-end developer</span>
      </div>
      <div class="promo__glowing" />
    </div>
    <UITheBackgroundMatrix
      v-if="screenType !== 'sm'"
      v-motion-pop-visible
    />
    <div class="backdrop-gradient" />
  </div>
</template>

<style scoped lang="scss">
.promo {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  &__wrapper {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    pointer-events: none;
    text-align: center;
    gap: 1rem;
    z-index: 20;
    background: transparent;
  }
  &__name {
    color: $text-color;
    font-size: 6rem;
    line-height: 6.25rem;
    font-weight: 700;
    text-align: center;
    pointer-events: none;
    background: transparent;
  }
  &__subname {
    color: $text-color;
    font-size: 4rem;
    line-height: 4.25rem;
    font-weight: 300;
    background: transparent;
  }
  &__glowing {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 50%;
    height: 50%;
    background-image: linear-gradient(45deg, $primary-color, $secondary-color, $third-color);
    opacity: 0.1;
    border-radius: 50%;
    filter: blur(12rem);
  }
}

.backdrop-gradient {
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  background: linear-gradient(0deg, $background-base-color, rgba(255, 255, 255, 0) 80%);
  z-index: 1;
  pointer-events: none;
}

@media screen and (max-width: 1440px) {
  .promo {
    &__name {
      font-size: 5rem;
      line-height: 5.25rem;
    }
    &__subname {
      font-size: 3rem;
      line-height: 3.25rem;
    }
  }
}

@media screen and (max-width: 1024px) {
  .promo {
    &__name {
      font-size: 4rem;
      line-height: 4.25rem;
    }
    &__subname {
      font-size: 2rem;
      line-height: 2.25rem;
    }
  }
}
@media screen and (max-width: 768px) {
  .promo {
    &__name {
      font-size: 3rem;
      line-height: 3.25rem;
    }
    &__subname {
      font-size: 1.75rem;
      line-height: 2rem;
    }
  }
}
@media screen and (max-width: 375px) {
  .promo {
    &__name {
      font-size: 2rem;
      line-height: 2.25rem;
    }
    &__subname {
      font-size: 0.5rem;
      line-height: 1rem;
    }
  }
}
</style>
