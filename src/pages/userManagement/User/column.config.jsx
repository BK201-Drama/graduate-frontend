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
      render: () => {},
    },
  ]
}

export default getColumns
