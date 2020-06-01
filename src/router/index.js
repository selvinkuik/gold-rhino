import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/Home.vue'
import NotFound from '@/views/NotFound.vue'

Vue.use(VueRouter)

const routes = [
  {
    component: Home,
    meta: {
      title: 'Gold Rhino'
    },
    name: 'Home',
    path: '/',
    showInNav: true
  },
  {
    component: () => import('@/views/RhinoLabs.vue'),
    image: 'hover-rhino-labs.jpg',
    meta: {
      title: 'Rhino Labs | Gold Rhino'
    },
    name: 'Rhino Labs',
    description: 'An Accelerator Service to drive your business forward.',
    path: '/rhino-labs',
    showInNav: true
  },
  {
    component: () => import('@/views/Investment.vue'),
    image: 'hover-investment.jpg',
    meta: {
      title: 'Investment | Gold Rhino'
    },
    name: 'Investment',
    description: 'Complete this form so we can take a look at your business.',
    path: '/investment',
    showInNav: true
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

  setTimeout(() => {
    window.scrollTo(0, 0)
  }, 100)

  return next()
})

export default router
