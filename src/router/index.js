import { createRouter, createWebHistory } from 'vue-router'
import Dashboard from '../pages/Dashboard.vue'
import CaraMengolahDetail from '../pages/CaraMengolahDetail.vue' // ✅ PATH DIPERBAIKI

const routes = [
  { path: '/', component: Dashboard },

  // ✅ DETAIL USADA
  { path: '/detail/:id', component: () => import('../pages/DetailUsada.vue') },

  // ✅ HALAMAN CARA MENGOLAH STEP BY STEP
  {
    path: '/cara-mengolah/:id/:step',
    name: 'caraMengolahDetail',
    component: CaraMengolahDetail
  },

  // ✅ RELASI (TETAP)
  { path: '/relasi', component: () => import('../pages/RelasiUsada.vue') }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
