const getColumns = () => {
  return [
    { title: '名称', dataIndex: 'user_name', key: 'user_name' },
    { title: '账户', dataIndex: 'account', key: 'account' },
    {
      title: '角色',
      dataIndex: 'role',
      key: 'role',
      render: (role) => role.role_name,
    },
    {
      title: '激活状态',
      dataIndex: 'activation_status',
      key: 'activation_status',
    },
  ]
}

export default getColumns
