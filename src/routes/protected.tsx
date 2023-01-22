import { Suspense } from 'react'
import { Navigate, Outlet } from 'react-router-dom'

import { NPLoading } from '~/components/NProgress'
import { MainLayout } from '~/components/Layout'
import { lazyImport } from '~/utils/lazyImport'

const { NotFound } = lazyImport(() => import('~/features/demo'), 'NotFound')

const App = () => {
  return (
    <MainLayout>
      <Suspense
        fallback={
          <NPLoading />
        }
      >
        <Outlet />
      </Suspense>
    </MainLayout>
  )
}

export const protectedRoutes = [
  {
    path: '/',
    element: <App />,
    children: [
      { path: '/', element: <NotFound /> },
      { path: '*', element: <Navigate to="." /> },
    ],
  },
]
