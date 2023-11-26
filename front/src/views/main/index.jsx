import React, { memo, useCallback, useEffect } from 'react'
import { preloadImages } from '@/config/resource.config'
import { MainWrapper } from './style'
import usePreload from '@/hooks/usePreload'
import { useDispatch } from 'react-redux'
import { closeSceneShutter } from '@/store/modules/system'
import { useNavigate } from 'react-router-dom'

const Main = memo(() => {
  const preload = usePreload([preloadImages.Main])
  const navigate = useNavigate()
  const dispatch = useDispatch()

  useEffect(() => {
    preload()
  }, [preload])

  const handleStart = useCallback(() => {
    dispatch(closeSceneShutter(() => {
      navigate('/layout/songs')
    }))
  }, [dispatch, navigate])

  return (
    <MainWrapper>
      <div className='main'></div>
      <div className='main-shadow'></div>
      <div className='portrait'></div>
      <div className='main-menu'>
        <div className='world-place'></div>
        <div className='world'></div>
        <div className='start-game new' onClick={() => handleStart()}>开始游戏</div>
        <div className='story-mode'>故事模式</div>
        <div className='challenge'>段位挑战</div>
        <div className='other'>其他</div>
        <div className='online'></div>
      </div>
    </MainWrapper>
  )
})

export default Main