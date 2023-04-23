export const fromPermissionToRouteMapper = (urlPermission) => {
  const { permission_name, _id, permission_pid, api_route_name, type } =
    urlPermission
  return {
    label: permission_name,
    key: api_route_name,
    _id,
    permission_pid,
    type,
  }
}

export const fromPermissionToTreeMapper = (permission) => {
  const { permission_name, _id, permission_pid, type } = permission
  return {
    title: permission_name,
    key: _id,
    _id,
    permission_pid,
    type,
  }
}
