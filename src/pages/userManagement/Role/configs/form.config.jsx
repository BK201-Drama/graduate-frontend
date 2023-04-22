import PermissionSelector from '@/features/PermissionSelector'

export const formConfig = [
  {
    label: '拥有权限',
    name: 'permission_ids',
    element: <PermissionSelector />,
  },
]
