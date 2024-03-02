import React, { memo, useCallback, useEffect, useRef, useState } from 'react'
import { useSelector, shallowEqual } from 'react-redux'
import { systemConfig } from '@/config/arcaea.config';
import { PlayWrapper } from './style'
import notes_aff from './aff_test'
import UiRight from './c-cpns/uiRight';

const Play = memo(() => {
  const { effectSwitch } = useSelector(state => ({
    effectSwitch: state.system.effectSwitch,
  }), shallowEqual)
  // 歌曲信息
  const songInfo = useRef({
    isAuto: true,
    offsetTiming: 0,
    track: 4,
    noteScore: 4396,
    notes: notes_aff,
    // notes: [[2222, 1]],
    name: 'Fairytale',
    singer: 'chitose'
  })

  // 播放信息
  const playInfo = useRef({
    // 延迟时间
    delayTime: 4000,
    // 开始时间
    startTime: 0,
    // 已用时间
    elapsedTime: 0,
  })

  // 结果信息
  const [resultInfo, setResultInfo] = useState({
    scroll: [0, 0],
    hp: 0
  })

  // 轴元素
  const tracksRef = useRef()
  // 音块
  const notes = useRef([]);
  const createNote = useCallback((index) => {
    const element = document.createElement('div');
    element.classList.add('note');
    const pElement = tracksRef.current.querySelector(`.track-part:nth-child(${index})`);
    pElement.appendChild(element)
    // 检测线
    const nodeJudge = pElement.querySelector('.note-judge')
    /**
     * hitedStatus
     * 0: 初始 1:pure 2:far 3:lost
     */
    notes.current.push({ index, element, nodeJudge, pElement, elapsedTime: playInfo.current.elapsedTime, hitedStatus: 0 });
  }, [])

  // 时间线
  const trackLines = useRef([]);
  const appearTrackLineIndex = useRef(0);
  const createTrackLine = useCallback(() => {
    const element = document.createElement('div');
    element.classList.add('track-line');
    tracksRef.current.appendChild(element);
    trackLines.current.push({ element, elapsedTime: playInfo.current.elapsedTime });
  }, [])

  // 块是否miss
  const isNoteMiss = useCallback((note) => {
    const rect1 = note.element.getBoundingClientRect();
    const rect2 = note.nodeJudge.getBoundingClientRect();
    return rect1.top > (rect2.top + rect2.height)
  }, [])

  // 碰撞检测
  const collisionDetection = useCallback((note) => {
    const rect1 = note.element.getBoundingClientRect();
    const rect2 = note.nodeJudge.getBoundingClientRect();
    let hitStatus = 0
    if (
      rect1.top < rect2.top && (rect1.top + rect1.height) > rect2.top
    ) {
      // 发生碰撞
      if ((rect1.top + rect1.height) > (rect2.top + rect2.height)) {
        hitStatus = 1
      } else {
        hitStatus = 2
      }
    } else if (rect1.top > rect2.top && rect1.top < (rect2.top + rect2.height)) {
      hitStatus = 2
    }
    return hitStatus
  }, [])

  // 轴被点击事件
  const trackHitEvent = (trackPart) => {
    // 添加hit背景
    trackPart.classList.add('active')
    setTimeout(() => {
      trackPart.classList.remove('active')
    }, 100);
  }

  // 块被击事件
  const noteHitedEvent = useCallback((note, hitStatus = 0) => {
    note.hitedStatus = hitStatus
    if (!hitStatus) return
    if ([1, 2].includes(hitStatus)) {
      note.element.classList.add('hited')
      const element = document.createElement('div');
      element.classList.add('note-hited');
      note.nodeJudge.appendChild(element)
      setTimeout(() => {
        element && note.nodeJudge.removeChild(element);
      }, systemConfig.playHitDuration);
      const noteScore = hitStatus === 1 ? songInfo.current.noteScore : songInfo.current.noteScore / 2
      setResultInfo(resultInfo => ({
        scroll: [resultInfo.scroll[1], resultInfo.scroll[1] + noteScore],
        hp: resultInfo.hp + 1
      }))
      trackHitEvent(note.pElement)
    } else {
      setResultInfo(resultInfo => Object.assign(resultInfo, {
        hp: resultInfo.hp > 0 ? resultInfo.hp - 1 : 0
      }))
    }
    // 添加hit字符
    const element = document.createElement('div');
    element.classList.add(`hited-word`);
    element.classList.add(`hw-${hitStatus}`);
    note.nodeJudge.appendChild(element)
    setTimeout(() => {
      element && note.nodeJudge.removeChild(element);
    }, systemConfig.playHitDuration);
  }, [])

  // 检测条碰撞检测
  const detectionIsCollision = (index) => {
    const trackPart = tracksRef.current.querySelector(`.track-part:nth-child(${index + 1})`);
    trackHitEvent(trackPart)
    notes.current.filter(note => note.index === index + 1).forEach(note => {
      if (note.hitedStatus) return
      const hitStatus = collisionDetection(note);
      noteHitedEvent(note, hitStatus)
    })
  }

  // 帧动画
  const playAnimate = useCallback((timestamp) => {
    if (!playInfo.current.startTime) {
      playInfo.current.startTime = timestamp
    }
    playInfo.current.elapsedTime = timestamp - playInfo.current.startTime
    // 定时清除多余音块及时间线
    trackLines.current = trackLines.current.filter(tl => {
      const needRemove = (timestamp - tl.elapsedTime) > (systemConfig.playSpeed + playInfo.current.startTime)
      needRemove && tracksRef.current.removeChild(tl.element);
      return !needRemove
    })
    notes.current = notes.current.filter(note => {
      // 自动代打
      if (songInfo.current.isAuto) {
        const hitStatus = collisionDetection(note)
        if (hitStatus === 1 && !note.hitedStatus) {
          noteHitedEvent(note, hitStatus)
        }
      }
      // 块miss处理
      if (isNoteMiss(note) && [0, 1, 2].includes(note.hitedStatus)) {
        noteHitedEvent(note, 3)
      }
      const needRemove = (timestamp - note.elapsedTime) > (systemConfig.playSpeed + playInfo.current.startTime)
      needRemove && note.pElement.removeChild(note.element);
      return !needRemove
    })
    // 定时每秒生成时间线
    if (Math.floor((timestamp - playInfo.current.startTime) / 1000) >= appearTrackLineIndex.current) {
      appearTrackLineIndex.current++
      createTrackLine()
    }
    // 每帧检测是否添加音块
    songInfo.current.notes.forEach(([time, index], idx) => {
      if (timestamp - playInfo.current.startTime - playInfo.current.delayTime >= time + songInfo.current.offsetTiming) {
        songInfo.current.notes.splice(idx, 1)
        createNote(index)
      }
    })
    requestAnimationFrame(playAnimate)
  }, [createNote, createTrackLine, collisionDetection, isNoteMiss, noteHitedEvent])

  useEffect(() => {
    console.log("歌曲测试")
    console.log(effectSwitch)
    if (effectSwitch) {
      requestAnimationFrame(playAnimate)
    }
  }, [playAnimate, effectSwitch])

  return (
    <PlayWrapper >
      <div className='play'>
        <div className='track-wp'>
          <div className='track' ref={tracksRef}>
            {
              Array.from({ length: songInfo.current.track }).map((_, index) => (
                <div className='track-part' key={index} onClick={() => detectionIsCollision(index)}>
                  <div className='note-judge'></div>
                </div>
              ))
            }
          </div>
        </div>
        <div className='uileft'></div>
        <UiRight resultInfo={resultInfo} />
        {/* <div className='hp-bar'>{resultInfo.hp}</div> */}
      </div>
    </PlayWrapper>
  )
})

export default Play