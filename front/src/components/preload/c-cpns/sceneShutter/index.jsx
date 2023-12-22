import React, { memo } from 'react'
import classnames from 'classnames'
import { shallowEqual, useSelector } from 'react-redux'
import { SceneShutterWrapper } from './style'

const SceneShutter = memo(() => {
  const { sceneShutterState, sceneShutterZIndex } = useSelector(state => ({
    sceneShutterState: state.system.sceneShutterState,
    sceneShutterZIndex: state.system.sceneShutterZIndex,
  }), shallowEqual)

  return (
    <SceneShutterWrapper zIndex={sceneShutterZIndex}>
      <div className={classnames('scene-shutter', { 'loading': sceneShutterState })}>
        <div className='shutter_r'></div>
        <div className='shutter_l'></div>
      </div>
    </SceneShutterWrapper>
  )
})

export default SceneShutter