import { createRouter, createWebHashHistory, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHashHistory(),
  routes: [{
    path: '/', 
    component: () => import('../components/People.vue')
  }, {
    path: '/Show',
    component: () => import('../components/Show.vue')
  }, {
    path: '/People',
    component: () => import('../components/People.vue')
  }]
})

export default router
