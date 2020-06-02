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
    component: () => import('@/views/AboutUs.vue'),
    image: 'hover-about-us.jpg',
    meta: {
      title: 'About us | Gold Rhino'
    },
    name: 'About us',
    description: 'We are an investment company with a difference.',
    path: '/about-us',
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
    component: () => import('@/views/WhoWeAre.vue'),
    image: 'hover-who-we-are.jpg',
    meta: {
      title: 'Who we are | Gold Rhino'
    },
    name: 'Who we are',
    description: 'Meet the man behind Gold Rhino.',
    path: '/who-we-are',
    showInNav: true
  },
  {
    component: () => import('@/views/OurVision.vue'),
    image: 'hover-our-vision.jpg',
    meta: {
      title: 'Our vision | Gold Rhino'
    },
    name: 'Our vision',
    description: 'We have a deeper purpose than just business investment.',
    path: '/our-vision',
    showInNav: true
  },
  {
    component: () => import('@/views/SupportTheRhino.vue'),
    image: 'hover-support-the-rhino.jpg',
    meta: {
      title: 'Support the rhino | Gold Rhino'
    },
    name: 'Support the rhino',
    shortName: 'Support',
    description: 'What can you do to help?',
    path: '/support-the-rhino',
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
