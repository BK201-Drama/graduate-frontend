import { CopyOutlined, EditOutlined, SendOutlined } from '@ant-design/icons'
import moment from 'moment'
import ExerciseModal from '../components/ExerciseModal'
import UpdateModal from '../components/UpdateModal'
import { updateEvaluation } from '@/domains/interviewRecord/repository'
const iconStyle =
  'text-[#fff] text-[18px] w-[30px] h-[30px] flex justify-center items-center rounded-[15px]'

const getColumns = ({ role_id, refresh, toInterview }) => {
  const masterAction =
    role_id === ROLE_TYPE.MASTER
      ? [
          {
            title: '操作',
            dataIndex: '_id',
            key: '_id',
            render: (_id, record) => {
              return (
                <div className="flex gap-[5px]">
                  <ExerciseModal
                    exercises={record.interview_exercises}
                    render={(click) => (
                      <CopyOutlined
                        className={`${iconStyle} bg-[#888]`}
                        onClick={click}
                      />
                    )}
                  />
                  <UpdateModal
                    defaultValue={record}
                    render={(click) => (
                      <EditOutlined
                        className={`${iconStyle} bg-[blue]`}
                        onClick={click}
                      />
                    )}
                    onOk={(e) => {
                      const params = { ...e, _id }
                      updateEvaluation(params).then((res) => {
                        if (res?.data?.code === BACKEND_STATUS.SUCCESS) {
                          message.success('修改面评成功')
                        }
                        refresh?.()
                      })
                    }}
                  />
                  <SendOutlined
                    className={`${iconStyle} bg-[#888]`}
                    onClick={() => {
                      toInterview?.(_id)
                    }}
                  />
                </div>
              )
            },
          },
        ]
      : [
          {
            title: '操作',
            dataIndex: '_id',
            key: '_id',
            render: (_id) => {
              return (
                <div className="flex gap-[5px]">
                  <SendOutlined
                    className={`${iconStyle} bg-[#888]`}
                    onClick={() => {
                      toInterview?.(_id)
                    }}
                  />
                </div>
              )
            },
          },
        ]
  return [
    {
      title: '专家账号',
      dataIndex: 'interview_mas',
      key: 'interview_mas',
    },
    {
      title: '学生账号',
      dataIndex: 'interview_stu',
      key: 'interview_stu',
    },
    {
      title: '面试开始时间',
      dataIndex: 'interview_start',
      key: 'interview_start',
      render: (interview_start) =>
        moment(interview_start).format('YYYY-MM-DD HH:mm') ?? '-',
    },
    {
      title: '面试结束时间',
      dataIndex: 'interview_end',
      key: 'interview_end',
      render: (interview_end) =>
        moment(interview_end).format('YYYY-MM-DD HH:mm') ?? '-',
    },
    {
      title: '房间号',
      dataIndex: 'interview_room',
      key: 'interview_room',
    },
    {
      title: '面试评价',
      dataIndex: 'interview_evaluation',
      key: 'interview_evaluation',
    },
    ...masterAction,
  ]
}

export default getColumns
