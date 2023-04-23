// TODO: 这个组件应该由npm包引入更加合理
const AuthUrl = ({ forceAuth = false, children, url }) => {
  const { permissionStore } = useStores()
  permissionStore.getPermissionList()
  console.log(permissionStore.urlPermissionRoutes, url)
  if (permissionStore.urlPermissionRoutes.includes(url) || forceAuth)
    return children
  else return children // <Redirect to="/auth/403" />
}

export default observer(AuthUrl)
