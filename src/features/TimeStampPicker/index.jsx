import { DatePicker } from 'antd'

const TimeStampPicker = ({ value, onOk, onChange }) => {
  const [val] = useState(value)
  return (
    <DatePicker
      showTime
      format="YYYY-MM-DD HH:mm"
      onOk={(e) => {
        onOk?.(new Date(e).valueOf())
      }}
      onChange={(e) => {
        onChange?.(new Date(e).valueOf())
      }}
      value={val}
    />
  )
}

export default TimeStampPicker
