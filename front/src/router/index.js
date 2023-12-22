import React from "react"
import { Navigate } from 'react-router-dom'
import Reload from '@/views/reload/index.jsx'
import Startup from '@/views/startup/index.jsx'
import Layout from '@/views/layout/index.jsx'
import Main from '@/views/main/index.jsx'
import Songs from '@/views/songs/index.jsx'
import Play from '@/views/play/index.jsx'
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
      },
      {
        path: 'songs',
        element: <Songs />
      }
    ]
  },
  {
    path: '/play',
    element: <Play />
  },
  {
    path: '/*',
    element: <Navigate to='/' />
  }
]

export default routes
