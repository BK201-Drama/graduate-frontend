/*
 * formInstance: 表单的实例，由Form.useForm()创建而来
 * reset：用于清空表单筛选项的函数
 * submit：用于筛选提交表单的函数
 * formConfig：表单内容JSX数组，里面构成为：{ label: string; name: string; element: ReactNode }
 **/
const FormHeader = ({
  formInstance,
  reset,
  submit,
  formConfig,
  leftConfig,
}) => {
  const [iniFormInstance] = Form.useForm()
  const form = formInstance ?? iniFormInstance
  const onReset = () => {
    formInstance.resetFields()
    reset?.()
  }
  const onSubmit = () => {
    const params = formInstance.getFieldsValue()
    submit?.(params)
  }

  return (
    <Form form={form} className="pt-[10px] rounded-[8px] flex justify-between">
      {leftConfig && <div className="w-[100px]">{leftConfig}</div>}
      <Row gutter={24} className="w-full pr-[10px]">
        {formConfig.map((formItem, index) => {
          return (
            <Col span={6} key={index}>
              <Form.Item label={formItem?.label} name={formItem.name}>
                {formItem.element}
              </Form.Item>
            </Col>
          )
        })}
      </Row>
      <div className="w-[170px]">
        <Button type="primary" onClick={onSubmit}>
          搜索
        </Button>
        {reset && (
          <Button className="ml-[10px]" onClick={onReset}>
            重置
          </Button>
        )}
      </div>
    </Form>
  )
}

export default FormHeader
