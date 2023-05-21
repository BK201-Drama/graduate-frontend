import { Checkbox } from 'antd'

const ExerciseTypeCheckbox = ({
  onChange,
  className = '',
  disable = false,
}) => {
  const { exerciseStore, interviewStore } = useStores()
  if (_.isEmpty(exerciseStore.allTypes)) exerciseStore.getAllTypes()
  return (
    <Checkbox.Group
      rootClassName="w-full flex-wrap flex"
      className={`${className} exercise-checkbox`}
      disabled={disable}
      onChange={(e) => {
        interviewStore.exercise_types = e
        onChange?.(e)
      }}
      options={exerciseStore.allTypes.map((label, value) => ({ label, value }))}
    />
  )
}

export default observer(ExerciseTypeCheckbox)
