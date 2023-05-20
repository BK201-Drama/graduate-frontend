import { DatePicker } from 'antd'

const { RangePicker } = DatePicker

const TimeStampRangePicker = ({ onChange, value, onOk }) => {
  const ok = (e) => {
    onOk?.(e)
  }
  return (
    <RangePicker
      showTime={{ format: 'HH:mm' }}
      format="YYYY-MM-DD HH:mm"
      onChange={onChange}
      onOk={ok}
      value={value}
    />
  )
}

export default TimeStampRangePicker
