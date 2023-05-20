import {
  masterCreateReverse,
  masterReversingList,
  studentReversingList,
} from '@/domains/reversing/repository'
import FormHeader from '@/shared/FormHeader'
import getTableData from '@/utils/tableApi'
import { PlusOutlined } from '@ant-design/icons'
import AddModal from './components/AddModal'
import getColumns from './configs/column.config'
import { formConfig } from './configs/form.config'

const listApi = {
  [ROLE_TYPE.STUDENT]: studentReversingList,
  [ROLE_TYPE.MASTER]: masterReversingList,
}

// 面试题库管理(专家端才有)
const Reversing = () => {
  const [formInstance] = Form.useForm()
  const loginData = JSON.parse(localStorage.getItem('loginData'))
  const { tableProps, refresh, search } = useAntdTable(
    getTableData?.(listApi[loginData.role_id]),
    {
      form: formInstance,
    }
  )
  const columns = getColumns({
    refresh,
    role_id: loginData.role_id,
    stu_account: loginData.account,
  })
  const { submit, reset } = search
  return (
    <>
      <FormHeader
        formConfig={formConfig}
        formInstance={formInstance}
        submit={(field) => {
          if (field.reserve_date === NUMBER_ZERO)
            delete formInstance.setFieldValue({ reserve_date: undefined })
          submit?.()
        }}
        reset={reset}
        leftConfig={
          loginData.role_id === ROLE_TYPE.MASTER ? (
            <Tooltip title="发起预约" trigger="hover" placement="right">
              <AddModal
                defaultValue={{
                  reserve_name: loginData.user_name,
                  reserve_account: loginData.account,
                }}
                render={(onClick) => (
                  <Button
                    shape="circle"
                    className="flex items-center justify-center"
                    icon={<PlusOutlined />}
                    onClick={onClick}
                  />
                )}
                onOk={(params) => {
                  masterCreateReverse(params).then((res) => {
                    if (res?.data?.code === BACKEND_STATUS.SUCCESS) {
                      message.success('添加成功')
                      refresh?.()
                    }
                  })
                }}
              />
            </Tooltip>
          ) : (
            false
          )
        }
      />
      <Table columns={columns} {...tableProps} rowKey="_id" />
    </>
  )
}

export default observer(Reversing)
