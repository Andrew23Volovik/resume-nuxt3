<script setup lang="ts">
defineProps<{
  disabled?: boolean;
}>();

defineEmits<{
  (event: 'click'): void;
}>();
</script>

<template>
  <button
    class="button"
    :disabled="disabled"
    @click="$emit('click')"
  >
    <slot />
  </button>
</template>

<style scoped lang="scss">
.button {
  position: relative;
  display: inline-block;
  border: none;
  border-radius: 0.25rem;
  padding: 0 1rem;
  min-width: 4rem;
  height: 2.25rem;
  vertical-align: middle;
  text-align: center;
  text-overflow: ellipsis;
  text-transform: uppercase;
  color: $text-color;
  background-color: $primary-color;
  box-shadow:
    0 0.19rem 0.06rem -0.13rem rgba(0, 0, 0, 0.2),
    0 0.13rem 0.13rem 0 rgba(0, 0, 0, 0.14),
    0 0.13rem 0.3rem 0 rgba(0, 0, 0, 0.12);
  font-size: 0.9rem;
  font-weight: 500;
  line-height: 2rem;
  overflow: hidden;
  outline: none;
  cursor: pointer;
  transition: box-shadow 0.2s;
  &::-moz-focus-inner {
    border: none;
  }
  &:before {
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: $text-color;
    opacity: 0;
    transition: opacity 0.2s;
  }
  &:after {
    content: '';
    position: absolute;
    left: 50%;
    top: 50%;
    border-radius: 50%;
    padding: 50%;
    width: 2rem;
    height: 2rem;
    background-color: $text-color;
    opacity: 0;
    transform: translate(-50%, -50%) scale(1);
    transition:
      opacity 1s,
      transform 0.5s;
  }
  &:hover,
  &:focus {
    box-shadow:
      0 0.13rem 0.3rem -0.06rem rgba(0, 0, 0, 0.2),
      0 0.3rem 0.3rem 0 rgba(0, 0, 0, 0.14),
      0 0.06rem 0.6rem 0 rgba(0, 0, 0, 0.12);
  }
  &:hover:before {
    opacity: 0.08;
  }
  &:focus:before {
    opacity: 0.24;
  }
  &:hover:focus:before {
    opacity: 0.3;
  }
  &:active {
    box-shadow:
      0 0.3rem 0.3rem -0.19rem rgba(0, 0, 0, 0.2),
      0 0.5rem 0.6rem 0.06rem rgba(0, 0, 0, 0.14),
      0 0.19rem 0.9rem 0.13rem rgba(0, 0, 0, 0.12);
  }
  &:active:after {
    opacity: 0.32;
    transform: translate(-50%, -50%) scale(0);
    transition: transform 0s;
  }
  &:disabled {
    color: rgba($primary-color, 38%);
    background-color: rgba($primary-color, 12%);
    box-shadow: none;
    cursor: initial;
  }
  &:disabled:before,
  &:disabled:after {
    opacity: 0;
  }
}

@media screen and (max-width: 375px) {
  .button {
    height: 1.75rem;
    line-height: 1.75rem;
  }
}
</style>
