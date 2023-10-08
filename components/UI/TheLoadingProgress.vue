<script setup lang="ts"></script>

<template>
  <div class="loader-progress"></div>
</template>

<style scoped lang="scss">
.loader-progress {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 0.25rem;
  width: 100%;
  opacity: 1;
  background: repeating-linear-gradient(to right, $primary-color 0%, $secondary-color 50%, $third-color 100%);
  animation: loading 1s ease-out infinite;
  z-index: 100;
}

@keyframes loading {
  0% {
    width: 0;
  }

  100% {
    opacity: 0;
    width: 100%;
  }
}
</style>
