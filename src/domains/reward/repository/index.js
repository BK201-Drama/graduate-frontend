export const checkIn = (params) => post('/student/check-in', params)

export const refreshActiveTime = (params) =>
  post('/student/refresh-active-time', params)

export const getActiveTimeInTimePeriod = (params) =>
  get('/student/get-active-time', params)

export const addActiveVPrice = (params) =>
  post('/student/add-active-vprice', params)

// 获取当前签到和使用记录
export const getMyCurrentRecord = () => get('/student/get-current-record', {})
