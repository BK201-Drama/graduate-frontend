const DeleteModal = ({ render, onOk }) => {
  const [open, setOpen] = useState(false)
  const click = () => {
    setOpen(!open)
  }
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
        title="删除题目"
      >
        是否确认删除该题目？
      </Modal>
    </>
  )
}

export default DeleteModal
