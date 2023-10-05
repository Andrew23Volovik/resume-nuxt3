<script setup lang="ts">
import { useMotion } from '@vueuse/motion';
import type { Ref } from 'vue';
import type { ICardStyle } from '~/components/componentsTypes';

const props = withDefaults(defineProps<ICardStyle>(), {
  width: '100%',
  padding: '2rem',
  border: '1px solid #42b883',
  borderHover: '1px solid #0ebbd2',
  background: '#252429',
  hoverBackground: '#252429',
  hoverBoxShadow:
    '0.25rem 0.25rem 1.25rem 0.25rem rgba(66, 184, 131, 0.4),  -0.25rem -0.25rem 1.25rem 0.25rem rgba(14, 187, 210, 0.4)',
  animation: false,
});

const card: Ref<HTMLElement | undefined> = ref();
if (props.animation) {
  useMotion(card, {
    initial: {
      scale: 0,
      opacity: 0,
    },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 150,
        damping: 20,
        mass: 0.5,
      },
    },
  });
}
</script>

<template>
  <div
    ref="card"
    class="card"
  >
    <slot />
  </div>
</template>

<style scoped lang="scss">
.card {
  display: flex;
  justify-content: center;
  padding: v-bind('props.padding');
  width: v-bind('props.width');
  background: v-bind('props.background');
  border-radius: 2rem;
  transition: 0.7s all ease;
  border: v-bind('props.border');
  cursor: pointer;
  &:hover {
    background: v-bind('props.hoverBackground');
    border: v-bind('props.borderHover');
    box-shadow: v-bind('props.hoverBoxShadow');
  }
}

@media screen and (max-width: 1024px) {
  .card {
    padding: 1rem;
    border-radius: 1rem;
  }
}

@media screen and (max-width: 768px) {
  .card {
    padding: 0.75rem;
  }
}
</style>
