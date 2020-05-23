import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

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
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
