import React, { memo } from 'react'
import classnames from 'classnames'
import { SceneShutterWrapper } from './style'

const SceneShutter = memo((props) => {
  const { loaded } = props

  return (
    <SceneShutterWrapper>
      <div className={classnames('scene-shutter', { 'loading': loaded })}>
        <div className='shutter_r'></div>
        <div className='shutter_l'></div>
      </div>
    </SceneShutterWrapper>
  )
})

export default SceneShutter