import originAxios from 'axios'
import { requestType } from '@/public/constants'
import * as requestInterceptors from '@/core/services/interceptors/request'
import * as responseInterceptors from '@/core/services/interceptors/response'

// 创建请求实例
const instance = originAxios.create({
  baseURL: `${import.meta.env.VITE_BASEURL}/api`,
  timeout: 30000,
})

// 加载请求拦截器
Object.values(requestInterceptors).forEach((fn) => {
  fn?.(instance)
})

// 加载响应拦截器
Object.values(responseInterceptors).forEach((fn) => {
  fn?.(instance)
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

export const get = (url, params) => request(url, params, requestType.get)
export const post = (url, params) => request(url, params, requestType.post)
export const patch = (url, params) => request(url, params, requestType.patch)
export const deleted = (url, params) => request(url, params, requestType.delete)
export const put = (url, params) => request(url, params, requestType.put)
