import { getRecordById, masterGenerateExercise } from '../repository'
class InterviewStore {
  constructor() {
    makeAutoObservable(this)
  }

  exercise_types = []

  _id
  interview_start
  interview_end
  interview_mas
  interview_stu
  interview_room

  exercises = []

  getInterviewRecord = async (_id) => {
    const { data } = await getRecordById(_id)
    const {
      interview_start,
      interview_end,
      interview_mas,
      interview_stu,
      interview_room,
      exercises,
    } = data.data
    this._id = _id
    this.interview_start = interview_start
    this.interview_end = interview_end
    this.interview_mas = interview_mas
    this.interview_stu = interview_stu
    this.interview_room = interview_room
    this.exercises = exercises
  }

  generateExercise = async () => {
    const { data } = await masterGenerateExercise({
      _id: this._id,
      exercise_types: this.exercise_types,
    })
    this.exercises = data?.data ?? []
  }
}

export const interviewStore = new InterviewStore()
export const interviewKey = 'interviewStore'
