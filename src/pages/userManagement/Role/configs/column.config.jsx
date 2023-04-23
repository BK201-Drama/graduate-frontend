import { EditOutlined } from '@ant-design/icons'
import UpdateModal from '../components/UpdateModal'
import { updateRole } from '@/domains/role/repository/index.repository'

const getColumns = ({ refresh }) => {
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
      render: (_id, render) => {
        return (
          <UpdateModal
            defaultValue={render}
            render={(onClick) => (
              <Button
                shape="circle"
                className="flex items-center justify-center text-[#fff] bg-[blue]"
                icon={<EditOutlined />}
                onClick={onClick}
              />
            )}
            onOk={(params) => {
              updateRole({ ...params, role_id: _id }).then((res) => {
                if (res?.data?.code === BACKEND_STATUS.SUCCESS) {
                  message.success('修改角色成功')
                  refresh?.()
                }
              })
            }}
          />
        )
      },
    },
  ]
}

export default getColumns
