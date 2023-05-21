const { Item } = Form
const { TextArea } = Input
const RULE = [{ required: true }]

const UpdateModal = ({ render, onOk, defaultValue }) => {
  const [open, setOpen] = useState(false)
  const [formInstance] = Form.useForm()
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
            }
            onOk?.(params)
          })
          click?.()
        }}
        onCancel={click}
        title="更新评价"
      >
        <Form form={formInstance}>
          <Item name="interview_evaluation" label="面试评价" rules={RULE}>
            <TextArea />
          </Item>
        </Form>
      </Modal>
    </>
  )
}

export default UpdateModal
