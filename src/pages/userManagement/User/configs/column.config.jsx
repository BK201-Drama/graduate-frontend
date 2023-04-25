import { deleteUser, updateUser, setActivation } from '@/domains/user'
import PermissionWrapper from '@/features/PermissionWrapper'
import { DeleteOutlined, EditOutlined } from '@ant-design/icons'
import DeleteModal from '../components/DeleteModal'
import UpdateModal from '../components/UpdateModal'

const iconStyle =
  'cursor-pointer text-[#fff] text-[18px] w-[30px] h-[30px] flex justify-center items-center rounded-[15px]'

const getColumns = ({ refresh }) => {
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
      render: (activation_status, { account }) => {
        return (
          <Switch
            checkedChildren="激活"
            unCheckedChildren="未激活"
            defaultChecked={Number(activation_status)}
            onChange={() => {
              setActivation(account).then(() => {
                message.success('激活成功')
                refresh()
              })
            }}
          />
        )
      },
    },
    {
      title: '操作',
      dataIndex: 'account',
      key: 'account',
      render: (account, record) => {
        return (
          <div className="flex gap-[5px]">
            <PermissionWrapper token="deleteUser">
              <DeleteModal
                render={(onClick) => (
                  <DeleteOutlined
                    className={`${iconStyle} bg-[red]`}
                    onClick={onClick}
                  />
                )}
                onOk={() => {
                  deleteUser?.(account)?.then((res) => {
                    if (res?.data?.code === BACKEND_STATUS.SUCCESS) {
                      message.success('删除用户成功')
                      refresh?.()
                    }
                  })
                }}
              ></DeleteModal>
            </PermissionWrapper>

            <PermissionWrapper token="updateUser">
              <UpdateModal
                render={(onClick) => (
                  <EditOutlined
                    className={`${iconStyle} bg-[blue]`}
                    onClick={onClick}
                  />
                )}
                onOk={(params) => {
                  updateUser?.(params).then((res) => {
                    if (res?.data?.code === BACKEND_STATUS.SUCCESS) {
                      message.success('修改用户成功')
                      refresh?.()
                    }
                  })
                }}
                defaultValue={record}
              />
            </PermissionWrapper>
          </div>
        )
      },
    },
  ]
}

export default getColumns
