const RoleSelector = ({ value, onChange }) => {
  const { roleStore } = useStores()
  roleStore.getRoleOptions()
  return (
    <Select
      options={roleStore.roleOptions}
      value={value}
      onChange={onChange}
      placeholder="请选择角色"
    />
  )
}

export default observer(RoleSelector)
