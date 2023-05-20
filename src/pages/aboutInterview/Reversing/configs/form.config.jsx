import LevelSelect from '@/features/LevelSelect'
import TimeStampPicker from '@/features/TimeStampPicker'

export const formConfig = [
  {
    label: '难度',
    name: 'exercise_level',
    element: <LevelSelect />,
  },
  {
    label: '最晚时间',
    name: 'exercise_type',
    element: <TimeStampPicker />,
  },
]
