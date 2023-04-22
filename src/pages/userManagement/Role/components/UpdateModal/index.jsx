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
        title="更新角色"
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

export default UpdateModal
