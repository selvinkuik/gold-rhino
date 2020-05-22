import Vue from 'vue'
import App from './App.vue'
import router from './router'

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),

  data() {
    return {
      windowHeight: 0
    }
  },

  mounted() {
    this.onResize = () => { this.windowHeight = window.innerHeight }
    window.addEventListener('resize', this.onResize)
  },

  beforeDestroy() { 
    window.removeEventListener('resize', this.onResize) 
  }
}).$mount('#app')

require('./assets/scss/app.scss');
