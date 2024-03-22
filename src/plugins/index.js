import router from '@/router/index.js'

import { createPinia } from 'pinia'

import { useLoginStore } from '@/stores/login.js'

const pinia = createPinia()

import vuetify from '@/plugins/vuetify.js'

router.beforeEach((to, from, next) => {
  console.log(`to : ${JSON.stringify(to.meta)}`)
  const login = useLoginStore(pinia)

  if (to.meta.requireAuth) {
    if (login.isLoggedIn) {
      next()
    } else {
      alert('로그인이 필요합니다.')
      next({ name: 'login' })
    }
  } else {
    next()
  }
})

export function registerPlugins(app) {
  app.use(router).use(pinia).use(vuetify)
}
