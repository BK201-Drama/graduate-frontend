const LevelSelect = ({ value, onChange }) => {
  const { exerciseStore } = useStores()
  if (_.isEmpty(exerciseStore.allLevels)) exerciseStore.getAllLevels()
  return (
    <Select
      value={value}
      onChange={onChange}
      options={exerciseStore?.allLevels?.map((label) => ({
        label,
        value: label,
      }))}
      allowClear={true}
    />
  )
}

export default observer(LevelSelect)
