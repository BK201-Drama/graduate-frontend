const RULE = [{ required: true }]
const { Item } = Form

const SignModal = ({ render, onOk }) => {
  const [open, setOpen] = useState(false)
  const click = () => setOpen(!open)

  return (
    <>
      {render(click)}
      <Modal
        open={open}
        onOk={() => {
          onOk?.()
          click()
        }}
        onCancel={click}
        title="注册学生账号"
      >
        <Item label="账号" name="account" rules={RULE}>
          <Input />
        </Item>
        <Item label="密码" name="password" rules={RULE}>
          <Input />
        </Item>
      </Modal>
    </>
  )
}

export default SignModal
