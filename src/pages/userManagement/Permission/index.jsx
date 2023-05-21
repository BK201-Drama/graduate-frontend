import { addPermission } from '@/domains/permission/repository'
import { PlusCircleOutlined } from '@ant-design/icons'
import AddChildrenModal from './components/AddChildrenModal'
import getColumns from './configs/column.config'

const iconStyle =
  'cursor-pointer text-[#fff] bg-[red] text-[18px] w-[30px] h-[30px] flex justify-center items-center rounded-[15px]'
const Permission = () => {
  const { permissionStore } = useStores()
  permissionStore.getAllPermission()
  const columns = getColumns({ refresh: permissionStore.getAllPermission })
  return (
    <>
      <AddChildrenModal
        render={(click) => (
          <PlusCircleOutlined className={iconStyle} onClick={click} />
        )}
        onOk={(res) => {
          addPermission({ ...res }).then(() => {
            message.success('创建成功')
            permissionStore.getAllPermission?.(true)
          })
        }}
      />
      <Table columns={columns} dataSource={permissionStore.allPermissionTree} />
    </>
  )
}

export default observer(Permission)
