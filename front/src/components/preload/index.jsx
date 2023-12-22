import React, { memo, useEffect } from 'react'
import SceneShutter from './c-cpns/sceneShutter'
import ResourceLoaded from './c-cpns/resourceLoaded'
import usePreload from '@/hooks/usePreload'
import { preloadImages } from '@/config/resource.config'
import { useLocation } from 'react-router-dom'
const Preload = memo(() => {
  const location = useLocation()
  const preload = usePreload()
  useEffect(() => {
    const { pathname } = location
    switch (pathname) {
      case '/':
      case '/start':
        break;
      default:
        preload([preloadImages[pathname]])
    }
  }, [location, preload])
  return (
    <>
      <SceneShutter />
      <ResourceLoaded />
    </>
  )
})

export default Preload