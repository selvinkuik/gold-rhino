import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/Home.vue'
import NotFound from '@/views/NotFound.vue'

Vue.use(VueRouter)

const routes = [
  {
    component: Home,
    image: 'placeholder.jpg',
    meta: {
      title: 'Gold Rhino'
    },
    name: 'Home',
    path: '/'
  },
  {
    component: () => import('@/views/RhinoLabs.vue'),
    image: 'placeholder.jpg',
    meta: {
      title: 'Rhino Labs | Gold Rhino'
    },
    name: 'Rhino Labs',
    path: '/rhino-labs'
  },
  {
    component: () => import('@/views/Investment.vue'),
    image: 'placeholder.jpg',
    meta: {
      title: 'Investment | Gold Rhino'
    },
    name: 'Investment',
    path: '/investment'
  },
  {
    component: NotFound,
    meta: {
      title: 'Not found | Gold Rhino'
    },
    name: 'Not found',
    path: '*'
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

// This callback runs before every route change, including on page load.
router.beforeEach((to, from, next) => {
  // This goes through the matched routes from last to first, finding the closest route with a title.
  // eg. if we have /some/deep/nested/route and /some, /deep, and /nested have titles, nested's will be chosen.
  const nearestWithTitle = to.matched.slice().reverse().find(r => r.meta && r.meta.title)

  // If a route with a title was found, set the document (page) title to that value.
  if(nearestWithTitle) document.title = nearestWithTitle.meta.title

  return next()
})

export default router
