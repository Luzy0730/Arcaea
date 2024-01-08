import React, { memo } from 'react'
import { UiRightWrapper } from './style'
import CountUp from 'react-countup'

const UiRight = memo(({ resultInfo }) => {
  return (
    <UiRightWrapper>
      <div className='uiright'>
        <CountUp className='song-score' duration={1} start={resultInfo.scroll[0]} end={resultInfo.scroll[1]} formattingFn={num => String(num).padStart(8, '0')} />
        <div className='song-cover'></div>
      </div>
    </UiRightWrapper>
  )
})

export default UiRight