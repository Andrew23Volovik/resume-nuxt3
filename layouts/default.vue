<template>
  <div class="layout">
    <slot></slot>
  </div>
</template>

<style scoped>
.layout {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 1280px;
  height: 100vh;
}

@media (max-width: 1440px) {
  .layout {
    width: 1280px;
  }
}

@media (max-width: 1024px) {
  .layout {
    width: 924px;
  }
}
@media (max-width: 768px) {
  .layout {
    width: 708px;
  }
}
@media (max-width: 375px) {
  .layout {
    width: 320px;
  }
}
</style>
