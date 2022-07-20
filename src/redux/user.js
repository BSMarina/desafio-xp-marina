import { createSlice } from '@reduxjs/toolkit'

export const userSlice = createSlice({
  name: 'user',
  initialState: { email: ''}, //definir estado inicial depois
  reducers: {
    login: (state, action) => {
        return state = {...state, email: action.payload}
    }
  },
})

// Action creators are generated for each case reducer function
export const { login } = userSlice.actions

export default userSlice.reducer