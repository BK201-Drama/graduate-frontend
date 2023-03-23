import { Menu } from 'antd'

const items = [
  {
    label: '申论模块',
    key: '/examine/commentary',
  },
  {
    label: '用户管理',
    key: '/user-management',
    children: [
      {
        label: '用户列表',
        key: '/user-management/user',
      },
      {
        label: '角色列表',
        key: 'user-management/role',
      },
    ],
  },
]

const SideBar = () => {
  const navigate = useNavigate()
  return (
    <Menu
      items={items}
      mode="inline"
      className="bg-[#fff]"
      onClick={(e) => navigate(e.key)}
    />
  )
}

export default SideBar
