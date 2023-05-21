const GenernateBtn = () => {
  const { interviewStore } = useStores()
  const click = async () => {
    // eslint-disable-next-line no-magic-numbers
    if (interviewStore.exercise_types.length !== 3) {
      message.error('请选择三种题型！')
      return
    }
    await interviewStore.generateExercise()
    message.success('生成成功')
  }
  return <Button onClick={click}>生成题目</Button>
}

export default observer(GenernateBtn)
