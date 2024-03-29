/*
 * copyrights
 *
 * Intellectual property rights, including copyrights, for the above programs are held by NMPLUS Co., Ltd.,
 *
 * and use, copying, alteration, disclosure to third parties, and distribution not expressly permitted by NMPLUS Co., Ltd. are strictly prohibited.
 * It is an infringement of intellectual property rights of NMPLUS Corporation.
 * (Copyright 2021. NMPLUS Co., Ltd. All rights reserved | Confidential)
 */

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
  ],
})

export default router
