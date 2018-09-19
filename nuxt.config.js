module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'nuxt-distribution',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'vue vuex nuxt element axios' },
      { 'http-equiv': 'pragma', content: 'no-cache' },
      { 'http-equiv': 'cache-control', content: 'no-cache' },
      { 'http-equiv': 'expires', content: '0' },
      { content: 'telephone=no', name: 'format-detection' },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070' },
  /*
  ** Global CSS
  */
  css: [
    'element-ui/lib/theme-chalk/index.css',
    'assets/main.css'
  ],
  /*
  ** Add element-ui in our app, see plugins/element-ui.js file
  */
  plugins: [
    '@/plugins/element-ui'
  ],
  modules: [
    // 代理模块
    // '@nuxtjs/axios',
    // '@nuxtjs/proxy'
  ],
  /*
  ** 代理模块配置
  */
  // axios: { 
  //   prefix: '/api', 
  //   proxy: true // Can be also an object with default options 
  // }, 
  // proxy: {
  //   '/api': { 
  //     target: 'https://jsonplaceholder.typicode.com/', // api主机
  //     pathRewrite: { '^/api' : '/' }
  //   }
  // },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** Run ESLint on save
    */
    vendor: ['axios'],
    extend (config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  }
}

