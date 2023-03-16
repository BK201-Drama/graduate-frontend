import { Anchor } from 'antd'
import './index.less'

const { Link } = Anchor

const QuestionAnchor = ({ questions, answer }) => {
  const items = questions.map((question, index) => ({
    key: question?.id,
    href: `#${question?.id}`,
    title: index + 1,
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
                ? 'bg-[white]'
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
