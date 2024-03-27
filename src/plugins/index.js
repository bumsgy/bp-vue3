// import { createPinia } from 'pinia'

import vuetify from '@/plugins/vuetify.js'
import pinia from '@/plugins/encStore.js'
import router from '@/plugins/routerSetting.js'

export function registerPlugins(app) {
  app.use(router).use(pinia).use(vuetify)
}
