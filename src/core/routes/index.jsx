import Login from '@/pages/Login'
import AuthUrl from './AuthUrl'

export const routers = [
  {
    path: '',
    component: () => <LayoutIndex />,
    children: [
      {
        path: '/',
        component: lazy(() => import('@/pages/userManagement/User')),
      },
      {
        path: '/user/list',
        component: lazy(() => import('@/pages/userManagement/User')),
      },
      {
        path: '/role/list',
        component: lazy(() => import('@/pages/userManagement/Role')),
      },
    ],
  },
  {
    path: '',
    component: () => <LayoutIndex />,
    children: [
      {
        path: '/examine/commentary',
        component: lazy(() => import('@/pages/examine/Commentary')),
      },
    ],
  },
  {
    path: '/login',
    component: () => <Login />,
    forceAuth: true,
  },
  {
    path: '',
    component: () => <LayoutIndex />,
    children: [
      {
        path: '*',
        component: lazy(() => import('@/pages/403')),
        forceAuth: true,
      },
    ],
  },
]

export const changeRouter = (routers) => {
  return routers.map((route) => {
    if (route.children) {
      route.children = changeRouter(route.children)
      route.element = (
        <Suspense>
          <route.component />
        </Suspense>
      )
    } else {
      route.element = (
        <Suspense>
          <AuthUrl
            forceAuth={
              !import.meta.env.VITE_NEED_ROUTE_CHECK || route.forceAuth
            }
          >
            <route.component />
          </AuthUrl>
        </Suspense>
      )
    }
    return route
  })
}

export const getRouters = () => changeRouter(routers)
