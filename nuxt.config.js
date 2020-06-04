/* eslint-disable no-param-reassign */
// import faviconDescription from './faviconDescription.json';
import generateRoutes from './util/routes';

export default {
  mode: 'universal',
  render: {
    bundleRenderer: {
      shouldPreload: (file, type) => {
        if (type === 'font') { return /.woff2/.test(file); }
        return ['script', 'style'].includes(type);
      },
    },
  },
  /*
  ** Headers of the page
  */
  head() {
    const description = '';
    const keywords = [
    ];
    const title = '';

    return {
      title,
      titleTemplate: '%s | My Site',
      htmlAttrs: {
        lang: 'en-us',
      },
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { hid: 'description', name: 'description', content: description },
        { name: 'keywords', content: keywords.join() },
        // OpenGraph data (Most widely used)
        { hid: 'og:title', property: 'og:title', content: `${title} | My Site` },
        { property: 'og:site_name', content: '' },
        // The list of types is available here: http://ogp.me/#types
        { property: 'og:type', content: 'website' },
        { property: 'og:url', content: '' },
        { hid: 'og:description', property: 'og:description', content: description },
        /* eslint-disable-next-line global-require */
        { hid: 'og:image', property: 'og:image', content: '' },
        /* eslint-disable-next-line global-require */
        { hid: 'twitter:image', name: 'twitter:image', content: '' },

        // Twitter card
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:site', content: '@' },
        { hid: 'twitter:title', name: 'twitter:title', content: `${title} | My Site` },
        { hid: 'twitter:description', name: 'twitter:description', content: description },
        { name: 'twitter:creator', content: '@' },
      ],
      link: [
        {
          rel: 'preload', as: 'font', type: 'font/woff2', href: '/fonts/SourceSerif/WOFF2/VAR/SourceSerifVariable-Roman.ttf.subset.woff2', crossorigin: true,
        },
      ],
    };
  },
  env: {
    baseUrl: process.env.URL || 'http://localhost:3000',
    FIREBASE: {
      API_KEY: '',
      DATABASE_NAME: '',
      PROJECT_ID: '',
      SENDER_ID: '',
      APP_ID: '',
      MEASURMENT_ID: '',
    },
    ghost: {
      url: process.env.GHOST_URL || 'http://localhost:2368',
      apiKey: process.env.GHOST_API,
    },
  },
  generate: {
    fallback: true,
    // routes: generateRoutes,
  },
  // sitemap: {
  //   hostname: '',
  //   gzip: true,
  //   defaults: {
  //     changefreq: 'weekly',
  //     priority: 1,
  //     lastmod: new Date(),
  //     lastmodrealtime: true,
  //   },
  //   exclude: [
  //   ],
  // routes: generateRoutes,
  // },
  /* A
  ** Customize the progress-bar color
  */
  loading: { color: '#FEB674' }, // $secondary
  /*
  ** Global CSS. Though not in the sense that it includes in every component
  */
  css: [
    '@/assets/style/style.scss',
    '@/assets/style/fonts.css',
  ],
  /*
  ** Only mixins, functions, variables
  */
  styleResources: {
    scss: '@/assets/style/mixins.scss',
  },
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    // '@/plugins/firebase-init.js',
    '@/plugins/scroll-directive.js',
    '@/plugins/auth.client.js',
    '@/plugins/resize.client.js',
    '@/plugins/lazysizes.client.js',
    '@/plugins/atoms.js',
    // '@/plugins/analytics.client.js',
    '@/plugins/filters.js',
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
    // Doc: https://github.com/tettoffensive/eslint-module
    '@tettoffensive/eslint-module',
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    '@/modules/srcsetImageLoader',
    '@/modules/svgHtmlLoader',
    // Doc: https://bootstrap-vue.js.org
    'bootstrap-vue/nuxt',
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    '@nuxtjs/style-resources',
    // '@nuxtjs/sitemap',
    // 'nuxt-rfg-icon',
    '@nuxtjs/manifest',
    'nuxt-clipboard2',
  ],
  // 'rfg-icon': {
  //   static: true,
  //   staticPath: '/_favicons/',
  //   masterPicture: 'static/favicon.png',
  //   rfg: faviconDescription,
  // },
  bootstrapVue: {
    componentPlugins: [
      'ButtonPlugin',
      'NavbarPlugin',
      'CarouselPlugin',
      'FormGroupPlugin',
      'FormRadioPlugin',
      'FormTextareaPlugin',
      'AlertPlugin',
      'LinkPlugin',
      'FormCheckboxPlugin',
      'ProgressPlugin',
      'CollapsePlugin',
    ],
    bootstrapCSS: false, // Or `css: false`
    bootstrapVueCSS: false, // Or `bvCSS: false`
  },
  /*
  ** Axios module configuration
  ** See https://axios.nuxtjs.org/options
  */
  axios: {
  },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend(config, { isDev, isClient, loaders: { vue } }) {
      // lazysizes
      vue.transformAssetUrls.img = ['data-src', 'src'];
      vue.transformAssetUrls.source = ['data-srcset', 'srcset'];
      vue.transformAssetUrls['lazy-image'] = ['source-image', 'source-image-dark'];

      config.module.rules.push(
        {
          test: /\.md$/,
          loader: 'vue-loader!vue-md-loader',
        },
      );

      config.resolve.alias.config = isDev ? '~/config/development' : '~/config/production';

      if (isDev && !isClient) {
        // Neither of these seems to work great :(
        // config.devtool = isClient ? 'source-map' : 'inline-source-map';
        config.devtool = isClient ? 'eval-source-map' : 'inline-source-map';
      }
    },
  },
};
