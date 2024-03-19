import { createRouter, createWebHistory } from 'vue-router'

// --- || Views       || ----------------------------------------- //
import DashboardView from '@/views/DashboardView.vue'

// --- || Router      || ----------------------------------------- //
import samplePages from '@/router/dashboard/sample.js'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect: '/dashboard',
    },
    ...samplePages,
  ]
})

export default router
