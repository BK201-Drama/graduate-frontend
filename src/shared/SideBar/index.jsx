import { Menu } from 'antd'

const SideBar = () => {
  const navigate = useNavigate()
  const path = useLocation()
  const { permissionStore } = useStores()

  return (
    <Menu
      items={permissionStore.permissionTree ?? []}
      mode="inline"
      className="bg-[#fff]"
      onSelect={({ key }) => navigate(key)}
      selectedKeys={[path.pathname]}
    />
  )
}

export default observer(SideBar)
