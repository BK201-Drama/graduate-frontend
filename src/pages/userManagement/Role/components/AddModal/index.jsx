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
            onOk?.(res)
            click?.()
          })
        }}
        onCancel={click}
        title="添加角色"
      >
        <Form form={formInstance}>
          <Item name="role_name" label="角色名" rules={RULE}>
            <Input />
          </Item>
          <Item name="permission_ids" label="角色权限" rules={RULE}>
            <Input />
          </Item>
        </Form>
      </Modal>
    </>
  )
}

export default AddModal
