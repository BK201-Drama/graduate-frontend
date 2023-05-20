class ReversingStore {
  constructor() {
    makeAutoObservable(this)
  }
}

export const reversingStore = new ReversingStore()
export const reversingKey = 'reversingStore'
