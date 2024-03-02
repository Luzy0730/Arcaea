import React, { memo, useCallback, useState } from 'react'
import classnames from 'classnames'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { closeSceneShutter, setEffectSwitch } from '@/store/modules/system'
import { SongsWrapper } from './style'
import preloadStore from '@/config/resource.config'
const { Songs } = preloadStore.images

const Song = memo(() => {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  // 歌单列表展示
  const [albumDET, setAlbumDET] = useState(false)
  const handleAlbumClick = useCallback((album) => {
    setAlbumDET(true)
    dispatch(closeSceneShutter(() => {
      dispatch(setEffectSwitch(false))
      navigate('/play')
    }))
  }, [dispatch, navigate])

  // 免费歌曲
  const [freeList] = useState([
    Songs[4],
    Songs[5],
  ])
  const renderFreeList = useCallback(() => {
    return freeList.map((item, index) => {
      const background = `url('${item}') no-repeat center/cover`
      return <div key={index} className='free-item' style={{ background: background }} onClick={() => handleAlbumClick(item)} />
    })
  }, [freeList, handleAlbumClick])

  // 返回主菜单
  const handleBack = useCallback(() => {
    dispatch(closeSceneShutter(() => {
      navigate('/main')
    }))
  }, [dispatch, navigate])

  return (
    <SongsWrapper>
      <div className='songs'>
        <div className={classnames('albums', { 'hide': albumDET })}>
          <div className='free'>{renderFreeList()}</div>
        </div>
        <div className='back' onClick={() => handleBack()}></div>
      </div>
    </SongsWrapper>
  )
})

export default Song