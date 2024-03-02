import React, { memo, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { setEffectSwitch, setAudioBg } from '@/store/modules/system'
import SceneShutter from './c-cpns/sceneShutter'
import ResourceLoaded from './c-cpns/resourceLoaded'
import usePreload from '@/hooks/usePreload'
import preloadStore from '@/config/resource.config'

const Preload = memo(() => {
  const dispatch = useDispatch()
  const location = useLocation()
  const preload = usePreload()
  const convertToCamelCase = (str) => {
    return str.split('/').map((word, index) => {
      if (index === 0) {
        return word;
      } else {
        return word.charAt(0).toUpperCase() + word.slice(1);
      }
    }).join('');
  }
  useEffect(() => {
    const { pathname } = location
    const { audios } = preloadStore
    switch (pathname) {
      case '/':
        break;
      case '/start':
        dispatch(setAudioBg(audios.Startup[2]))
        break;
      default:
        const resources = [
          preloadStore.images[convertToCamelCase(pathname)],
          preloadStore.audios[convertToCamelCase(pathname)]
        ]
        preload(resources, () => {
          dispatch(setEffectSwitch(true))
          if (pathname === '/main') dispatch(setAudioBg(audios.Main[0]))
          if (pathname === '/play') dispatch(setAudioBg('/songs/fairytale/base.ogg'))
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