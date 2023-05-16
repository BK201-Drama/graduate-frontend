import Crypto from '@/utils/crypto'
import axios from 'axios'
import keyStore from '../tokenStore'

const axiosInstance = axios.create({
  baseURL: `${import.meta.env.VITE_BASEURL}/api`,
  timeout: 30000,
})

export const tokenJudgeConfig = (instance) => {
  instance?.interceptors.response.use(
    async (config) => {
      if (![config?.data?.code].includes(BACKEND_STATUS.NO_AUTH)) {
        return config
      } else {
        const tokenData = await axiosInstance.post('/updateAccessToken', {
          refresh_token: localStorage.getItem('refresh_token'),
        })
        if (tokenData.data.code === BACKEND_STATUS.SUCCESS) {
          const accessToken = tokenData.data?.data?.access_token
          localStorage.setItem('access_token', accessToken)
          config.headers = {
            ...config.headers,
            Authorization: accessToken,
          }
          const result = await instance?.(config.config)
          return result
        } else {
          localStorage.removeItem('access_token')
          localStorage.removeItem('refresh_token')
          window.location.pathname = '/login'
          return config
        }
      }
    },
    (error) => new Error(error)
  )
}

export const deCryptoGram = (instance) => {
  instance?.interceptors.response.use(
    (config) => {
      const data = JSON.parse(
        Crypto.decryptByAES(config.data, keyStore.shift())
      )
      config.data = data
      return config
    },
    (error) => new Error(error)
  )
}
