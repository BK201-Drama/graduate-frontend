import React from 'react'

const ExerciseList = () => {
  const { interviewStore, exerciseStore } = useStores()
  exerciseStore.allTypes.length || exerciseStore.getAllTypes()
  const exercises = interviewStore.exercises
  if (exercises.length <= NUMBER_ZERO) return null
  return (
    <div className="shadow-3xl p-[10px] flex flex-col gap-[5px] rounded-[4px]">
      <h2>题目列表</h2>
      <div className="flex flex-col gap-[15px]">
        {exercises.map((exercise, index) => (
          <div
            key={exercise._id}
            className="p-[5px] flex gap-[5px] flex-col border-[1px] border-solid border-[#ccc]"
          >
            <div className="flex gap-[10px] pt-[5px]">
              <div>{exerciseStore.allTypes[exercise.exercise_type]}</div>
              <div>难度：{exercise.exercise_level}</div>
            </div>
            <div>
              {index + NUMBER_ONE}.{exercise.exercise_desc}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default observer(ExerciseList)
