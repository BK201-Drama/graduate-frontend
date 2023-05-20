const TypeSelect = ({ value, onChange }) => {
  const { exerciseStore } = useStores()
  return (
    <Select
      value={value}
      onChange={onChange}
      options={exerciseStore.allTypes.map((label, value) => ({ label, value }))}
      allowClear={true}
    />
  )
}

export default observer(TypeSelect)
