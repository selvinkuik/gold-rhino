import Vue from 'vue'
import VueScrollmagic from 'vue-scrollmagic'
import App from './App.vue'
import router from './router'

Vue.config.productionTip = false

Vue.use(VueScrollmagic)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')

require('./assets/scss/app.scss');
