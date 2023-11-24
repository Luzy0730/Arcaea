import React, { memo } from 'react'
import { useRoutes } from 'react-router-dom'
import { shallowEqual, useSelector } from 'react-redux'
import { AppWrapper } from './style'
import routes from './router/index'
import AppLoad from './components/appLoad'

const App = memo(() => {
  const { isAppLoaded } = useSelector(state => ({
    isAppLoaded: state.system.isAppLoaded
  }), shallowEqual)

  return (
    <AppWrapper>
      <div className='app'>
        <div className='page'>
          {useRoutes(routes)}
        </div>
        <AppLoad loaded={isAppLoaded} />
      </div>
    </AppWrapper>
  )
})

export default App