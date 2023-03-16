import React from 'react'
import QuestionAnchor from '@/shared/QuestionAnchor'

const Commentary = () => {
  const questions = [
    {
      title: 'title',
      id: 12,
      options: [
        { value: 0, label: '0' },
        { value: 1, label: '1' },
      ],
    },
    {
      title: 'title',
      id: 23,
      options: [
        { value: 0, label: '0' },
        { value: 1, label: '1' },
      ],
    },
    {
      title: 'title',
      id: 1,
      options: [
        { value: 0, label: '0' },
        { value: 1, label: '1' },
      ],
    },
  ]
  const answer = {
    12: 0,
  }
  return (
    <div className="flex">
      <div className="flex flex-col">
        {questions.map((question, index) => (
          <Question
            key={question.id}
            id={question.id}
            title={question.title}
            questionOrder={index}
            options={question.options}
            onChange={(value) => {
              console.log(value, question.id)
            }}
          />
        ))}
      </div>
      <QuestionAnchor questions={questions} answer={answer} />
    </div>
  )
}

export default Commentary
