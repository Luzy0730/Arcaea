import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { changeSceneAction, preloadResource, setSceneShutterState } from '@/store/modules/system'

/**
 * 
 * @param {资源列表} resources 
 * @param {异步操作} asyncCb 
 * @returns 
 */
function usePreload([resources, asyncCb]) {
  const dispath = useDispatch()

  const [resComplete, setResComplete] = useState(false)
  const [aycComplete, setAycComplete] = useState(false)

  return () => dispath(changeSceneAction([
    (loadedCloseFn) => {
      if (typeof asyncCb === 'function') {
        asyncCb().then(() => {
          setAycComplete(true)
          if (resComplete && aycComplete) loadedCloseFn()
        })
      } else {
        setAycComplete(true)
      }
      dispath(
        preloadResource([resources, () => {
          setResComplete(true)
          if (resComplete && aycComplete) loadedCloseFn()
        }])
      )
    },
    () => dispath(setSceneShutterState(false))
  ]))
}

export default usePreload;
