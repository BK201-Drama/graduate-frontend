import { getUserList } from '@/domains/user'
import FormHeader from '@/shared/FormHeader'
import getTableData from '@/utils/tableApi'
import { PlusOutlined } from '@ant-design/icons'
import AddModal from './components/AddModal'
import getColumns from './configs/column.config'
import { formConfig } from './configs/form.config'
import { createUser } from '@/domains/user'

const User = () => {
  const [formInstance] = Form.useForm()
  const { tableProps, refresh, search } = useAntdTable(
    getTableData(getUserList),
    { form: formInstance }
  )
  const { submit, reset } = search

  const columns = getColumns({ refresh })

  return (
    <>
      <FormHeader
        formConfig={formConfig}
        formInstance={formInstance}
        submit={submit}
        reset={reset}
        leftConfig={
          <Tooltip title="添加用户" trigger="hover" placement="right">
            <AddModal
              render={(onClick) => (
                <Button
                  shape="circle"
                  className="flex items-center justify-center"
                  icon={<PlusOutlined />}
                  onClick={onClick}
                />
              )}
              onOk={(params) => {
                createUser(params).then((res) => {
                  if (res?.data?.code === BACKEND_STATUS.SUCCESS) {
                    message.success('添加成功')
                    refresh?.()
                  }
                })
              }}
            />
          </Tooltip>
        }
      />
      <Table columns={columns} {...tableProps} rowKey="_id" />
    </>
  )
}

export default User
