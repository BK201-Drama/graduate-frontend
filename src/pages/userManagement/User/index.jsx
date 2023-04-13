import React from 'react'
import { getUserList } from '@/domains/user/index.repository'
import getTableData from '@/utils/tableApi'
import getColumns from './column.config'

const User = () => {
  const [formInstance] = Form.useForm()
  const { tableProps } = useAntdTable(getTableData(getUserList), {
    form: formInstance,
  })
  const columns = getColumns()
  return (
    <>
      <div>User</div>
      <Table tableProps={tableProps} columns={columns} />
    </>
  )
}

export default User
