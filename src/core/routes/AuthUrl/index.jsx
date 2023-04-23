import { navHelper } from '../navHelper'

// TODO: 这个组件应该由npm包引入更加合理
const AuthUrl = ({ forceAuth = false, children }) => {
  const location = useLocation()
  const navInstance = navHelper()
  const { permissionStore } = useStores()
  permissionStore.getPermissionList()
  if (location.pathname === '/') {
    navInstance.toUserList()
  }

  if (
    permissionStore.urlPermissionRoutes.includes(location.pathname) ||
    forceAuth
  )
    return children
  else return null
}

export default observer(AuthUrl)
