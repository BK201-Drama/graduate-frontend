import { getUserList } from '@/domains/user/index.repository'
import FormHeader from '@/shared/FormHeader'
import getTableData from '@/utils/tableApi'
import getColumns from './configs/column.config'
import { formConfig } from './configs/form.config'

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
      />
      <Table columns={columns} {...tableProps} rowKey="_id" />
    </>
  )
}

export default User
