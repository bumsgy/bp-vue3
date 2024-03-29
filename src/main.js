/*
 * copyrights
 *
 * Intellectual property rights, including copyrights, for the above programs are held by NMPLUS Co., Ltd.,
 *
 * and use, copying, alteration, disclosure to third parties, and distribution not expressly permitted by NMPLUS Co., Ltd. are strictly prohibited.
 * It is an infringement of intellectual property rights of NMPLUS Corporation.
 * (Copyright 2021. NMPLUS Co., Ltd. All rights reserved | Confidential)
 */
import { createApp } from 'vue'
import App from './App.vue'

import registerPlugins from '@/plugins/index.js'

const app = createApp(App)

registerPlugins(app)

app.mount('#app')
