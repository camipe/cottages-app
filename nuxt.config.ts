// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['nuxt-primevue', '@nuxtjs/tailwindcss', '@nuxt/fonts', '@vueuse/nuxt',],
  primevue: {
    importPT: { as: 'Aura', from: '~/presets/aura' },
    options: {
      unstyled: true,
    },
    components: {
      prefix: 'P',
    },
  },
  fonts: {
    families: [
      // only resolve this font with the `google` provider
      { name: 'Montserrat', provider: 'google' },
    ],
    defaults: {
      weights: [300, 400, 600],
      styles: ['normal', 'italic'],
      subsets: [
        'latin',
      ],
    },
  },
})
