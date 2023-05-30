import Login from '@/pages/Login'
import AuthUrl from './AuthUrl'
import LayoutIndex from '@/features/LayoutIndex'

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
      {
        path: '/permission/list',
        component: lazy(() => import('@/pages/userManagement/Permission')),
        forceAuth: true,
      },
    ],
  },
  {
    path: '',
    component: () => <LayoutIndex />,
    children: [
      {
        path: '/interview/exercise',
        component: lazy(() => import('@/pages/aboutInterview/Exercise')),
        forceAuth: true,
      },
      {
        path: '/interview/reversing',
        component: lazy(() => import('@/pages/aboutInterview/Reversing')),
        forceAuth: true,
      },
      {
        path: '/interview/record',
        component: lazy(() => import('@/pages/aboutInterview/Record')),
        forceAuth: true,
      },
      {
        path: '/interview/:id',
        component: lazy(() => import('@/pages/aboutInterview/Interview')),
        forceAuth: true,
      },
    ],
  },
  {
    path: '',
    component: () => <LayoutIndex />,
    children: [
      {
        path: '/my-zone',
        component: lazy(() => import('@/pages/MyZone')),
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
        forceAuth: true
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
  {
    path: '',
    component: () => <LayoutIndex/>,
    children: [{
      path: '/choice-exam/all-papers',
      component: lazy(() => import('@/pages/choiceExam/allPapers')),
      forceAuth: true,
    }, {
        path: '/choice-exam/exam-paper',
        component: lazy(() => import('@/pages/choiceExam/examPaper')),
        forceAuth: true
    }, {
      path: '/choice-exam/check-paper',
      component: lazy(() => import('@/pages/choiceExam/checkPaper')),
      forceAuth: true
    }
    ]
  }
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
      route.element =
        route.path === '/login' ? (
          <Suspense>
            <route.component />
          </Suspense>
        ) : (
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
