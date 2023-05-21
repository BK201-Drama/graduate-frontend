export const getRecordById = (_id) => interGet('/record/getById', { _id })
export const masterGenerateExercise = (params) =>
  interPost('/exercise/generate', params) // 专家生成题目
export const studentGetExercise = (params) =>
  interGet('/record/getExercise', params) // 学生获取题目
