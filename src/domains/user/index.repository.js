export const getUserList = (params) => get('/user/list', params)
export const updateUser = (params) => patch('/user/update', params)
export const createUser = (params) => post('/user/create', params)
export const deleteUser = (account) => deleted('/user/delete', { account })
export const setActivation = () => post('/user/set-activation')
// account,
// user_name,
// password,
// new_account,
// role_id,
