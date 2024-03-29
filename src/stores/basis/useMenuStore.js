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
import { ref } from 'vue'

// --- || import Opensource lib       || ------------------------------ //

// --- || import project constants    || ------------------------------ //

// --- || import project lib          || ------------------------------ //
import { defineStore } from 'pinia'
import axios from '@/utils/AxiosInstance.js'

const useMenuStore = defineStore('menu', () => {
  const menus = ref([])
  const getMenus = async () => {
    const fetchApi = axios.get(`/api/menu`)

    const success = response => {
      const { dataset } = response.data

      menus.value = dataset.rows
    }

    const error = err => {
      alert(`에러가 발생했습니다. : error : ${err}`)
      // window.location.href = "/";
    }

    await fetchApi
      .then(success)
      .catch(error)
      .finally(() => {})

    // mock data
    menus.value = [
      {
        lvl: '1',
        menuId: 'menu1',
        menuType: '',
        upMenuId: '',
        programId: '',
        sortSeq: '',
        groupYn: '',
        menuName: 'Home',
        menuPath: '',
        icon: '',
        fileName: '',
      },
      {
        lvl: '1',
        menuId: 'menu2',
        menuType: '',
        upMenuId: '',
        programId: '',
        sortSeq: '',
        groupYn: '',
        menuName: '데이터',
        menuPath: '',
        icon: '',
        fileName: '',
      },
      {
        lvl: '1',
        menuId: 'menu1',
        menuType: '',
        upMenuId: '',
        programId: '',
        sortSeq: '',
        groupYn: '',
        menuName: '진단 및 평가',
        menuPath: '',
        icon: '',
        fileName: '',
      },
      {
        lvl: '2',
        menuId: 'menu22',
        menuType: '',
        upMenuId: '',
        programId: '',
        sortSeq: '',
        groupYn: '',
        menuName: '프레임워크 대응 관리',
        menuPath: '',
        icon: '',
        fileName: '',
      },
      {
        lvl: '1',
        menuId: 'menu1',
        menuType: '',
        upMenuId: '',
        programId: '',
        sortSeq: '',
        groupYn: '',
        menuName: '우리회사 ESG',
        menuPath: '',
        icon: '',
        fileName: '',
      },
    ]
  }

  return { menus, getMenus }
})

export default useMenuStore
