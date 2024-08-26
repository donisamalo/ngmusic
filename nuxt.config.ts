// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },

  // Global page headers
  app: {
    head: {
      title: 'ngmusic',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        {
          hid: 'description',
          name: 'description',
          content: 'ngmusic',
        },
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        {
          rel: 'preconnect',
          href: 'https://fonts.gstatic.com',
          crossorigin: 'anonymous',
        },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap',
        },
      ],
    },
    pageTransition: { name: 'page', mode: 'out-in' },
  },

  // Global CSS
  css: ['@/assets/scss/main.scss', '@/assets/icon/css/ngmusic.css'],

  // Auto import components
  components: [
    {
      path: '~/components',
      pathPrefix: false,
    },
  ],

  modules: ['@element-plus/nuxt'],

  runtimeConfig: {
    public: {
      NUXT_API_BASE_URL: process.env.NUXT_API_BASE_URL,
    },
  },
})
