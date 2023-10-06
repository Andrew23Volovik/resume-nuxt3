<script lang="ts" setup>
import type { Ref } from 'vue';
import { ref, watch, onUnmounted } from '#imports';

const props = defineProps<{
  modelValue?: boolean;
}>();

const emits = defineEmits<{
  (event: 'update:modelValue', payload: boolean): void;
  (event: 'onUnmounted'): void;
}>();

const openModal = (): void => {
  emits('update:modelValue', true);
  document.addEventListener('mouseup', closeModalOnClickOutside);
};
const closeModal = (): void => {
  emits('update:modelValue', false);
  document.removeEventListener('mouseup', closeModalOnClickOutside);
};

const modal: Ref<HTMLDivElement | undefined> = ref();
const closeModalOnClickOutside = (e: MouseEvent): void => {
  const target = e.target as Node;
  if (modal.value) {
    if (!modal.value.contains(target)) {
      closeModal();
    }
  }
};

watch(
  () => props.modelValue,
  (value) => {
    if (value) {
      openModal();
    } else {
      closeModal();
    }
  },
  { immediate: true },
);

onUnmounted(() => {
  document.removeEventListener('mouseup', closeModalOnClickOutside);
  emits('onUnmounted');
});
</script>

<template>
  <div class="modal-backdrop">
    <div
      ref="modal"
      class="modal"
    >
      <header class="modal__header">
        <slot name="header"></slot>
      </header>
      <div class="modal__main">
        <slot name="main"></slot>
      </div>
      <footer class="modal__footer">
        <slot name="footer"></slot>
      </footer>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.modal-backdrop {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 100;

  .modal {
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    gap: 1rem;
    padding: 2rem;
    width: 32rem;
    background-color: $background-base-color;
    border-radius: 1rem;
    border: 1px solid $primary-color;
    box-shadow: 0.25rem 0.25rem 0.5rem rgba(243, 246, 244, 0.1);
    &__icon {
      position: absolute;
      color: white;
      width: 1.75rem;
      height: 1.75rem;
      top: 0;
      right: 0;
      transform: translate(-50%, 50%);
      transition: all 0.2s ease;
      cursor: pointer;
      &:hover {
        color: $primary-color;
      }
    }
    &__header {
      color: $text-color;
      font-size: 1.5rem;
      line-height: 1.75rem;
      font-weight: 500;
      text-align: center;
    }
    &__main {
      display: flex;
      flex-direction: column;
      gap: 2rem;
      flex: 1;
      width: 100%;
      align-self: start;
    }
    &__footer {
      display: flex;
      gap: 1rem;
    }
  }
}

@media screen and (max-width: 768px) {
  .modal-backdrop {
    .modal {
      width: 24rem;
    }
  }
}
@media screen and (max-width: 375px) {
  .modal-backdrop {
    .modal {
      width: 16rem;
    }
  }
}
</style>
