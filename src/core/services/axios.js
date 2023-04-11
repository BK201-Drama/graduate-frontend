import originAxios from 'axios'
import { requestType } from '@/public/constants'

// 创建请求实例
const instance = originAxios.create({
  baseURL: `${import.meta.env.VITE_BASEURL}/api`,
  timeout: 30000,
})

const request = (url, params, type) => {
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
      headers: {
        'Content-Type': 'application/json;charset=UTF-8',
      },
      validateStatus: () => true,
    })
      .then((res) => resolve(res))
      .catch((err) => {
        message.error('请求异常')
        reject(err)
      })
      .finally(() => {
        // TODO: 添加加载spin
      })
  })
}

export const get = (url, params) => request(url, params, requestType.get)
export const post = (url, params) => request(url, params, requestType.post)
export const patch = (url, params) => request(url, params, requestType.patch)
export const deleted = (url, params) => request(url, params, requestType.delete)
export const put = (url, params) => request(url, params, requestType.put)
