const PermissionSelector = ({ value, onChange }) => {
  const { permissionStore } = useStores()
  permissionStore.getAllPermission()
  return (
    <Select
      value={value}
      onChange={onChange}
      options={permissionStore.allPermission.map(({ _id, title }) => ({
        value: _id,
        label: title,
      }))}
      mode="multiple"
      allowClear={true}
    />
  )
}

export default observer(PermissionSelector)
