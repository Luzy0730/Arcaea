import React, { memo } from 'react'
import classnames from 'classnames'
import { ResourceLoadedWrapper } from './style'

const ResourceLoaded = memo((props) => {
  const { loaded, zIndex } = props

  return (
    <ResourceLoadedWrapper zIndex={zIndex}>
      <div className={classnames('resourece-loaded', { 'loading': loaded })}>
        <div className='title_loaded'>Connecting...</div>
        <div className='icon_loaded'></div>
      </div>
    </ResourceLoadedWrapper>
  )
})

export default ResourceLoaded