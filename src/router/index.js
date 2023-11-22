import React from "react"
const Start = React.lazy(() => import('@/views/start/index.jsx'))

const routes = [
  {
    path: '/',
    element: <Start />
  }
]

export default routes
