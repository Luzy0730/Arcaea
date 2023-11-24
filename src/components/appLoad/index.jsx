import React, { memo } from 'react'
import classnames from 'classnames'
import { AppLoadWrapper } from './style'

const AppLoad = memo((props) => {
  const { loaded } = props

  return (
    <AppLoadWrapper>
      <div className={classnames('app-load', { 'loading': loaded })}>
        <div className='shutter_r'></div>
        <div className='shutter_l'></div>
      </div>
    </AppLoadWrapper>
  )
})

export default AppLoad