import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { systemConfig } from '@/config/arcaea.config';

export const closeSceneShutter = createAsyncThunk(
  'system/closeSceneShutter',
  async (payload, store) => {
    store.dispatch(setSceneShutterState(true))
    await new Promise(resolve => setTimeout(resolve, systemConfig.sceneShutterDuration));
    if (typeof payload === 'function') payload()
  }
);

const systemSlice = createSlice({
  name: 'system',
  initialState: {
    sceneShutterState: false
  },
  reducers: {
    setSceneShutterState(state, action) {
      state.sceneShutterState = action.payload;
    },
  },
})

export const { setSceneShutterState } = systemSlice.actions

export default systemSlice.reducer