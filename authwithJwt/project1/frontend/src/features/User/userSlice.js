import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  userInfo: localStorage.getItem('userInfo') ?  JSON.parse(localStorage.getItem('userInfo')):null,

}

export const userSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    setCredentials:(state,action)=>{
      state.userInfo = action.payload;
      (localStorage.setItem('userInfo',JSON.stringify(action.payload)))
    },
    logOut:(state,action)=>{
      state.userInfo = null;
      localStorage.removeItem('userInfo');
    }
  },
})

// Action creators are generated for each case reducer function
export const {setCredentials,logOut} = userSlice.actions;
export default userSlice.reducer