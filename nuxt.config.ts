// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  app: {
    baseURL: '/',
    head: {
      title: 'Resume',
      meta: [
        { charset: 'utf-8' },
        { name: 'author', content: 'Andrey Volovik' },
        {
          name: 'description',
          content:
            'Welcome to Andrey Volovik online resume. Explore my qualifications, skills, and professional experience. ' +
            "Learn how I can contribute to your organization's success.",
        },
      ],
      link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.png' }],
    },
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

    pgHost: process.env.PGHOST,
    pgDatabase: process.env.PGDATABASE,
    pgUser: process.env.PGUSER,
    pgPassword: process.env.PGPASSWORD,
  },
  modules: ['@nuxt/devtools', '@nuxtjs/eslint-module', '@vueuse/motion/nuxt'],
});
