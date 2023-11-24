import React from "react"
const Start = React.lazy(() => import('@/views/start/index.jsx'))
const Reload = React.lazy(() => import('@/views/reload/index.jsx'))

const routes = [
  {
    path: '/',
    element: <Reload />
  },
  {
    path: '/start',
    element: <Start />
  }
]

export default routes
