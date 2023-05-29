import TimeStampRangePicker from '@/features/TimeStampRangePicker'

const { Item } = Form
const RULE = [{ required: true }]

const AddModal = ({ render, onOk, defaultValue }) => {
  const [open, setOpen] = useState(false)
  const [formInstance] = Form.useForm()
  const click = () => {
    setOpen(!open)
  }
  return (
    <>
      {render?.(click)}
      <Modal
        open={open}
        onOk={() => {
          formInstance?.validateFields()?.then((res) => {
            const [start, end] = res.range
            const reserve_start = new Date(start).valueOf()
            const reserve_end = new Date(end).valueOf()
            onOk?.({
              ...defaultValue,
              current_time: new Date().valueOf(),
              reserve_start,
              reserve_end,
            })
            click?.()
          })
        }}
        onCancel={click}
        title="选择自己可被预约的时间"
        destroyOnClose={true}
      >
        <Form form={formInstance}>
          <Item name="range" label="时间段" rules={RULE}>
            <TimeStampRangePicker />
          </Item>
        </Form>
      </Modal>
    </>
  )
}

export default AddModal
