import originAxios from 'axios';

// 创建请求实例
const instance = originAxios.create({
  baseURL: 'http://10.39.10.199:8080/api',
  timeout: 30000,
});

// 封装
export const post = (url, data) => {
  return new Promise((resolve, reject) => {
    instance?.({
      method: 'post',
      url,
      data,
      headers: {
        'Content-Type': 'application/json;charset=UTF-8',
      },
      validateStatus: () => true,
    })
      .then((res) => resolve(res))
      .catch((err) => {
        message.error('请求异常');
        reject(err);
      })
      .finally(() => {
        // TODO: 添加加载spin
      });
  });
};

export const get = (url, params) => {
  return new Promise((resolve, reject) => {
    instance?.({
      method: 'get',
      url,
      params,
      headers: {
        'Content-Type': 'application/json;charset=UTF-8',
      },
      validateStatus: () => true,
    })
      .then((res) => resolve(res))
      .catch((err) => {
        message.error('请求异常');
        reject(err);
      })
      .finally(() => {
        // TODO: 添加加载spin
      });
  });
};
