import { createSlice } from '@reduxjs/toolkit'

export const successSlice = createSlice({
  name: 'success',
  initialState: {
    value:'false',
  },
  reducers: {
    setSuccess:(state,action)=>{
      state.value=action.payload;
    }
  },
})

export const {setSuccess } = successSlice.actions

export default successSlice.reducer