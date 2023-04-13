import { chooseRole, login } from '@/domains/login/index.repository'
import { navHelper } from '@/utils/navHelper'

const RULE = [{ required: true }]
const { Item, useForm } = Form
const Login = () => {
  const [formInstance] = useForm()
  const { data } = useRequest(chooseRole)
  const navInstance = navHelper()
  const submit = () => {
    formInstance.validateFields().then((params) => {
      // TODO: 账号密码的预先检查
      login(params)?.then((res) => {
        message.success('登录成功')
        localStorage.setItem('refresh_token', res.data.data.refresh_token)
        localStorage.setItem('loginData', JSON.stringify(res.data.data.user))
        localStorage.setItem('access_token', res.data.data.access_token)
        navInstance?.toUserList()
      })
    })
  }

  // 设置默认值
  useUpdateEffect(() => {
    formInstance?.setFieldValue(
      'role_id',
      data?.data?.data?.[NUMBER_ZERO]?.value
    )
  }, [data?.data?.data])

  return (
    <div className="h-[100vh] bg-gradient-to-r from-blue-400 to-green-500 flex justify-center items-center">
      <div className="bg-[#fff] w-[400px] h-[400px] rounded-[8px] backdrop-filter-hover flex justify-center items-center flex-col gap-[20px]">
        <h1>登录</h1>
        <Form form={formInstance}>
          <Item label="账号" name="account" rules={RULE}>
            <Input />
          </Item>
          <Item label="密码" name="password" rules={RULE}>
            <Input />
          </Item>
          <Item label="请选择登录角色" name="role_id">
            <Select options={data?.data?.data ?? []} />
          </Item>
          <Button onClick={submit}>登录</Button>
        </Form>
      </div>
    </div>
  )
}

export default Login
