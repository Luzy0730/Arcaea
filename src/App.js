import React, { memo } from 'react'
import { useRoutes } from 'react-router-dom'
import { shallowEqual, useSelector } from 'react-redux'
import { AppWrapper } from './style'
import routes from './router/index'
import SceneShutter from './components/sceneShutter'
import ResourceLoaded from './components/resourceLoaded'

const App = memo(() => {
  const { sceneShutterState, resourceLoadedState } = useSelector(state => ({
    sceneShutterState: state.system.sceneShutterState,
    resourceLoadedState: state.system.resourceLoadedState
  }), shallowEqual)

  return (
    <AppWrapper>
      <div className='app'>
        <div className='page'>
          {useRoutes(routes)}
        </div>
        <SceneShutter loaded={sceneShutterState} />
        <ResourceLoaded loaded={resourceLoadedState} />
      </div>
    </AppWrapper>
  )
})

export default App