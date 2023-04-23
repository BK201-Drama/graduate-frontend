import { EditOutlined } from '@ant-design/icons'
import UpdateModal from '../components/UpdateModal'

const getColumns = () => {
  return [
    {
      title: '名称',
      dataIndex: 'role_name',
      key: 'role_name',
    },
    {
      title: '拥有权限',
      dataIndex: 'permissions',
      key: 'permissions',
      render: (permissions) => {
        return _.isEmpty(permissions)
          ? '无'
          : permissions.map((permission) => (
              <Tag key={permission._id}>{permission.permission_name}</Tag>
            ))
      },
    },
    {
      title: '操作',
      dataIndex: '_id',
      key: '_id',
      render: () => {
        return (
          <UpdateModal
            render={(onClick) => (
              <Button
                shape="circle"
                className="flex items-center justify-center text-[#fff] bg-[blue]"
                icon={<EditOutlined />}
                onClick={onClick}
              />
            )}
          />
        )
      },
    },
  ]
}

export default getColumns
