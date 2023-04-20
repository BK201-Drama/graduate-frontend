export const findChildren = (root, array) => {
  if (_.isNil(root)) return []
  const children = array.filter((per) => per.permission_pid === root._id)
  return children
}

export const findRoots = (array) => {
  const roots = array.filter((per) => !per.permission_pid)
  return roots ?? []
}

export const concatTree = (root, children) => {
  root.children = children
  return root
}

export const renderTree = (roots, array) => {
  if (_.isNil(roots) || _.isEmpty(roots)) return []
  roots?.forEach((root) => {
    const children = findChildren(root, array)
    if (_.isNil(children) || _.isEmpty(children)) return []
    concatTree(root, children)
    renderTree(children, array)
  })
  return roots
}

export const permissionTree = (array) => {
  const roots = findRoots(array)
  const tree = renderTree(roots, array)
  return tree
}
