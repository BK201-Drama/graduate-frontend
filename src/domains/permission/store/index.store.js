import { getPermission, getAllPermission } from '../repository/index.repository'
import { PERMISSION_TYPE } from '@/public/constants'
import { permissionTree } from './utils'
import {
  fromPermissionToRouteMapper,
  fromPermissionToTreeMapper,
} from './mapper'

class PermissionStore {
  constructor() {
    makeAutoObservable(this)
  }

  permissionList = []

  urlPermission = []
  btnPermission = []

  allPermission = []

  getPermissionList = async () => {
    if (!_.isEmpty(this.permissionList)) return
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

  getAllPermission = async () => {
    if (!_.isEmpty(this.allPermission)) return
    const res = await getAllPermission()
    this.allPermission = (res?.data?.data ?? []).map(fromPermissionToTreeMapper)
  }

  // 用于加载sideBar
  get permissionTree() {
    return permissionTree(this.urlPermission)
  }

  // 所有权限包括操作权限拼成一棵树，用于添加角色时的那颗权限树的加载
  get allPermissionTree() {
    return permissionTree(this.allPermission)
  }

  get urlPermissionRoutes() {
    return this.urlPermission.map((item) => item.key)
  }
}

export const permissionStore = new PermissionStore()
export const permissionKey = 'permissionStore'
