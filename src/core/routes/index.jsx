import { lazy, Suspense } from 'react'
import LayoutIndex from '../../shared/LayoutIndex'

export const routers = [
  {
    path: '',
    component: () => <LayoutIndex />,
    children: [
      {
        path: '/user-management/user',
        component: lazy(() => import('../../pages/Welcome')),
      },
      {
        path: '/user-management/role',
        component: lazy(() => import('../../pages/Welcome')),
      },
    ],
  },
]

export const changeRouter = (routers) => {
  return routers.map((route) => {
    if (route.children) route.children = changeRouter(route.children)

    route.element = (
      <Suspense>
        <route.component />
      </Suspense>
    )
    return route
  })
}

export const getRouters = () => changeRouter(routers)
