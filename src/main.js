import Vue from 'vue'
import VueGtm from 'vue-gtm'
import VueScrollmagic from 'vue-scrollmagic'
import VueScreen from 'vue-screen'
import App from '@/App.vue'
import router from '@/router'

Vue.config.productionTip = false

if (process.env.NODE_ENV == 'production') {
  Vue.use(VueGtm, {
    id: 'GTM-N2L79KB',
    vueRouter: router
  })
}

Vue.use(VueScrollmagic)
Vue.use(VueScreen, 'foundation');

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')

require('@/assets/scss/app.scss')
