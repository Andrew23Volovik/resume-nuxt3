<template>
  <NuxtPage />
</template>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Source+Code+Pro:wght@300;400;500;600;700&display=swap');

* {
  padding: 0;
  margin: 0;
  scroll-behavior: smooth;
  font-family: 'Source Code Pro', monospace;
}

#__nuxt {
  position: relative;
  display: flex;
  justify-content: center;
}

body,
html {
  background-color: $background-base-color;
  &::-webkit-scrollbar {
    display: none;
  }
}

.accent-color {
  color: $text-color;
  font-size: 3rem;
  line-height: 3.5rem;
  font-weight: 700;
  background: -webkit-linear-gradient(to right, $primary-color 0%, $secondary-color 100%);
  background: -moz-linear-gradient(to right, $primary-color 0%, $secondary-color 100%);
  background: linear-gradient(to right, $primary-color 0%, $secondary-color 100%);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
</style>
