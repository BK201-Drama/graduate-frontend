export const masterReversingList = (params) => {
  const loginData = JSON.parse(localStorage.getItem('loginData'))
  return interPost('/reserve/getList_mas', {
    ...params,
    ...(loginData.role_id === ROLE_TYPE.MASTER
      ? { reserve_account: loginData.account }
      : {}),
  })
}
export const studentReversingList = (params) =>
  interPost('/reserve/getList_stu', params)
export const studentReverse = (params) =>
  interPatch('/reserve/update_reserve_status', params)
export const masterCreateReverse = (params) =>
  interPost('/reserve/create', params)
