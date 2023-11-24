import React from "react"
import Reload from '@/views/reload/index.jsx'
import Startup from '@/views/startup/index.jsx'
const Home = React.lazy(() => import('@/views/home/index.jsx'))
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
    path: '/home',
    element: <Home />
  }
]

export default routes
