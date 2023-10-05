<script setup lang="ts">
import type { ConcreteComponent } from 'vue';
import { resolveComponent } from '#imports';

type ResolveComponent = string | ConcreteComponent;

const email: ResolveComponent = resolveComponent('IconsSocialEmail');
const phone: ResolveComponent = resolveComponent('IconsSocialPhone');
const telegram: ResolveComponent = resolveComponent('IconsSocialTelegram');
const github: ResolveComponent = resolveComponent('IconsSocialGithub');

const socialsArr: ResolveComponent[] = [email, phone, telegram, github];
</script>

<template>
  <ul class="social-wrapper">
    <li
      v-for="(social, idx) in socialsArr"
      :key="idx"
      v-motion-pop-visible-once
    >
      <a class="social-wrapper__link">
        <Component
          :is="social"
          class="icon"
        />
        <span class="inner"></span>
      </a>
    </li>
  </ul>
</template>

<style scoped lang="scss">
.social-wrapper {
  position: fixed;
  top: 50%;
  left: 0;
  transform: translate(50%, -50%);
  list-style-type: none;
  z-index: 10;
  li {
    position: relative;
    cursor: pointer;
    margin-top: 1rem;
    color: $primary-color;
  }
  &__link {
    display: block;
    position: relative;
    padding: 1.5rem;
    background-color: $primary-color;
    border-radius: 50%;
    transition: color 0.3s;
    &:active {
      background-color: $secondary-color;
      box-shadow:
        0.1rem 0.1rem 1rem 0.1rem rgba(66, 184, 131, 0.4),
        -0.1rem -0.1rem 1rem 0.1rem rgba(14, 187, 210, 0.4);
    }
    .icon {
      position: absolute;
      display: block;
      top: 50%;
      left: 50%;
      color: $background-sec-color;
      transform: translate(-50%, -50%);
      width: 1.5rem;
      height: 1.5rem;
      z-index: 1;
    }
    .inner {
      background-color: $primary-color;
      height: 94%;
      width: 94%;
      position: absolute;
      transform: translate(-50%, -50%);
      top: 50%;
      left: 50%;
      border-radius: 50%;
      transition: 0.4s all ease-in-out;
    }
    &:hover .icon {
      color: $primary-color;
    }
    &:hover .inner {
      background-color: $background-sec-color;
    }
  }
}

@media screen and (max-width: 1440px) {
  .social-wrapper {
    &__link {
      padding: 1.25rem;
      .icon {
        width: 1.25rem;
        height: 1.25rem;
      }
    }
  }
}
</style>