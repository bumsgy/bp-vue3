/*
 * copyrights
 *
 * Intellectual property rights, including copyrights, for the above programs are held by NMPLUS Co., Ltd.,
 *
 * and use, copying, alteration, disclosure to third parties, and distribution not expressly permitted by NMPLUS Co., Ltd. are strictly prohibited.
 * It is an infringement of intellectual property rights of NMPLUS Corporation.
 * (Copyright 2021. NMPLUS Co., Ltd. All rights reserved | Confidential)
 */
import CryptoJS from 'crypto-js'

const secretKey = 'nmp'

function encrypt(data, key = secretKey) {
  return CryptoJS.AES.encrypt(data, key).toString()
}

function decrypt(data, key = secretKey) {
  return CryptoJS.AES.decrypt(data, key).toString(CryptoJS.enc.Utf8)
}

export { encrypt, decrypt }
