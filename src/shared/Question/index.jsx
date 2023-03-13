const Question = ({ title, questionOrder, options }) => {
  return (
    <div>
      <div className="flex items-center gap-[2px]">
        {!_.isNil(questionOrder) ? <div>{`${questionOrder + 1}.`}</div> : null}
        <div>{title ?? '-'}</div>
      </div>
      <Radio.Group options={options ?? []} />
    </div>
  );
};

export default Question;
