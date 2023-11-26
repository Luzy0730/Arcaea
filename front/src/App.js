import React, { memo } from 'react'
import { useRoutes } from 'react-router-dom'
import { shallowEqual, useSelector } from 'react-redux'
import { AppWrapper } from './style'
import routes from './router/index'
import SceneShutter from './components/sceneShutter'
import ResourceLoaded from './components/resourceLoaded'

const App = memo(() => {
  const { sceneShutterState, sceneShutterZIndex, resourceLoadedState, resourceLoadedZIndex } = useSelector(state => ({
    sceneShutterState: state.system.sceneShutterState,
    sceneShutterZIndex: state.system.sceneShutterZIndex,
    resourceLoadedState: state.system.resourceLoadedState,
    resourceLoadedZIndex: state.system.resourceLoadedZIndex
  }), shallowEqual)

  return (
    <AppWrapper>
      <div className='app'>
        <SceneShutter loaded={sceneShutterState} zIndex={sceneShutterZIndex} />
        <ResourceLoaded loaded={resourceLoadedState} zIndex={resourceLoadedZIndex} />
        <div className='page'>
          {useRoutes(routes)}
        </div>
      </div>
    </AppWrapper>
  )
})

export default App