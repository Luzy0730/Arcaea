import React, { memo, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import ResLoader from '@/utils/ResLoader'
import { preloadImages } from '@/config/resource.config'

const Reload = memo(() => {
  const navigate = useNavigate()
  const [duration, setDuration] = useState({
    current: 0,
    total: 0
  })
  useEffect(() => {
    const loader = new ResLoader({
      resources: preloadImages.Start,
      onStart: function (total) {
        console.log('start:' + total);
        setDuration({ ...duration, total })
      },
      onProgress: function (current, total) {
        console.log(current + '/' + total);
        setDuration({ ...duration, ...{ current, total } })
      },
      onComplete: function (total) {
        console.log('加载完毕:' + total + '个资源');
        navigate('/start')
      }
    })
    loader.start()
  }, [])
  return (
    <div>
      加载图片资源...
      {duration.current + '/' + duration.total}
    </div>
  )
})

export default Reload