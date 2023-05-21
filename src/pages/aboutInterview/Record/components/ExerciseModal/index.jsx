const ExerciseModal = ({ render, onOk, exercises }) => {
  const [open, setOpen] = useState(false)
  const click = () => {
    setOpen(!open)
  }

  const columns = [
    { title: '题目类型', dataIndex: 'exercise_type', key: 'exercise_type' },
    { title: '题目', dataIndex: 'exercise_desc', key: 'exercise_desc' },
    { title: '难度', dataIndex: 'exercise_level', key: 'exercise_level' },
  ]

  return (
    <>
      {render?.(click)}
      <Modal
        open={open}
        onOk={() => {
          onOk?.()
          click?.()
        }}
        onCancel={click}
        title="题目"
      >
        <Table columns={columns} dataSource={exercises} pagination={false} />
      </Modal>
    </>
  )
}

export default ExerciseModal
