export const exerciseList = (params = {}) => post('/exercise/getlist', params) // 题库列表
export const levelList = () => get('/exercise/getlevel') // 获取级别列表
export const typeList = () => get('/exercise/gettype') // 获取种类列表
export const create = (params) => post('/exercise/create', params) // 创建题目
export const update = (params) => patch('/exercise/create', params) // 更新题目
export const deleteExercise = (params) => deleted('/exercise/delete', params) // 删除题目
