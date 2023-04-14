import { getPermission } from '../repository/index.repository'

class PermissionStore {
  constructor() {
    makeAutoObservable(this)
  }

  permissionList = []

  getPermissionList = () => {
    getPermission()
  }

  get permissionTree() {
    return []
  }
}

export const permissionStore = new PermissionStore()
export const permissionKey = 'permissionStore'
