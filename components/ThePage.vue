<script setup lang="ts">
import type { Ref } from 'vue';
import { ref, onMounted, nextTick, onUnmounted, useRouter, useRoute } from '#imports';

const arrayOfSlides: Ref<NodeListOf<HTMLElement> | []> = ref([]);

const currSection: Ref<number> = ref(0);
const sectionInMove: Ref<boolean> = ref(false);

const wheelMove = (e: WheelEvent): boolean => {
  if (e instanceof WheelEvent) {
    if (e.deltaY < 0 && !sectionInMove.value) {
      moveUp();
    } else if (e.deltaY > 0 && !sectionInMove.value) {
      moveDown();
    }
  }

  e.preventDefault();
  return false;
};

const moveUp = (): false | void => {
  if (sectionInMove.value) return false;
  currSection.value--;
  sectionInMove.value = true;

  if (currSection.value < 0) {
    currSection.value = arrayOfSlides?.value ? arrayOfSlides?.value?.length - 1 : 0;
  }

  moveToSection(currSection.value);
};

const moveDown = (): false | void => {
  if (sectionInMove.value) return false;
  currSection.value++;
  sectionInMove.value = true;

  if (currSection.value > arrayOfSlides.value.length - 1) {
    currSection.value = 0;
  }
  moveToSection(currSection.value);
};

const router = useRouter();
const moveToSection = (id: number): void => {
  const element = arrayOfSlides.value[id];
  element.children[0].scrollIntoView({ behavior: 'smooth' });

  router.push({ query: { page: id + 1 } });

  setTimeout(() => {
    sectionInMove.value = false;
  }, 200);
};

const route = useRoute();
onMounted(async () => {
  await nextTick();
  currSection.value = route.query.page ? Number(route.query.page) - 1 : 0;
  document.addEventListener('wheel', wheelMove, { passive: false });
  arrayOfSlides.value = document.querySelectorAll('#slide');
});

onUnmounted(() => {
  document.removeEventListener('wheel', wheelMove);
});
</script>

<template>
  <main class="page">
    <slot />
  </main>
</template>

<style scoped lang="scss">
.page {
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
</style>
