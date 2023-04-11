const RULE = [{ required: true }]
const { Item, useForm } = Form
const Login = () => {
  const [formInstance] = useForm()
  const submit = () => {
    formInstance.validateFields().then((params) => {
      console.log(params)
    })
  }
  return (
    <div className="h-[100vh] bg-gradient-to-r from-blue-400 to-green-500 flex justify-center items-center">
      <div className="bg-[#fff] w-[400px] h-[400px] rounded-[8px] backdrop-filter-hover flex justify-center items-center flex-col gap-[20px]">
        <h1>登录</h1>
        <Form form={formInstance}>
          <Item label="账号" name="username" rules={RULE}>
            <Input />
          </Item>
          <Item label="密码" name="password" rules={RULE}>
            <Input />
          </Item>
          <Button onClick={submit}>登录</Button>
        </Form>
      </div>
    </div>
  )
}

export default Login
