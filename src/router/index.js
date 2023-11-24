import React from "react"
import Reload from '@/views/reload/index.jsx'
import Startup from '@/views/startup/index.jsx'

const routes = [
  {
    path: '/',
    element: <Reload />
  },
  {
    path: '/start',
    element: <Startup />
  }
]

export default routes
