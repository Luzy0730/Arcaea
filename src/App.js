import React, { memo } from 'react'
import { useRoutes } from 'react-router-dom'
import { AppWrapper } from './style'
import routes from './router/index'

const App = memo(() => {
  return (
    <AppWrapper>
      <div className='app'>
        <div className='page'>
          {useRoutes(routes)}
        </div>
        <div className='voice'>
          {/* <audio controls></audio> */}
        </div>
      </div>
    </AppWrapper>
  )
})

export default App