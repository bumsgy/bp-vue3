/*
 * copyrights
 *
 * Intellectual property rights, including copyrights, for the above programs are held by NMPLUS Co., Ltd.,
 *
 * and use, copying, alteration, disclosure to third parties, and distribution not expressly permitted by NMPLUS Co., Ltd. are strictly prohibited.
 * It is an infringement of intellectual property rights of NMPLUS Corporation.
 * (Copyright 2021. NMPLUS Co., Ltd. All rights reserved | Confidential)
 */
const StringUtils = {
  /**
   * null 또는 undefined 일 경우 true를 반환한다.
   */
  isNull: str => {
    return !!(str === null || str === undefined)
  },
  /**
   * null 이거나, 길이가 0일 경우 true를 반환한다(undefined 포함)
   * 빈 값만 있을 경우에도 true를 반환한다.
   */
  isEmpty: str => {
    if (StringUtils.isNull(str)) {
      return true
    }
    return str.trim().length === 0
  },
  /**
   *
   */
  phoneFormatter: val => {
    if (typeof val === 'number') val += ''
    const num = val.replace(/[^0-9]/g, '')

    let retNum = ''
    if (num.length === 11) retNum = num.replace(/(\d{3})(\d{4})(\d{4})/, '$1-$2-$3')
    else if (num.length === 8) retNum = num.replace(/(\d{4})(\d{4})/, '$1-$2')
    else if (num.indexOf('02') === 0) retNum = num.replace(/(\d{2})(\d{4})(\d{4})/, '$1-$2-$3')
    else retNum = num.replace(/(\d{3})(\d{3})(\d{4})/, '$1-$2-$3')
    return retNum
  },
}

export default StringUtils
