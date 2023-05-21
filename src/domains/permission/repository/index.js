export const getPermission = (params) => get('/user/permission-list', params)
export const getAllPermission = () => get('/permission/list')
export const addPermission = (params) => post('/permission/create', params)
