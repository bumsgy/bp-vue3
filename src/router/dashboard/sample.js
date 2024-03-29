/*
 * copyrights
 *
 * Intellectual property rights, including copyrights, for the above programs are held by NMPLUS Co., Ltd.,
 *
 * and use, copying, alteration, disclosure to third parties, and distribution not expressly permitted by NMPLUS Co., Ltd. are strictly prohibited.
 * It is an infringement of intellectual property rights of NMPLUS Corporation.
 * (Copyright 2021. NMPLUS Co., Ltd. All rights reserved | Confidential)
 */

// --- || import Layouts          || ------------------------------ //
import LoginLayout from '@/layouts/LoginLayout.vue'
import NoLoginLayout from '@/layouts/NoLoginLayout.vue'

// --- || import pages            || ------------------------------ //
const DashboardView = () => import('@/views/DashboardView.vue')
const LoginView = () => import('@/views/LoginView.vue')
const AboutView = () => import('@/views/AboutView.vue')

// -> dynamic loading X, No Lazy Loading
// import DashboardView from '@/views/DashboardView.vue'
// import LoginView from '@/views/LoginView.vue'
// import AboutView from '@/views/AboutView.vue'

const samplePages = [
  {
    path: '/dashboard',
    name: 'dashboard',
    component: DashboardView,
    meta: {
      layout: LoginLayout,
      requireAuth: true,
    },
  },
  {
    path: '/signin',
    name: 'login',
    component: LoginView,
    meta: {
      layout: NoLoginLayout,
      requireAuth: false,
    },
  },
  {
    path: '/dataInput',
    name: 'dataInput',
    // route level code-splitting
    // this generates a separate chunk (About.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: AboutView,
    meta: {
      layout: NoLoginLayout,
      requireAuth: false,
    },
  },
]

export default samplePages
