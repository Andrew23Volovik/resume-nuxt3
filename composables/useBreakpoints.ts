import type { ComputedRef, Ref } from 'vue';
import { computed, onMounted, onUnmounted, ref } from '#imports';

interface IBreakpoints {
  sm: string;
  md: string;
  lg: string;
  xl: string;
  '2xl': string;
}

const breakpoints: IBreakpoints = {
  sm: '(min-width: 320px) and (max-width: 767px)',
  md: '(min-width: 768px) and (max-width: 1023px)',
  lg: '(min-width: 1024px) and (max-width: 1439px)',
  xl: '(min-width: 1440px) and (max-width: 2559px)',
  '2xl': '(min-width: 2560px)',
};

interface IReturnBreakpoints {
  height: ComputedRef<number>;
  width: ComputedRef<number>;
  screenType: ComputedRef<'sm' | 'md' | 'lg' | 'xl' | '2xl'>;
}

export const useBreakpoints = (): IReturnBreakpoints => {
  const windowWidth: Ref<number> = ref(0);
  const windowHeight: Ref<number> = ref(0);
  const mediaQuery: Ref<string> = ref('');
  const onWidthChange = (): void => {
    windowWidth.value = window.innerWidth;
    windowHeight.value = window.innerHeight;

    for (const key in breakpoints) {
      const query: MediaQueryList = window.matchMedia(breakpoints[key as keyof typeof breakpoints]);
      if (query.matches) {
        mediaQuery.value = query.media;
      }
    }
  };

  const screenType: ComputedRef<'sm' | 'md' | 'lg' | 'xl' | '2xl'> = computed(() => {
    if (mediaQuery.value) {
      return Object.keys(breakpoints).find(
        (value) => breakpoints[value as keyof typeof breakpoints] === mediaQuery.value,
      ) as 'sm' | 'md' | 'lg' | 'xl' | '2xl';
    }
    return '2xl';
  });

  const width: ComputedRef<number> = computed(() => windowWidth.value);
  const height: ComputedRef<number> = computed(() => windowHeight.value);

  onMounted(() => {
    windowWidth.value = window.innerWidth;
    windowHeight.value = window.innerHeight;

    onWidthChange();
    window.addEventListener('resize', onWidthChange);
  });

  onUnmounted(() => window.removeEventListener('resize', onWidthChange));

  return { width, height, screenType };
};
