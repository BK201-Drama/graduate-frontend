import Crypto from '@/utils/crypto'
import keyStore from '../tokenStore'

export const authHeaderConfig = (instance) => {
  instance.interceptors.request.use(
    (config) => {
      config.headers = {
        ...config?.headers,
        Authorization: localStorage.getItem('access_token') ?? '',
        'Content-Type': 'application/json;charset=UTF-8',
        'Cache-Control': 'no-store',
        'Content-Security-Policy': "default-src 'self'",
        'Access-Control-Allow-Origin': 'https://127.0.0.1:5173',
      }
      return config
    },
    (err) => Promise.reject(err)
  )
}

export const cryptoGram = (instance) => {
  instance.interceptors.request.use(
    (config) => {
      const AESKey = Crypto.initAESKey()
      keyStore.push(AESKey)
      const AESCryptoKey = Crypto.encryptByRSA(
        AESKey,
        import.meta.env.VITE_RSA_PUBLIC_KEY
      )
      if (!_.isNil(config.data))
        config.data = {
          data: Crypto.encryptByAES(JSON.stringify(config.data), AESKey),
          AESCryptoKey,
        }
      if (!_.isNil(config.params))
        config.params = {
          params: Crypto.encryptByAES(JSON.stringify(config.params), AESKey),
          AESCryptoKey,
        }
      return config
    },
    (err) => Promise.reject(err)
  )
}
