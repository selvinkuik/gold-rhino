const path = require('path')

module.exports = {
  css: {
    loaderOptions: {
      sass: {
        prependData: `@import "@/assets/scss/_variables.scss"; @import 'foundation-sites/scss/foundation';`
      }
    }
  }
};