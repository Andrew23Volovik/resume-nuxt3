<script lang="ts" setup>
import type { Ref, ComputedRef } from 'vue';
import type { IInputProps } from '~/components/componentsTypes';
import { ref, onMounted, onUnmounted, computed } from '#imports';

const props = withDefaults(defineProps<IInputProps>(), {
  label: '',
  errorMsg: '',
  hintMsg: '',
  type: 'text',
  value: '',
});

defineEmits<{
  (event: 'update:modelValue', payload: string): void;
}>();

const isFocus: Ref<boolean> = ref(false);
const input: Ref<HTMLInputElement | undefined> = ref();
const $el: Ref<HTMLDivElement | undefined> = ref();

const close = (e: MouseEvent): void => {
  const target = e.target as Node;
  if ($el.value) {
    if (!$el.value.contains(target)) {
      if (input.value) {
        isFocus.value = input.value.value !== '';
      }
    }
  }
};

const addFocusClass = (): void => {
  isFocus.value = true;
};

const errorCheck: ComputedRef<boolean> = computed(() => {
  if (props.errorMsg.length > 0) {
    return false;
  } else {
    return props.hintMsg.length > 0;
  }
});

onMounted(() => {
  document.addEventListener('click', close);
});

onUnmounted(() => document.removeEventListener('click', close));
</script>

<template>
  <div
    ref="$el"
    class="input-container"
  >
    <input
      id="input"
      ref="input"
      :type="type"
      :class="{ 'is-error': errorMsg }"
      :value="modelValue"
      @focus="addFocusClass"
      @input="$emit('update:modelValue', ($event.target as HTMLInputElement).value)"
    />
    <label
      class="label"
      for="input"
      :class="{ 'is-focus': isFocus, 'is-error': errorMsg }"
    >
      {{ label }}
    </label>
    <span
      v-if="errorMsg"
      class="hint-text"
      :class="{ 'is-error': errorMsg }"
    >
      {{ errorMsg }}
    </span>
    <span
      v-if="errorCheck"
      class="hint-text"
    >
      {{ hintMsg }}
    </span>
  </div>
</template>

<style lang="scss" scoped>
.input-container {
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
  input {
    height: 1.25rem;
    background-color: transparent;
    border: 1px solid $text-color;
    border-radius: 0.25rem;
    font-size: 1rem;
    line-height: 1rem;
    padding: 0.875rem 1rem;
    color: $primary-color;
    &:focus {
      outline: none;
      border: 1px solid $primary-color;
    }
  }

  .label {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 1rem;
    color: $text-color;
    display: flex;
    align-items: center;
    font-size: 1rem;
    line-height: 1rem;
    cursor: text;
    transition: all 0.15s ease-out;
    pointer-events: none;
  }

  .hint-text {
    position: absolute;
    bottom: -1.1rem;
    left: 1rem;
    font-size: 0.8rem;
    line-height: 0.9rem;
    color: $text-color;
  }

  .label.is-focus {
    height: 1rem;
    font-size: 0.8rem;
    line-height: 0.9rem;
    transform: translate(0, -50%);
    background-color: $background-base-color;
    padding-left: 0.3rem;
    padding-right: 0.3rem;
  }

  input.is-error {
    border: 1px solid $error;
  }

  .label.is-error {
    color: $error;
  }

  .hint-text.is-error {
    color: $error;
  }
}

@media screen and (max-width: 375px) {
  .input-container {
    input {
      height: 0.75rem;
    }

    .hint-text {
      bottom: -1.8rem;
    }
  }
}
</style>
