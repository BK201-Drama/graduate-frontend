const PermissionTreeSelector = ({ defaultCheckedKeys = [], onCheck }) => {
  const { permissionStore } = useStores()
  const shownKeys = defaultCheckedKeys.filter((key) =>
    permissionStore.allPermission
      .filter(
        (permission) =>
          !permissionStore.allPermission
            .map((p) => p.permission_pid)
            .includes(permission._id)
      )
      .map((p) => p._id)
      .includes(key)
  )
  const [checkedKeys, setCheckedKeys] = useState(shownKeys)
  const check = (selectedKeys, { halfCheckedKeys }) => {
    setCheckedKeys(selectedKeys)
    onCheck?.(selectedKeys, halfCheckedKeys)
  }
  return (
    <Tree
      checkable
      defaultExpandAll
      treeData={permissionStore.allPermissionTree}
      onCheck={check}
      checkedKeys={checkedKeys}
      multiple={true}
    />
  )
}

export default observer(PermissionTreeSelector)
