const Question = ({ title, questionOrder, options, className = '', id }) => {
  const order = questionOrder + 1
  return (
    <div id={`${id}`} className={className}>
      <div className="flex items-center gap-[2px]">
        {!_.isNil(questionOrder) ? <div>{`${order}.`}</div> : null}
        <div>{title ?? '-'}</div>
      </div>
      <Radio.Group options={options ?? []} />
    </div>
  )
}

export default Question
