import Crypto from '@/utils/crypto'
import keyStore from '../tokenStore'

export const authHeaderConfig = (instance) => {
  instance.interceptors.request.use(
    (config) => {
      config.headers = {
        ...config?.headers,
        Authorization: localStorage.getItem('access_token') ?? '',
        'Content-Type': 'application/json;charset=UTF-8',
      }
      return config
    },
    (err) => Promise.reject(err)
  )
}

export const croptyGram = (instance) => {
  const a = 'fuckU'
  const AESKey = Crypto.initAESKey()
  keyStore.push(AESKey)
  // const key = '1234123412ABCDEF'
  const encrypt = Crypto.encryptByAES(a, AESKey)
  const decrypt = Crypto.decryptByAES(encrypt, AESKey)
  console.log(encrypt, 'de', decrypt)
  // instance.config.
}
