import { chooseRole } from '../repository'
class RoleStore {
  constructor() {
    makeAutoObservable(this)
  }
  roleOptions = []
  getRoleOptions = async () => {
    if (!_.isEmpty(this.roleOptions)) return
    const res = await chooseRole()
    this.roleOptions = res?.data?.data ?? []
  }
}

export const roleStore = new RoleStore()
export const roleStoreKey = 'roleStore'
