<script setup lang="ts">
defineProps<{
  label: string;
  modelValue?: string;
  errorMsg?: string;
}>();

defineEmits<{
  (event: 'update:modelValue', payload: string): void;
}>();
</script>

<template>
  <div class="form">
    <textarea
      id="message"
      class="form__field"
      :class="{ 'is-error': errorMsg }"
      rows="8"
      :placeholder="modelValue"
      :value="modelValue"
      @input="$emit('update:modelValue', ($event.target as HTMLTextAreaElement).value)"
    ></textarea>
    <label
      for="message"
      class="form__label"
      :class="{ 'is-error': errorMsg }"
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
  </div>
</template>

<style scoped lang="scss">
.form {
  position: relative;
  display: flex;
  align-items: flex-start;
  margin-bottom: 0.5rem;
  &__field {
    font-family: inherit;
    width: 100%;
    border: 0;
    border-bottom: 1px solid $text-color;
    outline: none;
    font-size: 1rem;
    line-height: 1.125rem;
    color: $primary-color;
    padding: 2rem 1rem;
    background: rgba($text-color, 10%);
    transition: border-color 0.2s;
    resize: vertical;
    &::placeholder {
      color: transparent;
    }
    &:placeholder-shown ~ .form__label {
      font-size: 1rem;
      cursor: text;
      top: 1.125rem;
    }
    &:focus {
      border-bottom: 0.125rem solid $primary-color;
    }
    &:focus ~ .form__label {
      position: absolute;
      top: 0;
      display: block;
      transition: 0.2s;
      font-size: 0.75rem;
      line-height: 1rem;
      color: $text-color;
    }
  }
  &__label {
    padding: 0 1rem;
    position: absolute;
    top: 0;
    display: block;
    color: $text-color;
  }

  .form__label.is-error {
    color: $error;
  }

  .form__field.is-error {
    border-bottom: 1px solid $error;
  }

  .hint-text {
    position: absolute;
    bottom: -1.1rem;
    left: 1rem;
    font-size: 0.8rem;
    line-height: 0.9rem;
    color: $text-color;
  }

  .hint-text.is-error {
    color: $error;
  }
}
</style>
