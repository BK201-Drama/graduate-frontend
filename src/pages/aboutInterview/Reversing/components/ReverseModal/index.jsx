const ReverseModal = ({ render, onOk }) => {
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
        title="预约"
      >
        是否确认预约该时间段？
      </Modal>
    </>
  )
}

export default ReverseModal
