import { getRoleList } from '@/domains/role/repository/index.repository'
import FormHeader from '@/shared/FormHeader'
import getTableData from '@/utils/tableApi'
import { PlusOutlined } from '@ant-design/icons'
import AddModal from './components/AddModal'
import getColumns from './configs/column.config'
import { formConfig } from './configs/form.config'

const Role = () => {
  const [formInstance] = Form.useForm()
  const { tableProps, refresh, search } = useAntdTable(
    getTableData(getRoleList),
    {
      form: formInstance,
    }
  )
  const columns = getColumns({ refresh })
  const { submit, reset } = search
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
            />
          </Tooltip>
        }
      />
      <Table columns={columns} {...tableProps} rowKey="_id" />
    </>
  )
}

export default Role
