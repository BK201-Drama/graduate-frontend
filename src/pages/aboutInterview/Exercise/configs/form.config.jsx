import TypeSelect from '@/features/TypeSelect'
import LevelSelect from '@/features/LevelSelect'

export const formConfig = [
  {
    label: '难度',
    name: 'exercise_level',
    element: <LevelSelect />,
  },
  {
    label: '题型',
    name: 'exercise_type',
    element: <TypeSelect />,
  },
]
