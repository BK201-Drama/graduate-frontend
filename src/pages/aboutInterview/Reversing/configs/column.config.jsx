import { EditOutlined } from '@ant-design/icons'
import moment from 'moment'
import ReverseModal from '../components/ReverseModal'
import { studentReverse } from '@/domains/reversing/repository'

const reverse_status_map = {
  [0]: '未预约',
  [1]: '已预约',
}

const iconStyle =
  'text-[#fff] text-[18px] w-[30px] h-[30px] flex justify-center items-center rounded-[15px]'

const getColumns = ({ refresh, stu_account, role_id }) => {
  const action = {
    [ROLE_TYPE.MASTER]: [],
    [ROLE_TYPE.ADMIN]: [],
    [ROLE_TYPE.STUDENT]: [
      {
        title: '操作',
        dataIndex: '_id',
        key: '_id',
        render: (_id, record) => {
          return (
            <div className="flex gap-[5px]">
              <ReverseModal
                render={(onClick) =>
                  !record.reserve_status ? (
                    <EditOutlined
                      className={`${iconStyle} bg-[blue]`}
                      onClick={onClick}
                    />
                  ) : (
                    '-'
                  )
                }
                onOk={() => {
                  studentReverse({
                    _id,
                    current_time: new Date().valueOf(),
                    stu_account,
                  }).then((res) => {
                    if (res?.data?.code === BACKEND_STATUS.SUCCESS) {
                      message.success('添加成功')
                      refresh?.()
                    }
                  })
                }}
              />
            </div>
          )
        },
      },
    ],
  }
  return [
    {
      title: '账号',
      dataIndex: 'reserve_account',
      key: 'reserve_account',
    },
    {
      title: '专家名称',
      dataIndex: 'reserve_name',
      key: 'reserve_name',
    },
    {
      title: '开始时间',
      dataIndex: 'reserve_start',
      key: 'reserve_start',
      render: (reserve_start) =>
        moment(reserve_start).format('YYYY-MM-DD HH:mm') ?? '-',
    },
    {
      title: '结束时间',
      dataIndex: 'reserve_end',
      key: 'reserve_end',
      render: (reserve_end) =>
        moment(reserve_end).format('YYYY-MM-DD HH:mm') ?? '-',
    },
    {
      title: '预约状态',
      dataIndex: 'reserve_status',
      key: 'reserve_status',
      render: (reserve_status) => reverse_status_map[reserve_status],
    },
    ...action[role_id],
  ]
}

export default getColumns
