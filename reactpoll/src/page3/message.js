
import { createSlice } from '@reduxjs/toolkit'

export const message = createSlice({
  name: 'messages',
  initialState: {
    show:false,
    success:false,
    message:''
  },
  reducers: {
    off: (state,action) => {
      state.show =action.payload
    },
    msg:(state,action)=>{
      state.message = action.payload
    },
    setSuccess:(state,action)=>{
      state.success=action.payload
    }
  },
})

export const { off,msg,setSuccess} = message.actions

export default message.reducer
