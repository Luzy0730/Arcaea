import React, { memo, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { preloadImages } from '@/config/resource.config'
import { preloadResource } from '@/store/modules/system'

const Reload = memo(() => {
  const navigate = useNavigate()
  const [duration, setDuration] = useState({
    current: 0,
    total: 0
  })

  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(preloadResource([
      [...preloadImages.Common, ...preloadImages.Startup],
      function (total) {
        console.log('加载完毕:' + total + '个资源');
        navigate('/start')
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
    </div>
  )
})

export default Reload