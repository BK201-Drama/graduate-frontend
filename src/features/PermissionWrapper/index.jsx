import { permissionConfig } from './permission.config'

const PermissionWrapper = ({ forceShown = false, token, children }) => {
  const {
    permissionStore: { btnPermission },
  } = useStores()
  const isShown =
    forceShown ||
    !_.isEmpty(
      btnPermission.filter((per) => per.key === permissionConfig?.[token])
    )
  return isShown ? children : null
}

export default observer(PermissionWrapper)
