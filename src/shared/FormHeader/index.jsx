/*
 * formInstance: 表单的实例，由Form.useForm()创建而来
 * reset：用于清空表单筛选项的函数
 * submit：用于筛选提交表单的函数
 * formConfig：表单内容JSX数组，里面构成为：{ label: string; name: string; element: ReactNode }
 **/
const FormHeader = ({ formInstance, reset, submit, formConfig }) => {
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
    <Form form={form} className="pt-[10px]">
      <Row gutter={24}>
        {formConfig.map((formItem, index) => {
          return (
            <Col span={8} key={index}>
              <Form.Item label={formItem?.label} name={formItem.name}>
                {formItem.element}
              </Form.Item>
            </Col>
          )
        })}
      </Row>
      <Row
        gutter={24}
        justify="end"
        style={{ marginBottom: 24, paddingRight: 10 }}
      >
        <Button type="primary" onClick={onSubmit}>
          搜索
        </Button>
        {reset && (
          <Button style={{ marginLeft: 16 }} onClick={onReset}>
            重置
          </Button>
        )}
      </Row>
    </Form>
  )
}

export default FormHeader
