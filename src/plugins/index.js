/*
 * copyrights
 *
 * Intellectual property rights, including copyrights, for the above programs are held by NMPLUS Co., Ltd.,
 *
 * and use, copying, alteration, disclosure to third parties, and distribution not expressly permitted by NMPLUS Co., Ltd. are strictly prohibited.
 * It is an infringement of intellectual property rights of NMPLUS Corporation.
 * (Copyright 2021. NMPLUS Co., Ltd. All rights reserved | Confidential)
 */
import vuetify from '@/plugins/vuetify.js'
import pinia from '@/plugins/encStore.js'
import router from '@/plugins/routerSetting.js'

export default function registerPlugins(app) {
  app.use(router).use(pinia).use(vuetify)
}
