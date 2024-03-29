/*
 * copyrights
 *
 * Intellectual property rights, including copyrights, for the above programs are held by NMPLUS Co., Ltd.,
 *
 * and use, copying, alteration, disclosure to third parties, and distribution not expressly permitted by NMPLUS Co., Ltd. are strictly prohibited.
 * It is an infringement of intellectual property rights of NMPLUS Corporation.
 * (Copyright 2021. NMPLUS Co., Ltd. All rights reserved | Confidential)
 */
import router from '@/router/index.js'
import useLoginStore from '@/stores/basis/useLoginStore.js'
import pinia from '@/plugins/encStore.js'

router.beforeEach((to, from, next) => {
  console.log(`to : ${JSON.stringify(to.meta)}`)
  const login = useLoginStore(pinia)

  if (to.meta.requireAuth) {
    if (login.isLoggedIn) {
      next()
    } else {
      alert('로그인이 필요합니다.')
      next({ name: 'login', path: `/signin?rd=${from.name}` })
    }
  } else {
    next()
  }
})

export default router
