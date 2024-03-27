/*
 * copyrights
 *
 * Intellectual property rights, including copyrights, for the above programs are held by NMPLUS Co., Ltd.,
 *
 * and use, copying, alteration, disclosure to third parties, and distribution not expressly permitted by NMPLUS Co., Ltd. are strictly prohibited.
 * It is an infringement of intellectual property rights of NMPLUS Corporation.
 * (Copyright 2021. NMPLUS Co., Ltd. All rights reserved | Confidential)
 */
import { createPinia } from 'pinia'
import { storePlugin } from 'pinia-plugin-store'
import { encrypt, decrypt } from '@/utils/Crypto.js'

import resetStore from '@/plugins/resetStore.js'

const pinia = createPinia()

pinia.use(resetStore)

const encPlugin = storePlugin({
  stores: [{ name: 'loginStore' }],
  encrypt,
  decrypt,
})

pinia.use(encPlugin)

export default pinia
