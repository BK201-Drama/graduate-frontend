import { chooseRole } from '../repository/index.repository'
class RoleStore {
  constructor() {
    makeAutoObservable(this)
  }
  roleOptions = []
  getRoleOptions = async () => {
    const res = await chooseRole()
    console.log(res.data.data)
  }
}

export const roleStore = new RoleStore()
export const roleStoreKey = 'roleStore'
