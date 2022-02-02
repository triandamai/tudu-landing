export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: "Opins - Nuxt.js App landing page Template",
    htmlAttrs: {
      lang: "en",
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "" },
      { name: "format-detection", content: "telephone=no" },
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
    link: [
      {
        rel: "stylesheet",
        href: "//fonts.googleapis.com/css?family=Roboto:300,400,500,700,900",
      },
    ],
  },

  loading: { color: "#E94FCA", height: "4px" },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    "~/assets/css/animate.css",
    "~/assets/css/bootstrap.min.css",
    "~/assets/css/font-awesome.min.css",
    "~/assets/vendors/opins-icon/style.css",
    "~/assets/css/style.css",
    "~/assets/css/responsive.css",
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
  generate: {
    dir: "build",
  },
};
