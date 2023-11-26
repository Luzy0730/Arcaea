import React from "react"
import { Navigate } from 'react-router-dom'
import Reload from '@/views/reload/index.jsx'
import Startup from '@/views/startup/index.jsx'
const Layout = React.lazy(() => import('@/views/layout/index.jsx'))
const Main = React.lazy(() => import('@/views/main/index.jsx'))
const routes = [
  {
    path: '/',
    element: <Reload />
  },
  {
    path: '/start',
    element: <Startup />
  },
  {
    path: '/layout',
    element: <Layout />,
    children: [
      {
        path: 'main',
        element: <Main />
      }
    ]
  },
  {
    path: '/*',
    element: <Navigate to='/layout/main' />
  }
]

export default routes
