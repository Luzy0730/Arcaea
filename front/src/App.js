import React, { memo } from 'react'
import { AppWrapper } from './style'
import Layout from './layout'
import Preload from './components/preload'
import AudioCtrl from './components/audioCtrl'

const App = memo(() => {
  return (
    <AppWrapper>
      <div className='app'>
        <AudioCtrl />
        <Preload />
        <div className='page'>
          <Layout />
        </div>
      </div>
    </AppWrapper>
  )
})

export default App