import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { systemConfig } from '@/config/arcaea.config';

export const startAppLoaded = createAsyncThunk(
  'system/startAppLoaded',
  async (payload, store) => {
    store.dispatch(setAppLoaded(true))
    await new Promise(resolve => setTimeout(resolve, systemConfig.appLoadDuration));
    if (typeof payload === 'function') payload()
  }
);

const systemSlice = createSlice({
  name: 'system',
  initialState: {
    isAppLoaded: false
  },
  reducers: {
    setAppLoaded(state, action) {
      state.isAppLoaded = action.payload;
    },
  },
})

export const { setAppLoaded } = systemSlice.actions

export default systemSlice.reducer