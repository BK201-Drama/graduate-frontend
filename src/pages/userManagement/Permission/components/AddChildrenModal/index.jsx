import PermissionTypeSelector from '../PermissionTypeSelector'

const { Item } = Form
const RULE = [{ required: true }]

const AddChildrenModal = ({ render, onOk }) => {
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
            res.type = Number(res.type)
            onOk?.(res)
            click?.()
          })
        }}
        onCancel={click}
        title="添加用户"
      >
        <Form form={formInstance}>
          <Item name="permission_name" label="权限名称" rules={RULE}>
            <Input />
          </Item>
          <Item name="description" label="权限描述" rules={RULE}>
            <Input />
          </Item>
          <Item name="type" label="权限种类" rules={RULE}>
            <PermissionTypeSelector />
          </Item>
          <Item name="api_route_name" label="api路由名称" rules={RULE}>
            <Input />
          </Item>
        </Form>
      </Modal>
    </>
  )
}

export default AddChildrenModal
