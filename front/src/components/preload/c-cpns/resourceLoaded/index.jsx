import React, { memo } from 'react'
import classnames from 'classnames'
import { shallowEqual, useSelector } from 'react-redux'
import { ResourceLoadedWrapper } from './style'

const ResourceLoaded = memo((props) => {
  const { resourceLoadedState, resourceLoadedZIndex } = useSelector(state => ({
    resourceLoadedState: state.system.resourceLoadedState,
    resourceLoadedZIndex: state.system.resourceLoadedZIndex
  }), shallowEqual)

  return (
    <ResourceLoadedWrapper zIndex={resourceLoadedZIndex}>
      <div className={classnames('resourece-loaded', { 'loading': resourceLoadedState })}>
        <div className='title_loaded'>Connecting...</div>
        <div className='icon_loaded'></div>
      </div>
    </ResourceLoadedWrapper>
  )
})

export default ResourceLoaded