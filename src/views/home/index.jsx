import React, { memo, useEffect } from 'react'
import { preloadImages } from '@/config/resource.config'
import { HomeWrapper } from './style'
import usePreload from '@/hooks/usePreload'

const Home = memo(() => {
  const preload = usePreload([preloadImages.Home])

  useEffect(() => {
    preload()
  }, [preload])

  return (
    <HomeWrapper>
      <div className='home'>Home</div>
    </HomeWrapper>
  )
})

export default Home