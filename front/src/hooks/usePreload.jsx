import { useCallback, useState } from 'react'
import { useDispatch } from 'react-redux'
import { changeSceneAction, preloadResource, setSceneShutterState, changeSceneShutterZIndex } from '@/store/modules/system'

/**
 * 
 * @param {资源列表} resources 
 * @param {异步操作} asyncCb 
 * @returns 
 */
function usePreload() {
  const dispath = useDispatch()
  const [resComplete, setResComplete] = useState(false)
  const [aycComplete, setAycComplete] = useState(false)

  return useCallback(([resources, asyncCb], resolveFn) => dispath(changeSceneAction([
    (loadedCloseFn) => {
      if (typeof asyncCb === 'function') {
        asyncCb().then(() => {
          setAycComplete(true)
          if (resComplete && aycComplete) loadedCloseFn()
        })
      } else {
        setAycComplete(true)
      }
      const hasResource = !!resources.flat().length
      if (hasResource) {
        dispath(
          preloadResource([resources, () => {
            setResComplete(true)
            if (resComplete && aycComplete) loadedCloseFn()
          }])
        )
      } else {
        setResComplete(true)
      }
      if (!hasResource && (typeof asyncCb !== 'function')) loadedCloseFn()
    },
    async () => {
      dispath(setSceneShutterState(false))
      dispath(changeSceneShutterZIndex(false))
      if (typeof resolveFn === 'function') await resolveFn()
    }])), [aycComplete, dispath, resComplete])
}

export default usePreload;
