import React, { memo, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { setEffectSwitch } from '@/store/modules/system'
import SceneShutter from './c-cpns/sceneShutter'
import ResourceLoaded from './c-cpns/resourceLoaded'
import usePreload from '@/hooks/usePreload'
import { preloadImages } from '@/config/resource.config'

const Preload = memo(() => {
  const dispatch = useDispatch()
  const location = useLocation()
  const preload = usePreload()

  useEffect(() => {
    const { pathname } = location
    switch (pathname) {
      case '/':
      case '/start':
        break;
      default:
        preload([preloadImages[pathname]], () => {
          dispatch(setEffectSwitch(true))
        })
    }
  }, [location, preload, dispatch])
  return (
    <>
      <SceneShutter />
      <ResourceLoaded />
    </>
  )
})

export default Preload