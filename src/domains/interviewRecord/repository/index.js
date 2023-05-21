export const interviewListByStu = (params) =>
  interGet('/record/getList_stu', params)
export const interviewListByMas = (params) =>
  interGet('/record/getList_mas', params)
export const updateEvaluation = (params) => interPatch('/record/update', params)
