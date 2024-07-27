import { configureStore } from '@reduxjs/toolkit'
import messageReducer from '../page3/message'


export default configureStore({
  reducer: {
    alert:messageReducer,
  },
})