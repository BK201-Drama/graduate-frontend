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
        title="删除用户"
      >
        是否确认删除该用户？
      </Modal>
    </>
  )
}

export default DeleteModal
