import { PlusCircleOutlined } from '@ant-design/icons'
import AddChildrenModal from '../components/AddChildrenModal'
import { PERMISSION_TYPE, PERMISSION_TYPE_NAME } from '@/public/constants'
import { addPermission } from '@/domains/permission/repository'
const iconStyle =
  'cursor-pointer text-[#fff] bg-[blue] text-[18px] w-[30px] h-[30px] flex justify-center items-center rounded-[15px]'

const getColumns = ({ refresh }) => {
  return [
    {
      title: 'id',
      key: '_id',
      dataIndex: '_id',
    },
    {
      title: '权限名称',
      key: 'title',
      dataIndex: 'title',
    },
    {
      title: '权限种类',
      key: 'type',
      dataIndex: 'type',
      render: (type) => PERMISSION_TYPE_NAME[type],
    },
    {
      title: '操作',
      key: '_id',
      dataIndex: '_id',
      render: (_id, record) => {
        if (record.type !== PERMISSION_TYPE.url) return '-'
        else
          return (
            <AddChildrenModal
              render={(click) => (
                <PlusCircleOutlined className={iconStyle} onClick={click} />
              )}
              onOk={(res) => {
                addPermission({ ...res, permission_pid: _id }).then(() => {
                  message.success('创建成功')
                  refresh?.(true)
                })
              }}
            />
          )
      },
    },
  ]
}

export default getColumns
