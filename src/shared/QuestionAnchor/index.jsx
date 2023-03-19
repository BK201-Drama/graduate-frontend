import { Anchor } from 'antd'
import './index.less'

const { Link } = Anchor
/*
 * @params
 * questions: 题目数组，后续做接口隔离，只依赖题目id和当前题目顺序
 * answer: 考生做的题目，这里选用json格式，因为做题不一定是按顺序的
 **/
const QuestionAnchor = ({ questions, answer }) => {
  const items = questions.map((question, index) => ({
    key: question?.id,
    href: `#${question?.id}`,
    title: index + NUMBER_ONE,
  }))
  return (
    <div>
      <Anchor className="questions-anchor">
        {items.map((item) => (
          <Link
            key={item?.key}
            href={`${item?.href}`}
            className={`${
              !_.isNil(answer?.[item?.key])
                ? 'bg-[aqua]'
                : 'bg-[lightblue] question-selected'
            }`}
            title={item?.title}
          />
        ))}
      </Anchor>
    </div>
  )
}

export default observer(QuestionAnchor)
