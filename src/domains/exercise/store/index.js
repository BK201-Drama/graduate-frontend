class ExerciseStore {
  constructor() {
    makeAutoObservable(this)
  }
}

export const exerciseStore = new ExerciseStore()
export const permissionKey = 'exerciseStore'
