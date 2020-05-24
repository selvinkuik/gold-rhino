import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import NotFound from '../views/NotFound.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    image: 'placeholder.jpg',
    component: Home
  },
  {
    path: '/about-us',
    name: 'About us',
    image: 'placeholder.jpg',
    component: () => import('../views/AboutUs.vue')
  },
  {
    path: '/investment',
    name: 'Investment',
    image: 'placeholder.jpg',
    component: () => import('../views/Investment.vue')
  },
  {
    path: '*', component: NotFound
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
