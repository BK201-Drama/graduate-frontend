import { DeleteOutlined, EditOutlined } from '@ant-design/icons'
import PermissionWrapper from '@/features/PermissionWrapper'

const iconStyle =
  'cursor-pointer text-[#fff] text-[18px] w-[30px] h-[30px] flex justify-center items-center rounded-[15px]'

const getColumns = ({ setActiviation, deleted, updated }) => {
  return [
    { title: '名称', dataIndex: 'user_name', key: 'user_name' },
    { title: '账户', dataIndex: 'account', key: 'account' },
    {
      title: '角色',
      dataIndex: 'role',
      key: 'role',
      render: (role) => {
        const [{ role_name }] = role
        return role_name
      },
    },
    {
      title: '激活状态',
      dataIndex: 'activation_status',
      key: 'activation_status',
      render: (activation_status) => {
        return (
          <Switch
            checkedChildren="激活"
            unCheckedChildren="未激活"
            defaultChecked={Number(activation_status)}
            onChange={(e) => {
              setActiviation?.(e)
            }}
          />
        )
      },
    },
    {
      title: '操作',
      dataIndex: 'account',
      key: 'account',
      render: (account) => {
        return (
          <div className="flex gap-[5px]">
            <PermissionWrapper token="deleteUser">
              <DeleteOutlined className={`${iconStyle} bg-[red]`} />
            </PermissionWrapper>

            <PermissionWrapper token="updateUser">
              <EditOutlined className={`${iconStyle} bg-[blue]`} />
            </PermissionWrapper>
          </div>
        )
      },
    },
  ]
}

export default getColumns
