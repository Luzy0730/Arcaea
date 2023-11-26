import React, { memo, useCallback, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import usePreload from '@/hooks/usePreload'
import { preloadImages } from '@/config/resource.config'
import { closeSceneShutter } from '@/store/modules/system'
import { SongsWrapper } from './style'

const Songs = memo(() => {
  const preload = usePreload([preloadImages.Songs])
  const dispatch = useDispatch()
  const navigate = useNavigate()

  useEffect(() => {
    preload()
  }, [preload])

  const handleBack = useCallback(() => {
    dispatch(closeSceneShutter(() => {
      navigate('/layout/main')
    }))
  }, [dispatch, navigate])


  return (
    <SongsWrapper>
      <div className='songs'>
        <div className='back' onClick={() => handleBack()}></div>
      </div>
    </SongsWrapper>
  )
})

export default Songs