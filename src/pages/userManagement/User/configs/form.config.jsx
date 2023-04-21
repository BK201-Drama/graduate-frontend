import ActivationStatusSelector from '@/features/ActivationStatusSelector'
import RoleSelector from '@/features/RoleSelector'

export const formConfig = [
  { label: '角色', name: 'role_id', element: <RoleSelector /> },
  {
    label: '激活状态',
    name: 'activation_status',
    element: <ActivationStatusSelector />,
  },
  { label: '账号', name: 'account', element: <Input /> },
]
