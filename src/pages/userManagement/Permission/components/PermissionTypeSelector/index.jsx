import { PERMISSION_TYPE_NAME } from '@/public/constants'

const PermissionTypeSelector = ({ value, onChange }) => {
  const options = Object.entries(PERMISSION_TYPE_NAME).map(
    ([value, label]) => ({ value, label })
  )
  return (
    <Select
      value={value}
      onChange={onChange}
      options={options}
      allowClear={true}
    />
  )
}

export default PermissionTypeSelector
