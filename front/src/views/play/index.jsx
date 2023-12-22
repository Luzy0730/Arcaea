import React, { memo, useCallback, useEffect, useRef } from 'react'
import { PlayWrapper } from './style'

const Play = memo(() => {
  console.log("刷新测试")

  // 歌曲信息
  const songInfo = useRef({
    offsetTiming: 0,
    notes: [
      [2000, 1], [2500, 1], [3000, 1], [3500, 1], [4000, 1], [4500, 1],
      [2000, 2], [2500, 2], [3000, 2], [3500, 2], [4000, 2], [4500, 2],
      [2000, 3], [2500, 3], [3000, 3], [3500, 3], [4000, 3], [4500, 3],
      [2000, 4], [2500, 4], [3000, 4], [3500, 4], [4000, 4], [4500, 4],
    ]
  })

  // 延迟时间
  const delayTime = useRef(4000)
  // 开始时间
  const startTime = useRef(null);
  // 已用时间
  const elapsedTime = useRef(0);
  // 轴元素
  const tracksRef = useRef()
  // 音块
  const notes = useRef([]);
  const createNote = useCallback((index) => {
    const element = document.createElement('div');
    element.classList.add('note');
    const pElement = tracksRef.current.querySelector(`.track-part:nth-child(${index})`);
    pElement.appendChild(element)
    notes.current.push({ element, pElement, elapsedTime: elapsedTime.current });
  }, [])

  // 时间线
  const trackLines = useRef([]);
  const appearTrackLineIndex = useRef(0);
  const createTrackLine = useCallback(() => {
    const element = document.createElement('div');
    element.classList.add('track-line');
    tracksRef.current.appendChild(element);
    trackLines.current.push({ element, elapsedTime: elapsedTime.current });
  }, [])

  // 动画
  const playAnimate = useCallback((timestamp) => {
    if (!startTime.current) {
      startTime.current = timestamp
    }
    elapsedTime.current = timestamp - startTime.current
    // 定时清除多余音块及时间线
    trackLines.current = trackLines.current.filter(tl => {
      const needRemove = (timestamp - tl.elapsedTime) > (5000 + startTime.current)
      needRemove && tracksRef.current.removeChild(tl.element);
      return !needRemove
    })
    notes.current = notes.current.filter(note => {
      const needRemove = (timestamp - note.elapsedTime) > (5000 + startTime.current)
      needRemove && note.pElement.removeChild(note.element);
      return !needRemove
    })
    // 定时每秒生成时间线
    if (Math.floor((timestamp - startTime.current) / 1000) >= appearTrackLineIndex.current) {
      appearTrackLineIndex.current++
      createTrackLine()
    }
    // 每帧检测是否添加音块
    songInfo.current.notes.forEach(([time, index], idx) => {
      if (timestamp - startTime.current - delayTime.current >= time + songInfo.current.offsetTiming) {
        songInfo.current.notes.splice(idx, 1)
        createNote(index)
      }
    })
    requestAnimationFrame(playAnimate)
  }, [createNote, createTrackLine])

  useEffect(() => {
    requestAnimationFrame(playAnimate)
  }, [playAnimate])

  return (
    <PlayWrapper>
      <div className='play'>
        <div className='track-wp'>
          <div className='track' ref={tracksRef}>
            <div className='track-part'></div>
            <div className='track-part'></div>
            <div className='track-part'></div>
            <div className='track-part'></div>
          </div>
        </div>
      </div>
    </PlayWrapper>
  )
})

export default Play