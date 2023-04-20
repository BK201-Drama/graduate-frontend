import React from 'react'
import { getUserList } from '@/domains/user/index.repository'
import getTableData from '@/utils/tableApi'
import getColumns from './column.config'

const User = () => {
  const [formInstance] = Form.useForm()
  const { tableProps } = useAntdTable(getTableData(getUserList), {
    form: formInstance,
  })
  const { permissionStore } = useStores()
  const columns = getColumns()
  useEffect(() => {
    permissionStore.getPermissionList()
  }, [])

  return (
    <>
      <div>User</div>
      <Table columns={columns} {...tableProps} rowKey="_id" />
    </>
  )
}

export default User
