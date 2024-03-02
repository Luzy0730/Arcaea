import React, { memo, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import preloadStore from '@/config/resource.config'
import { preloadResource } from '@/store/modules/system'

const Reload = memo(() => {
  const navigate = useNavigate()
  const [duration, setDuration] = useState({
    current: 0,
    total: 0
  })

  const dispatch = useDispatch()
  const enterGame = (event) => {
    event.stopPropagation();
    navigate('/start')
  }
  useEffect(() => {
    const resources = [
      [...preloadStore.images.Common, ...preloadStore.images.Char, ...preloadStore.images.Startup],
      preloadStore.audios.Startup
    ]
    dispatch(preloadResource([
      resources,
      function (total) {
        console.log('加载完毕:' + total + '个资源');
      },
      function (total) {
        setDuration(preDuration => {
          return { ...preDuration, total }
        })
      },
      function (current, total) {
        setDuration(preDuration => {
          return { ...preDuration, ...{ current, total } }
        })
      },
    ]))
  }, [navigate, dispatch])

  return (
    <div>
      加载图片资源...
      {duration.current + '/' + duration.total}
      {duration.current === duration.total && <button onClick={enterGame}>进入</button>}
    </div>
  )
})

export default Reload