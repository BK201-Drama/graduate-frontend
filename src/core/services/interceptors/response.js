export const tokenJudgeConfig = (instance) => {
  instance?.interceptors.response.use(
    async (config) => {
      if ([config.status, config.data.code].includes(BACKEND_STATUS.SUCCESS))
        return config
      else {
        const tokenData = await instance.post('/updateAccessToken', {
          refresh_token: localStorage.getItem('refresh_token'),
        })
        if (tokenData.data.code === BACKEND_STATUS.SUCCESS) {
          const accessToken = tokenData.data?.data?.access_token
          config.headers = {
            ...config.headers,
            Authorization: accessToken,
          }
          const result = await instance?.(config.config)
          return result
        } else {
          console.log('都过期了，傻逼')
        }
      }
    },
    async (error) => new Error(error)
  )
}
