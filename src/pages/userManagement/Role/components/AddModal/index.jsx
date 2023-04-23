import PermissionTreeSelector from '@/features/PermissionTreeSelector'

const { Item } = Form
const RULE = [{ required: true }]

const AddModal = ({ render, onOk }) => {
  const [open, setOpen] = useState(false)
  const [permissions, setPermissions] = useState([])
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
              permission_ids: permissions,
            })
            click?.()
          })
        }}
        onCancel={click}
        title="添加角色"
        destroyOnClose={true}
      >
        <Form form={formInstance}>
          <Item name="role_name" label="角色名" rules={RULE}>
            <Input />
          </Item>
        </Form>
        <Item label="角色权限">
          <PermissionTreeSelector
            onCheck={(selectedKeys, halfCheckedKeys) =>
              setPermissions([...selectedKeys, ...halfCheckedKeys])
            }
          />
        </Item>
      </Modal>
    </>
  )
}

export default AddModal
