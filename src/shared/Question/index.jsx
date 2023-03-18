/*
 * @params
 * title: 题目标题
 * questionOrder: 题目顺序，通常使用index
 * options：题目选项
 * className：样式
 * id：题目对应的id
 * onChange：传入选择题目的函数
 **/
const Question = ({
  title,
  questionOrder,
  options,
  className = '',
  id,
  onChange,
}) => {
  const order = questionOrder + NUMBER_ONE
  const change = (e) => {
    onChange?.(e.target.value)
  }
  return (
    <div id={`${id}`} className={className}>
      <div className="flex items-center gap-[2px]">
        {!_.isNil(questionOrder) ? <div>{`${order}.`}</div> : null}
        <div>{title ?? '-'}</div>
      </div>
      <Radio.Group options={options ?? []} onChange={change} />
    </div>
  )
}

export default Question
