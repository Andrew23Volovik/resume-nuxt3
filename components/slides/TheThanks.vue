<script setup lang="ts">
import type { ComputedRef, Ref } from 'vue';
import type { ISender, JSONResponse } from '~/server/types/types';
import { ref, reactive, computed } from '#imports';
import { checkUserEmail, checkUserName } from '~/utils/formValidators';

defineProps<{
  dataIdx: number;
}>();

const isVisible: Ref<boolean> = ref(false);

const userName: Ref<string> = ref('');
const userEmail: Ref<string> = ref('');
const userMessage: Ref<string> = ref('');

const validationErrors = reactive<{
  errName: string;
  errEmail: string;
  errMessage: string;
}>({
  errName: '',
  errEmail: '',
  errMessage: '',
});

const disabledButton: ComputedRef<boolean> = computed(() => {
  if (
    userName.value !== '' &&
    userEmail.value !== '' &&
    userMessage.value !== '' &&
    validationErrors.errName === '' &&
    validationErrors.errEmail === '' &&
    validationErrors.errMessage === ''
  ) {
    return false;
  } else {
    return true;
  }
});

const validationName = (): void => {
  validationErrors.errName = checkUserName(userName.value);
};
const validationEmail = (): void => {
  validationErrors.errEmail = checkUserEmail(userEmail.value);
};

const validationMessage = (): void => {
  if (userMessage.value === '') {
    validationErrors.errMessage = 'Message must not be empty';
  } else {
    validationErrors.errMessage = '';
  }
};
const submitForm = async (): Promise<void> => {
  try {
    const bodyUpload: ISender = {
      name: userName.value,
      email: userEmail.value,
      message: userMessage.value,
    };

    const { data: response } = await useFetch<JSONResponse>('/api/mail', {
      headers: { 'Content-Type': 'application/json' },
      method: 'POST',
      body: bodyUpload,
    });

    if (response.value) {
      isVisible.value = false;
    }
  } catch (err) {
    if (err instanceof Error) {
      throw showError({
        statusMessage: '404 Page not found.',
        statusCode: 404,
      });
    }
  }
};

const clearForm = (): void => {
  userName.value = '';
  userEmail.value = '';
  userMessage.value = '';

  validationErrors.errName = '';
  validationErrors.errEmail = '';
  validationErrors.errMessage = '';
};
</script>

<template>
  <UITheCard
    animation
    width="100%"
  >
    <div class="thank-wrapper">
      <h2>THANK YOU</h2>
      <p>
        "Programming is the modern alchemy, where lines of code serve as incantations, transforming the base metal of
        data into the gold of solutions. With each keystroke, we bridge the gap between human intent and machine
        execution, crafting bridges of understanding across the chasm of zeros and ones. In the realm of programming, we
        don't just write code; we write the future."
      </p>
      <UITheButton @click="isVisible = true">Contact</UITheButton>
    </div>
  </UITheCard>
  <Teleport to="body">
    <LazyUITheModal
      v-if="isVisible"
      v-model="isVisible"
      v-motion-pop
      @on-unmounted="clearForm"
    >
      <template #header>Contact form</template>
      <template #main>
        <form
          id="submitForm"
          style="display: flex; flex-direction: column; gap: 2rem"
        >
          <UITheInput
            v-model="userName"
            label="Name"
            type="text"
            :error-msg="validationErrors.errName"
            @input="validationName"
          />
          <UITheInput
            v-model="userEmail"
            label="Email"
            type="email"
            :error-msg="validationErrors.errEmail"
            @input="validationEmail"
          />
          <UITheTextarea
            v-model="userMessage"
            label="Your message"
            :error-msg="validationErrors.errMessage"
            @input="validationMessage"
          />
        </form>
      </template>
      <template #footer>
        <UITheButton
          for="submitForm"
          :disabled="disabledButton"
          @click="submitForm"
        >
          Send
        </UITheButton>
        <UITheButton @click="isVisible = false"> Close </UITheButton>
      </template>
    </LazyUITheModal>
  </Teleport>
</template>

<style scoped lang="scss">
.thank-wrapper {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  h2 {
    position: relative;
    text-transform: uppercase;
    font-size: 8rem;
    line-height: 8.25rem;
    letter-spacing: 10px;
    overflow: hidden;
    background: linear-gradient(90deg, $background-sec-color, $text-color, $background-sec-color) no-repeat;
    background-size: 80%;
    animation: animate 3s cubic-bezier(0.4, 0, 0.2, 1) infinite;
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: rgba($text-color, 0%);
  }
  p {
    color: $text-color;
    font-size: 1.25rem;
    line-height: 1.75rem;
    font-weight: 300;
    text-align: justify;
    text-justify: inter-word;
    text-indent: 2rem;
  }
}

@keyframes animate {
  0% {
    background-position: -500%;
  }
  100% {
    background-position: 500%;
  }
}

@media screen and (max-width: 1440px) {
  .thank-wrapper {
    h2 {
      font-size: 6rem;
    }
  }
}

@media screen and (max-width: 1024px) {
  .thank-wrapper {
    gap: 1rem;
    h2 {
      font-size: 5rem;
      line-height: 5.25rem;
    }
    p {
      font-size: 1rem;
      line-height: 1.25rem;
    }
  }
}
@media screen and (max-width: 768px) {
  .thank-wrapper {
    h2 {
      font-size: 4rem;
      line-height: 4.25rem;
    }
  }
}
@media screen and (max-width: 375px) {
  .thank-wrapper {
    h2 {
      font-size: 2rem;
      line-height: 2.25rem;
    }
    p {
      font-size: 0.75rem;
      line-height: 0.825rem;
    }
  }
}
</style>
