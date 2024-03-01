import React from "react"
import { Navigate } from 'react-router-dom'
import Reload from '@/views/reload/index.jsx'
import Startup from '@/views/startup/index.jsx'
import Main from '@/views/main/index.jsx'
import Song from '@/views/song/index.jsx'
import Play from '@/views/play/index.jsx'

const LayoutRoutes = [
  { path: '/main', element: <Main /> },
  { path: '/song', element: <Song /> }
]

const blankRoutes = [
  { path: '/', element: <Reload /> },
  { path: '/start', element: <Startup /> },
  { path: '/play', element: <Play /> },
  { path: '/*', element: <Navigate to='/' /> }
]

const getPathList = (routes, rootPath = '') => {
  const pathList = [];
  routes.forEach(route => {
    const fullPath = rootPath + route.path;
    pathList.push(fullPath);

    if (route.children) {
      pathList.push(...getPathList(route.children, fullPath + '/'));
    }
  });

  return pathList;
};


// 空白布局
export const blankPages = getPathList(blankRoutes)

export default [...LayoutRoutes, ...blankRoutes]
