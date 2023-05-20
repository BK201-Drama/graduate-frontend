const LevelSelect = ({ value, onChange }) => {
  const { exerciseStore } = useStores()
  return (
    <Select
      value={value}
      onChange={onChange}
      options={exerciseStore.allLevels.map((label, value) => ({
        label,
        value,
      }))}
      allowClear={true}
    />
  )
}

export default observer(LevelSelect)
