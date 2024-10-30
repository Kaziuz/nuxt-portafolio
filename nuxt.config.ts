// https://nuxt.com/docs/api/configuration/nuxt-config

import svgLoader from 'vite-svg-loader'

export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["@nuxtjs/tailwindcss", "@nuxt/content", '@nuxt/image'],
  css: ['~/assets/css/main.css'],
  vite: {
    plugins: [
      svgLoader({})
    ]
  },
  components: [
    { path: '~/components'}
  ]
})