import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { systemConfig } from '@/config/arcaea.config';
import ResLoader from '@/utils/ResLoader'

/**
 * 关闭场景窗帘
 * cb   => 场景窗帘关闭后的回调
 */
export const closeSceneShutter = createAsyncThunk(
  'system/closeSceneShutter',
  async (cb, store) => {
    store.dispatch(setSceneShutterState(true))
    await new Promise(resolve => setTimeout(resolve, systemConfig.sceneShutterDuration));
    if (typeof cb === 'function') cb()
  }
);

/**
 * 改变资源加载状态
 * state => 资源加载状态
 * cb    => 状态设置完毕后的回调
 */
export const changeResourceLoaded = createAsyncThunk(
  'system/changeResourceLoaded',
  async ([state, cb], store) => {
    store.dispatch(setResourceLoadedState(state))
    await new Promise(resolve => setTimeout(resolve, systemConfig.resourceLoadedDuration));
    if (typeof cb === 'function') cb()
  }
);

/**
 * 切换场景行为
 * beforeCb => 一般用作预加载资源
 * afterCb  => 一般用作资源加载完毕后打开场景窗帘
 * autoLoadedClose  => 是否自动执行加载关闭事件
 */
export const changeSceneAction = createAsyncThunk(
  'system/changeSceneAction',
  async ([beforeCb, afterCb, autoLoadedClose = false], store) => {
    const loadedCloseFn = () => store.dispatch(changeResourceLoaded([
      false, async () => {
        if (typeof afterCb === 'function') await afterCb()
      }
    ]))
    store.dispatch(changeResourceLoaded([
      true, async () => {
        if (typeof beforeCb === 'function') {
          if (autoLoadedClose) {
            await beforeCb()
            loadedCloseFn()
          } else {
            await beforeCb(loadedCloseFn)
          }
        }
      }
    ]))
  }
)

/**
 * 预加载资源
 */
export const preloadResource = createAsyncThunk(
  'system/preloadResource',
  async ([resources, onComplete, onStart, onProgress], store) => {
    const loader = new ResLoader({ resources, onComplete, onStart, onProgress })
    loader.start()
  }
)

const systemSlice = createSlice({
  name: 'system',
  initialState: {
    sceneShutterState: false,
    resourceLoadedState: false
  },
  reducers: {
    setSceneShutterState(state, action) {
      state.sceneShutterState = action.payload;
    },
    setResourceLoadedState(state, action) {
      state.resourceLoadedState = action.payload;
    },
  },
})

export const { setSceneShutterState, setResourceLoadedState } = systemSlice.actions

export default systemSlice.reducer