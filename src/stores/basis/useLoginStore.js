/*
 * copyrights
 *
 * Intellectual property rights, including copyrights, for the above programs are held by NMPLUS Co., Ltd.,
 *
 * and use, copying, alteration, disclosure to third parties, and distribution not expressly permitted by NMPLUS Co., Ltd. are strictly prohibited.
 * It is an infringement of intellectual property rights of NMPLUS Corporation.
 * (Copyright 2021. NMPLUS Co., Ltd. All rights reserved | Confidential)
 */

// --- || import vue lib              || ------------------------------- //
import { computed, ref } from 'vue'

// --- || import Opensource lib       || ------------------------------ //
import { defineStore } from 'pinia'
import { useRouter } from 'vue-router'
// --- || import project constants    || ------------------------------ //

// --- || import project lib          || ------------------------------ //
import axios from '@/utils/AxiosInstance.js'
import StringUtils from '@/utils/StringUtils.js'

const useLoginStore = defineStore('loginStore', () => {
  const userInfo = ref({
    accntId: '',
    accntPw: '',
    accntNm: '',
    accntEmail: '',
    accntPhone: '',
    accntRole: '',
    token: '',
  })

  const router = useRouter()

  const isLoggedIn = computed(() => !StringUtils.isEmpty(userInfo.value.accntId))

  const login = async (id, pwd) => {
    const fetchAPI = axios.post(`/login`, {
      accntId: id,
      accntPw: pwd,
    })

    const success = response => {
      console.log('로그인 성공')
      const { accntId, accntRole, token } = response.data

      userInfo.value.accntId = response.data.accntId
      userInfo.value.accntRole = response.data.accntRole
      // userInfo.value.token = response.data.response.headers.get('AUTHORIZATION')

      //      .headers.Authorization = token
      axios.defaults.headers.common.Authorization = `Bearer ${token}`

      console.log('--- route ---')
      console.log(router)
      router.push({ name: 'dashboard' })
    }

    const error = err => {
      alert(`로그인이 필요합니다. : error : ${err}`)
      // window.location.href = "/";
    }

    await fetchAPI
      .then(success)
      .catch(error)
      .finally(() => {})
  }

  // const actions = {
  //     setLogin : (state, login) => state.login = login,
  //     setLoginInfo : (state, loginInfo) => state.loginInfo = loginInfo
  // }

  return { isLoggedIn, userInfo, login }
})
export default useLoginStore
