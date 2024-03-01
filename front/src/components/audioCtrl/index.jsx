import React, { memo, useEffect, useRef } from 'react'
import { shallowEqual, useSelector } from 'react-redux'
import { AudioCtrlWrapper } from './style'

const AudioCtrl = memo(() => {
  const { audioBg, audioEffect } = useSelector(state => ({
    audioBg: state.system.audioBg,
    audioEffect: state.system.audioEffect
  }), shallowEqual)

  const audioBgRef = useRef()
  const audioEffectRef = useRef()

  useEffect(() => {
    if (audioBg) {
      audioBgRef.current.play()
    }
  }, [audioBg])

  useEffect(() => {
    if (audioEffect) {
      audioEffectRef.current.play()
    }
  }, [audioEffect])

  return (
    <AudioCtrlWrapper>
      <audio className='bg' src={audioBg} loop ref={audioBgRef} />
      <audio className='effect' src={audioEffect} ref={audioEffectRef} />
    </AudioCtrlWrapper>
  )
})

export default AudioCtrl