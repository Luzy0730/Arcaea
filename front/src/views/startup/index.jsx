import React, { memo, useCallback, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { closeSceneShutter } from '@/store/modules/system'
import { StartupWrapper } from './style'

const index = memo(() => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const startGame = useCallback(() => {
    dispatch(closeSceneShutter(() => {
      navigate('/main')
    }))
    window.removeEventListener('click', startGame)
  }, [dispatch, navigate])

  useEffect(() => {
    window.addEventListener('click', startGame)
    return () => window.removeEventListener('click', startGame)
  }, [startGame])

  return (
    <StartupWrapper>
      <div className='arcaea-startup'>
        <div className='char_t_wp'>
          <div className='char_t'></div>
        </div>
        <div className='char_h_wp'>
          <div className='char_h'></div>
        </div>
        <div className='glass_wp'>
          <div className='glass'></div>
        </div>
        <div className='copy'></div>
        <div className='manufacturer'></div>
        <div className='title'></div>
        <div className='prequel'>
          <div className='m1'></div>
          <div className='m2'></div>
          <div className='m3'></div>
        </div>
        <div className='start-icon-wrapper'>
          <div className='start_wreath'></div>
          <div className='start_icon'></div>
        </div>
        <div className='flash'></div>
      </div>
    </StartupWrapper>
  )
})

export default index