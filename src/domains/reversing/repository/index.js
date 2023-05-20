export const masterReversingList = (params) =>
  interPost('/reserve/getList_mas', params)
export const studentReversingList = (params) =>
  interPost('/reserve/getList_stu', params)
export const studentReverse = (params) =>
  interPatch('/reserve/update_reserve_status', params)
export const masterCreateReverse = (params) =>
  interPost('/reserve/create', params)
