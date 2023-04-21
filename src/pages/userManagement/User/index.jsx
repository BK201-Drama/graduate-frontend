import React from 'react'
import { getUserList, setActivation } from '@/domains/user/index.repository'
import getTableData from '@/utils/tableApi'
import getColumns from './column.config'

const User = () => {
  const [formInstance] = Form.useForm()
  const { tableProps, refresh } = useAntdTable(getTableData(getUserList), {
    form: formInstance,
  })

  const columns = getColumns({
    setActiviation: () => {
      setActivation().then(() => {
        message.success('激活成功')
        refresh()
      })
    },
    refresh,
  })

  return <Table columns={columns} {...tableProps} rowKey="_id" />
}

export default User
