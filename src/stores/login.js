import { defineStore } from 'pinia'
import axios from '@/utils/AxiosInstance.js'
import { computed, ref } from 'vue'
import { useRouter } from 'vue-router'
import StringUtils from '@/utils/StringUtils.js'

export const useLoginStore = defineStore('loginStore', () => {
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

    const success = (response) => {
      console.log('로그인 성공')
      const { accntId, accntRole, token } = response.data

      userInfo.value.accntId = response.data.accntId
      userInfo.value.accntRole = response.data.accntRole
      // userInfo.value.token = response.data.response.headers.get('AUTHORIZATION')

      console.log('--- route ---')
      console.log(router)
      router.push({ name: 'dashboard' })
    }

    const error = (error) => {
      alert(`로그인이 필요합니다. : error : ${error}`)
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
