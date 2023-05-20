export const exerciseList = (params = {}) =>
  interPost('/exercise/getlist', params) // 题库列表
export const levelList = () => interGet('/exercise/getlevel') // 获取级别列表
export const typeList = () => interGet('/exercise/gettype') // 获取种类列表
export const create = (params) => interPost('/exercise/create', params) // 创建题目
export const update = (params) => interPatch('/exercise/create', params) // 更新题目
export const deleteExercise = (params) =>
  interDeleted('/exercise/delete', params) // 删除题目
