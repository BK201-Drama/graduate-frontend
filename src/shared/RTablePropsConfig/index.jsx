import _ from 'lodash'

export default function RTablePropConfig(tableProps) {
  return {
    ...tableProps,
    pagination: !_.isBoolean(tableProps?.pagination)
      ? {
          className: '',
          showTotal: (total) => (
            <div>
              共<span>{total}</span>个数据
            </div>
          ),
          showQuickJumper: true,
          showSizeChanger: true,
          position: ['bottomCenter'],
          ...tableProps?.pagination,
        }
      : tableProps?.pagination,
  }
}
