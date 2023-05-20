import LevelSelect from '@/features/LevelSelect'
import TypeSelect from '@/features/TypeSelect'

const { Item } = Form
const RULE = [{ required: true }]

const UpdateModal = ({ render, onOk, defaultValue }) => {
  const [open, setOpen] = useState(false)
  const [formInstance] = Form.useForm()
  const [id] = useState(defaultValue._id)
  const click = () => {
    setOpen?.(!open)
  }

  useEffect(() => {
    formInstance?.setFieldsValue({
      ...defaultValue,
    })
  }, [])

  return (
    <>
      {render?.(click)}
      <Modal
        open={open}
        onOk={() => {
          formInstance?.validateFields().then((res) => {
            const params = {
              ...res,
              _id: id,
            }
            onOk?.(params)
          })
          click?.()
        }}
        onCancel={click}
        title="更新题目"
      >
        <Form form={formInstance}>
          <Item name="exercise_type" label="题型" rules={RULE}>
            <TypeSelect />
          </Item>
          <Item name="exercise_desc" label="题目" rules={RULE}>
            <Input />
          </Item>
          <Item name="exercise_level" label="难度" rules={RULE}>
            <LevelSelect />
          </Item>
        </Form>
      </Modal>
    </>
  )
}

export default UpdateModal
