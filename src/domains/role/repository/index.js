export const chooseRole = () => get('/role/options')
export const getRoleList = (params) => get('/role/list', params)
export const updateRole = (params) => patch('/role/update', params)
export const createRole = (params) => post('/role/create', params)
