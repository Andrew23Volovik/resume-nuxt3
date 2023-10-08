// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  app: {
    baseURL: '/',
  },
  css: ['@/assets/styles/main.scss'],
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@import "@/assets/styles/_variables.scss";',
        },
      },
    },
  },
  runtimeConfig: {
    elasticHost: process.env.ELASTIC_HOST,
    elasticAppPassword: process.env.ELASTIC_APP_PASSWORD,
    elasticPort: process.env.ELASTIC_PORT,
    elasticUserName: process.env.ELASTIC_USER_NAME,

    dataBaseURL: process.env.DATABASE_URL,
    dataBaseAuth: process.env.DATABASE_AUTH_TOKEN,
  },
  modules: ['@nuxt/devtools', '@nuxtjs/eslint-module', '@vueuse/motion/nuxt'],
});
