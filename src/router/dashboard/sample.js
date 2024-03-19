// --- || import Layouts          || ------------------------------ //
import LoginLayout from '@/layouts/LoginLayout.vue'
import NoLoginLayout from '@/layouts/NoLoginLayout.vue'

// --- || import pages            || ------------------------------ //
import DashboardView from '@/views/DashboardView.vue'
import LoginView from '@/views/LoginView.vue'

import AboutView from '@/views/AboutView.vue'

const samplePages = [
  {
    path: '/dashboard',
    name: 'dashboard',
    component: DashboardView,
    meta: {
      layout: LoginLayout,
      requireAuth: true
    }
  },
  {
    path: '/singin',
    name: 'login',
    component: LoginView,
    meta: {
      layout: NoLoginLayout,
      requireAuth: false
    }
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
      requireAuth: false
    }
  }
]

export default samplePages
