import React, { memo } from 'react'
import { useRoutes } from 'react-router-dom'
import { shallowEqual, useSelector } from 'react-redux'
import { AppWrapper } from './style'
import routes from './router/index'
import SceneShutter from './components/sceneShutter'

const App = memo(() => {
  const { sceneShutterState } = useSelector(state => ({
    sceneShutterState: state.system.sceneShutterState
  }), shallowEqual)

  return (
    <AppWrapper>
      <div className='app'>
        <div className='page'>
          {useRoutes(routes)}
        </div>
        <SceneShutter loaded={sceneShutterState} />
      </div>
    </AppWrapper>
  )
})

export default App