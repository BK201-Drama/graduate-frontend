const options = [
  { value: 1, label: '已激活' },
  { value: 0, label: '未激活' },
]

const ActivationStatusSelector = ({ value, onChange }) => (
  <Select
    options={options}
    value={value}
    onChange={onChange}
    placeholder="请选择激活筛选状态"
  />
)

export default ActivationStatusSelector
