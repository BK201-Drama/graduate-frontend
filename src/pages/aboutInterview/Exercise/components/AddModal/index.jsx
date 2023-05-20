import LevelSelect from '@/features/LevelSelect'
import TypeSelect from '@/features/TypeSelect'

const { Item } = Form
const RULE = [{ required: true }]

const AddModal = ({ render, onOk }) => {
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
            onOk?.({
              ...res,
            })
            click?.()
          })
        }}
        onCancel={click}
        title="添加题目"
        destroyOnClose={true}
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

export default AddModal
