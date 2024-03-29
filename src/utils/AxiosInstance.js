/*
 * copyrights
 *
 * Intellectual property rights, including copyrights, for the above programs are held by NMPLUS Co., Ltd.,
 *
 * and use, copying, alteration, disclosure to third parties, and distribution not expressly permitted by NMPLUS Co., Ltd. are strictly prohibited.
 * It is an infringement of intellectual property rights of NMPLUS Corporation.
 * (Copyright 2021. NMPLUS Co., Ltd. All rights reserved | Confidential)
 */
import axios from 'axios'
import { HOST } from '@/utils/Host.js'

// Authorization: this.$http.defaults.headers.common.Authorization,
const instance = axios.create({
  baseURL: HOST,
  timeout: 10000,
  withCredentials: true,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
})

const onSuccessRequest = config => {
  // if(config.authCheck) {
  //     let accessToken = window.sessionStorage.getItem('accessToken');
  //     if(accessToken === null || accessToken === undefined || accessToken.length == 0) {
  //         alert("로그인이 필요합니다.");
  //         window.location.href = "/";
  //         return true;
  //     }
  //     config.headers = {...config.headers, 'Authorization': `${accessToken}`}
  // }

  return config
}
const onFailureRequest = error => {
  return Promise.reject(error)
}

instance.interceptors.request.use(onSuccessRequest, onFailureRequest)

const onSuccessResponse = response => {
  return response
}

const onFailureResponse = error => {
  try {
    if (error.response.status === 401) {
      alert('로그인이 필요합니다.')
      window.location.href = '/'
      return null
    }
    if (error.response.status === 403) {
      alert('화면 접근 권한이 없습니다.')
      window.location.href = '/'
      return null
    }
  } catch (e) {
    console.log(e)
  }
  return Promise.reject(error)
}

instance.interceptors.response.use(onSuccessResponse, onFailureResponse)

export default instance
