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
