module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'Wikipedia Search AppLication',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Wikipedia search application' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Roboto:300,400,500,700|Material+Icons'}                                 //
    ]
  },
  plugins: ['~plugins/vuetify.js'],
  css: ['~assets/app.styl'],               
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#282828' },
  /*
  ** Build configuration
  */
  build: {
    vendor: ['axios', 'vuetify'],
    assetsPublicPath: '/',
    assetsSubDirectory: 'static'
  }
}