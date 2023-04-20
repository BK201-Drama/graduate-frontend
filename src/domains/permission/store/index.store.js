import { getPermission } from '../repository/index.repository'
import { PERMISSION_TYPE } from '@/public/constants'
import { permissionTree } from './utils'
import { fromPermissionToRouteMapper } from './mapper'

class PermissionStore {
  constructor() {
    makeAutoObservable(this)
  }

  permissionList = []

  urlPermission = []
  btnPermission = []

  getPermissionList = async () => {
    const res = await getPermission()
    this.permissionList = (res?.data?.data ?? []).map(
      fromPermissionToRouteMapper
    )
    this.btnPermission = this.permissionList.filter(
      (permission) => permission.type === PERMISSION_TYPE.btn
    )
    this.urlPermission = this.permissionList.filter(
      (permission) => permission.type === PERMISSION_TYPE.url
    )
  }

  get permissionTree() {
    return permissionTree(this.urlPermission)
  }
}

export const permissionStore = new PermissionStore()
export const permissionKey = 'permissionStore'