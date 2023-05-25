const WEEK_DELTA = 6

export const week = () => {
  const nowDate = new Date()
  // 获取一周中的第一天所对应的日期
  const first = nowDate.getDate() - nowDate.getDay() + NUMBER_ZERO // getDate()从nowDate对象返回一个月中的某一天;getDay()从nowDate对象返回一周中的某一天
  const left = new Date(nowDate.setDate(first)) // setDate()设置nowDate对象中月的某一天;toUTCString()根据世界时，把nowDate对象转换为字符串。
  // 获取一周中的最后一天所对应的日期
  const last = first + WEEK_DELTA // last day is the first day + 6
  const right = new Date(nowDate.setDate(last))
  return [left, right]
}

export const month = () => {
  const now = new Date()
  const year = now.getFullYear() // 获取年份
  const nowmonth = now.getMonth() // 获取月份
  // 获取第一天日期
  const left = new Date(year, nowmonth, NUMBER_ONE).valueOf()
  // 获取最后一天日期
  const right = new Date(year, nowmonth + NUMBER_ONE, NUMBER_ZERO).valueOf()
  return [left, right]
}
