import React from 'react'

const RoleSelector = ({ value, onChange }) => {
  const { roleStore } = useStores()
  roleStore.getRoleOptions()
  return (
    <Select options={roleStore.roleOptions} value={value} onChange={onChange} />
  )
}

export default observer(RoleSelector)
