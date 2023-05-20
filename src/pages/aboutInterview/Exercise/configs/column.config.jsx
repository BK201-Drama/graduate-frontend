import { DeleteOutlined, EditOutlined } from '@ant-design/icons'
import UpdateModal from '../components/UpdateModal'
import DeleteModal from '../components/DeleteModal'
import { deleteExercise, update } from '@/domains/exercise/repository'

const iconStyle =
  'cursor-pointer text-[#fff] text-[18px] w-[30px] h-[30px] flex justify-center items-center rounded-[15px]'

const getColumns = ({ refresh, typeMap }) => {
  return [
    {
      title: '题目内容',
      dataIndex: 'exercise_desc',
      key: 'exercise_desc',
    },
    {
      title: '题目难度',
      dataIndex: 'exercise_level',
      key: 'exercise_level',
    },
    {
      title: '题目类型',
      dataIndex: 'exercise_type',
      key: 'exercise_type',
      render: (record) => typeMap[record] ?? '-',
    },
    {
      title: '操作',
      dataIndex: '_id',
      key: '_id',
      render: (_id, record) => {
        return (
          <div className="flex gap-[5px]">
            <DeleteModal
              render={(onClick) => (
                <DeleteOutlined
                  className={`${iconStyle} bg-[red]`}
                  onClick={onClick}
                />
              )}
              onOk={() => {
                deleteExercise?.({ _id })?.then((res) => {
                  if (res?.data?.code === BACKEND_STATUS.SUCCESS) {
                    message.success('删除题目成功')
                    refresh?.()
                  }
                })
              }}
            />
            <UpdateModal
              defaultValue={record}
              render={(onClick) => (
                <EditOutlined
                  className={`${iconStyle} bg-[blue]`}
                  onClick={onClick}
                />
              )}
              onOk={(params) => {
                update(params).then((res) => {
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
  ]
}

export default getColumns
