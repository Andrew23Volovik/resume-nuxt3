<template>
  <section
    id="slide"
    class="page__slide"
  >
    <NuxtLayout>
      <slot />
    </NuxtLayout>
  </section>
</template>

<style scoped lang="scss">
.page__slide {
  display: flex;
  justify-content: center;
  position: relative;
  width: 100%;
  min-height: 100vh;
  margin: 0 auto;
  background: $background-base-color;
  z-index: 1;
}
</style>
