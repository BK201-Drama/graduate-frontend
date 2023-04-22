const PermissionSelector = ({ value, onChange }) => {
  const { permissionStore } = useStores()
  useEffect(() => {
    permissionStore.getAllPermission()
  }, [])
  return (
    <Select
      value={value}
      onChange={onChange}
      options={permissionStore.allPermission.map(({ _id, label }) => ({
        value: _id,
        label,
      }))}
      mode="multiple"
      allowClear={true}
    />
  )
}

export default observer(PermissionSelector)
