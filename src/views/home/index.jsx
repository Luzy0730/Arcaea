import React, { memo, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { setAppLoaded } from '@/store/modules/system'

const Home = memo(() => {
  const dispath = useDispatch()
  useEffect(() => {
    async function wait() {
      await new Promise(resolve => setTimeout(resolve, 1000));
      dispath(setAppLoaded(false))
    }
    wait()
  }, [dispath])

  return (
    <div>Home</div>
  )
})

export default Home