<script setup lang="ts"></script>

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
