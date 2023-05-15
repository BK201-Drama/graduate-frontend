import Crypto from '@/utils/crypto'
import axios from 'axios'

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

export const croptyGram = (instance) => {
  // const a = 'fuckU'

  const te = Crypto.decryptLongByRSA(
    '-----BEGIN RSA PRIVATE KEY-----MIICXQIBAAKBgQCAQInvsYerNG7jhMFKOwJr45o0jWFK06HfRrNAQgZJGSyu5xtD+nIeND6dxPblYukOG1r0H0ODvG7xserUKyO05sBl4hsNVxjn20DlwY8+Z5cNXbS3DlbiQ8XdtbdMeYu8ZjrPy797Xxo2HrUEr2w2VolOhhYM4EQtbAjHkfXS5QIDAQABAoGAO10kO8WB1bZEaZ2mVnSv7z5/vzl9wkPpVk8EY4bsH+O+MgsZLML9FYv7O83StmStGXGCDSN3fb+33roKx0BcmwvewpWJ1CBbwoEjY3u5C1XiVGqzfBMCJkkcITGJ36RYnXEHA4IK21xEp2l1VNnZTmDInxpbKEEVb3oYcYPAD/UCQQD6jbvhnSYIo7XBDELpXcwF/ULvP4PsBb+jynEW9e95zLD4yc0euceKOwrmOaQ9N2PdAtrS9orz0F70qkQIN2FPAkEAgwo6gIa70XegmKhuoYDbs6grHjHDyvqU1mTXyoDHACqCiBAd3bz0PNdfsak9mX0vfVtHSxm/NNH7arg7r5rziwJBAKF22U8psKr8pVKFDlHJqoNplMsNiXx+r+NjwMFlODCr4phRpCha3OaN6hY3q0nv+iEhh9dQHnfFHoxZdYI9/i0CQCcYiSXJjQXM3DRPpFo5GNN8LAkhLdpEct2YTq2TSEwrYrB3poF+m5v/YgSeistdhyqubhHhB6QZtho8B0q4P0sCQQDTBmzYmEnLGkMOVjRrWn+V1y0mhzmlwQOphNLgCXorQnau5aYHVVCJewISaWaqUDTlMLqBQZHaUbffR85d2UZS-----END RSA PRIVATE KEY-----',
    'gC/I1dNYnpypksK9J/W0ao5rF8cEmusAA1d6WUNZEEb8L/o9532eZ77aeS8C6QjTsjHXlUVImDuP9CDmuWDho2sK2lzkVjwC1/vlTcZVaTQQihCELd+6gkZSM04XFxRTvHqxq9YB3ngU+YR4LVqTPT/99fOfPshtHF55w8SdqBs='
  )
  console.log(te)
  // instance.config
}
