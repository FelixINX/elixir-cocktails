export default {
  target: 'static',
  ssr: false,
  modern: 'client',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Nuxt Starter',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: ['@nuxtjs/vuetify', '@nuxtjs/google-fonts', '@nuxtjs/pwa'],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},

  vuetify: {
    customVariables: ['~/assets/variables.scss'],
    optionsPath: './vuetify.options.js',
    defaultAssets: {
      font: false,
    },
    treeShake: true,
  },

  googleFonts: {
    families: {
      'Abhaya Libre': [400, 500, 700],
      Lora: [400, 500, 700],
    },
  },

  pwa: {
    icon: {
      source: '[srcDir]/[staticDir]/svg/icone.svg',
    },
  },
};
