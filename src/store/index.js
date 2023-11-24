import { configureStore } from '@reduxjs/toolkit'
import systemReducer from './modules/system'

const store = configureStore({
  reducer: {
    system: systemReducer
  }
})

export default store