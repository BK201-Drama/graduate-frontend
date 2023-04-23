export const getUserList = (params) => get('/user/list', params)
export const updateUser = (params) => patch('/user/update', params)
export const createUser = (params) => post('/user/create', params)
export const deleteUser = (account) => deleted('/user/delete', { account })
export const setActivation = (account) =>
  post('/user/set-activation', { account })
