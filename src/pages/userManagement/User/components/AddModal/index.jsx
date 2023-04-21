const { Item } = Form
const RULE = [{ required: true }]
const PW_RULE = [
  () => ({
    validator: (_, value) => {
      if (!/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,16}$/.test(value))
        return Promise.reject(new Error('密码不符合要求'))
      return Promise.resolve()
    },
  }),
]

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
            onOk?.(res)
            click?.()
          })
        }}
        onCancel={click}
        title="添加用户"
      >
        <Form form={formInstance}>
          <Item name="account" label="手机号" rules={RULE}>
            <Input />
          </Item>
          <Item name="user_name" label="用户名" rules={RULE}>
            <Input />
          </Item>
          <Item name="password" label="新密码" rules={PW_RULE}>
            <Input />
          </Item>
        </Form>
      </Modal>
    </>
  )
}

export default AddModal
