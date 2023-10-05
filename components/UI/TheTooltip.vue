<script setup lang="ts">
import type { ComputedRef } from 'vue';
import type { ITooltipProps } from '~/components/componentsTypes';
import { computed } from '#imports';

const props = withDefaults(defineProps<ITooltipProps>(), {
  position: 'right',
});

const tooltipClass: ComputedRef<{
  [p: string]: boolean;
  tooltip__text: boolean;
}> = computed(() => ({
  tooltip__text: true,
  [`tooltip__text_${props.position}`]: true,
}));
</script>

<template>
  <div class="tooltip-wrapper">
    <slot />
    <span :class="tooltipClass"> {{ text }}</span>
  </div>
</template>

<style scoped lang="scss">
.tooltip-wrapper {
  position: relative;
  display: inline-block;

  &:hover .tooltip__text {
    visibility: visible;
    opacity: 1;
  }
}

.tooltip__text {
  position: absolute;
  color: $text-color;
  text-align: center;
  padding: 0.5rem;
  border-radius: 0.5rem;
  border: 1px solid rgba($text-color, 20%);
  min-width: 10rem;
  background: $background-sec-color;
  visibility: hidden;
  opacity: 0;
  transition: opacity 1s;
  z-index: 10;

  &:after {
    content: ' ';
    margin-right: 1px;
    position: absolute;
    top: 0;
    transform: translate(0%, -50%);
    border-width: 0.5rem;
    border-style: solid;
  }

  &_top {
    inset-block-end: 120%;
    inset-inline-start: 50%;
    margin-inline-start: -4rem;
    &:after {
      inset-block-start: 100%;
      inset-inline-start: 50%;
      border-color: transparent rgba($text-color, 20%) transparent transparent;
    }
  }

  &_right {
    inset-block-end: 50%;
    transform: translate(0%, 50%);
    inset-inline-start: 120%;
    &:after {
      inset-block-start: 50%;
      inset-inline-end: 100%;
      border-color: transparent rgba($text-color, 20%) transparent transparent;
    }
  }

  &_bottom {
    inset-block-start: 120%;
    inset-inline-start: 50%;
    margin-inline-start: -4rem;
    &:after {
      inset-block-end: 100%;
      inset-inline-start: 50%;
      border-color: transparent rgba($text-color, 20%) transparent transparent;
    }
  }

  &_left {
    inset-block-end: 0%;
    inset-inline-end: 110%;
    &:hover {
      inset-block-start: 50%;
      inset-inline-start: 100%;
      border-color: transparent rgba($text-color, 20%) transparent transparent;
    }
  }
}

:slotted(*):focus + .tooltip__text {
  visibility: visible;
  opacity: 1;
}
</style>
