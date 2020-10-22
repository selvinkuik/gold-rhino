const path = require('path')
const PrerenderSPAPlugin = require('prerender-spa-plugin')

module.exports = {
  configureWebpack: () => {
    if (process.env.NODE_ENV !== 'production') return

    return {
      plugins: [
        new PrerenderSPAPlugin(
          path.resolve(__dirname, 'dist'), // Absolute path to compiled SPA
          ['/investment'],                 // List of routes to prerender
          {}                               // Options
        )
      ]
    }
  },
  css: {
    loaderOptions: {
      sass: {
        prependData: `@import '@/assets/scss/_variables.scss'; @import 'foundation-sites/scss/foundation';`
      }
    }
  }
}