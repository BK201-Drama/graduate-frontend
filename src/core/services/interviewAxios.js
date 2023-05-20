import { requestType } from '@/public/constants'
import originAxios from 'axios'

// 创建请求实例
const instance = originAxios.create({
  baseURL: `${import.meta.env.VITE_INTERVIEW_BASEURL}/api`,
  timeout: 30000,
})

const request = (url, params = {}, type) => {
  let realData = {
    data: params,
  }
  if (type === requestType.get) {
    realData = {
      params,
    }
  }

  return new Promise((resolve, reject) => {
    instance?.({
      method: type,
      url,
      ...realData,
      validateStatus: () => true,
    })
      .then((res) => {
        if ([res?.data?.code].includes(BACKEND_STATUS.SUCCESS)) resolve(res)
        else
          message.error(
            res?.data?.msg ?? res?.data?.message ?? '系统错误，请联系管理员'
          )
      })
      .catch((err) => {
        message.error('网络错误请求异常，请稍后再试')
        reject(err)
      })
      .finally(() => {
        // TODO: 添加加载spin特效
      })
  })
}

export const interGet = (url, params) => request(url, params, requestType.get)
export const interPost = (url, params) => request(url, params, requestType.post)
export const interPatch = (url, params) =>
  request(url, params, requestType.patch)
export const interDeleted = (url, params) =>
  request(url, params, requestType.delete)
export const interPut = (url, params) => request(url, params, requestType.put)
