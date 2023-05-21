import {
  interviewListByMas,
  interviewListByStu,
} from '@/domains/interviewRecord/repository'
import getTableData from '@/utils/tableApi'
import getColumns from './configs/column.config'
import { navHelper } from '@/core/routes/navHelper'

const listApi = {
  [ROLE_TYPE.STUDENT]: interviewListByStu,
  [ROLE_TYPE.MASTER]: interviewListByMas,
}

const paramsKey = {
  [ROLE_TYPE.STUDENT]: 'interview_stu',
  [ROLE_TYPE.MASTER]: 'interview_mas',
}

// 面试题库管理(专家端才有)
const Record = () => {
  const loginData = JSON.parse(localStorage.getItem('loginData'))
  const navInstance = navHelper()
  const { tableProps, refresh } = useAntdTable(
    getTableData?.(listApi[loginData.role_id], {
      [paramsKey[loginData.role_id]]: loginData.account,
    })
  )
  const columns = getColumns({
    role_id: loginData.role_id,
    refresh,
    toInterview: navInstance.toInterview,
  })
  return (
    <>
      <Table columns={columns} {...tableProps} rowKey="_id" />
    </>
  )
}

export default observer(Record)
