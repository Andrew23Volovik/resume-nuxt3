<template>
  <span class="chip">
    <slot />
  </span>
</template>

<style scoped lang="scss">
.chip {
  display: inline-block;
  background: lighten($background-sec-color, 10%);
  color: $text-color;
  padding: 0.25rem 1rem;
  border-radius: 2rem;
  font-size: 0.875rem;
  line-height: 1rem;
  box-shadow: 0 0 0.25rem 0.125rem rgba(#1a1a1a, 20%);
  transition: 0.5s all ease;
  &:hover {
    background: rgba($secondary-color, 40%);
  }
}
</style>
