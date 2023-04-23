const PermissionTreeSelector = ({ defaultCheckedKeys = [], onCheck }) => {
  const { permissionStore } = useStores()

  const check = (e) => {
    onCheck?.(e)
  }
  return (
    <Tree
      treeData={permissionStore.allPermissionTree}
      defaultCheckedKeys={defaultCheckedKeys}
      onCheck={check}
      checkable
      defaultExpandAll
    />
  )
}

export default observer(PermissionTreeSelector)
