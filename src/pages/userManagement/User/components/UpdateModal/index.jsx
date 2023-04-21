const { Item } = Form

const UpdateModal = ({ render, onOk, defaultValue }) => {
  const [open, setOpen] = useState(false)
  const [formInstance] = Form.useForm()
  const click = () => {
    setOpen?.(!open)
  }
  formInstance?.setFieldsValue(defaultValue)
  return (
    <>
      {render?.(click)}
      <Modal
        open={open}
        onOk={() => {
          onOk?.()
          click?.()
        }}
        onCancel={click}
        title="更新用户信息"
      >
        <Form form={formInstance}>
          <Item name="new_account" label="新账户">
            <Input />
          </Item>
          <Item name="password" label="新密码">
            <Input />
          </Item>
          <Item name="role_id" label="新账户">
            <Input />
          </Item>
        </Form>
      </Modal>
    </>
  )
}

export default UpdateModal
