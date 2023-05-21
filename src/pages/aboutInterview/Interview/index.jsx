import ExerciseTypeCheckbox from '@/features/ExerciseTypeCheckbox'
import moment from 'moment'
import ExerciseList from './component/ExerciseList'
import GenernateBtn from './component/GenernateBtn'
// 面试界面
const Interview = () => {
  const { id: _id } = useParams()
  const { interviewStore } = useStores()
  interviewStore.getInterviewRecord(_id)

  return (
    <div className="h-full flex flex-col">
      <div className="h-[50px] w-full flex items-center gap-[20px]">
        <div>房间号：{interviewStore.interview_room}</div>
        <div>
          时间：
          {moment(interviewStore.interview_start).format('YYYY-MM-DD HH:mm')}-
          {moment(interviewStore.interview_end).format('YYYY-MM-DD HH:mm')}
        </div>
        <div>专家账号：{interviewStore.interview_mas}</div>
        <div>学生账号：{interviewStore.interview_stu}</div>
      </div>
      <div className="flex gap-[10px] mt-[20px]">
        <div className="w-[30vw] h-[70vh] bg-[#000]"></div>
        <div className="w-[30vw] h-[70vh] bg-[#000]"></div>
        <div className="w-[21.5vw] h-[70vh] flex flex-col gap-[5px]">
          <ExerciseTypeCheckbox />
          <GenernateBtn />
          <ExerciseList />
        </div>
      </div>
    </div>
  )
}

export default observer(Interview)
