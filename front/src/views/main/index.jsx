import React, { memo, useEffect } from 'react'
import { preloadImages } from '@/config/resource.config'
import { MainWrapper } from './style'
import usePreload from '@/hooks/usePreload'

const Main = memo(() => {
  const preload = usePreload([preloadImages.Main])

  useEffect(() => {
    preload()
  }, [preload])

  return (
    <MainWrapper>
      <div className='main'></div>
      <div className='main-shadow'></div>
      <div className='portrait'></div>
      <div className='main-menu'>
        <div className='world-wp'>
          <div className='world'></div>
        </div>
        <div className='start-game new' onClick={() => console.log(1111)}>开始游戏</div>
        <div className='story-mode'>故事模式</div>
        <div className='challenge'>段位挑战</div>
        <div className='other'>其他</div>
        <div className='online'></div>
      </div>
    </MainWrapper>
  )
})

export default Main