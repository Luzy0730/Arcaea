import React, { memo } from 'react'
import { useRoutes } from 'react-router-dom'
import { AppWrapper } from './style'
import routes from './router/index'
import Preload from './components/preload'

const App = memo(() => {
  return (
    <AppWrapper>
      <div className='app'>
        <Preload />
        <div className='page'>
          {useRoutes(routes)}
        </div>
      </div>
    </AppWrapper>
  )
})

export default App