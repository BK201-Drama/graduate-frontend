import React from 'react'
import { getUserList } from '@/domains/user/index.repository'
import getTableData from '@/utils/tableApi'

const User = () => {
  console.log(import.meta.env.VITE_BASEURL)
  const [formInstance] = Form.useForm()
  const { tableProps } = useAntdTable(getTableData(getUserList), {
    form: formInstance,
  })
  console.log(tableProps)
  return <div>User</div>
}

export default User
