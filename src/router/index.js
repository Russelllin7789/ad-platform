import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'ad-platform',
    component: () => import('../views/AdPlatform.vue')
  },
  {
    path: '*',
    name: 'not-found',
    component: () => import('../views/NotFound.vue')
  }
]

const router = new VueRouter({
  linkExactActiveClass: 'active',
  routes
})

export default router
