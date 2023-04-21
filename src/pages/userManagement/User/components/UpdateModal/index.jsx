import RoleSelector from '@/features/RoleSelector'

const { Item } = Form
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
      new_account: defaultValue?.account,
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
              account: defaultValue?.account,
            }
            onOk?.(params)
          })
          click?.()
        }}
        onCancel={click}
        title="更新用户信息"
      >
        <Form form={formInstance}>
          <Item name="new_account" label="修改手机号" rules={RULE}>
            <Input />
          </Item>
          <Item name="user_name" label="修改用户名" rules={RULE}>
            <Input />
          </Item>
          <Item name="password" label="修改新密码" rules={RULE}>
            <Input />
          </Item>
          <Item name="role_id" label="修改新角色" rules={RULE}>
            <RoleSelector />
          </Item>
        </Form>
      </Modal>
    </>
  )
}

export default UpdateModal
