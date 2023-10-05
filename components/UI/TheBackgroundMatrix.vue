<script setup lang="ts">
import type { ComputedRef } from 'vue';
import { useBreakpoints } from '#imports';

const { width } = useBreakpoints();

const matrix: ComputedRef<{ col: number; row: number }> = computed(() => {
  if (width.value <= 375) {
    return {
      col: 11,
      row: 25,
    };
  }
  if (width.value <= 768) {
    return {
      col: 24,
      row: 25,
    };
  }
  if (width.value <= 1024) {
    return {
      col: 32,
      row: 25,
    };
  }
  if (width.value <= 1440) {
    return {
      col: 45,
      row: 25,
    };
  }
  return {
    col: 61,
    row: 25,
  };
});

const arrOfValues: ComputedRef<string[][]> = computed(() => {
  const arr = [];
  for (let col = 0; col < matrix.value.col; col++) {
    const subArr = [];
    for (let row = 0; row < matrix.value.row; row++) {
      const value = Math.floor(Math.random() * 255) + 10240;
      subArr.push(`&#${value};`);
    }
    arr[col] = subArr;
  }
  return arr;
});
</script>

<template>
  <div class="wrapper__matrix">
    <div
      v-for="(colItem, colIdx) in arrOfValues"
      :key="colIdx"
      :class="`column col-${colIdx}`"
    >
      <span
        v-for="(rowItem, rowIdx) in colItem"
        :key="rowIdx"
        v-html="rowItem"
      ></span>
    </div>
  </div>
</template>

<style scoped lang="scss">
.wrapper__matrix {
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  text-align: center;
  z-index: 0;
  pointer-events: none;

  div > span {
    font-size: 2rem;
    color: rgba($primary-color, 40%);
    font-family: monospace;
  }
}

.column {
  & > * {
    display: block;
    animation: 3s infinite colorPulse;
    padding: 0 0.25rem;
  }
}

@for $colNum from 1 through 61 {
  $duration: calc(random(100) / 22 + 1);
  $delay: calc($duration / 30);

  @for $i from 1 through 25 {
    .col-#{$colNum} :nth-child(#{$i}) {
      animation-duration: #{$duration}s;
      animation-delay: #{$i * $delay}s;
    }
  }
}

@keyframes colorPulse {
  0% {
    color: lighten(rgba($secondary-color, 30%), 40%);
  }
  40% {
    color: rgba($primary-color, 40%);
  }
  50% {
    color: darken(rgba($secondary-color, 20%), 5%);
  }
  100% {
    color: darken(rgba($primary-color, 30%), 35%);
  }
}
</style>
