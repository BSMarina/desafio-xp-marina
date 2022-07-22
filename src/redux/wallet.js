import { createSlice } from '@reduxjs/toolkit'

export const walletSlice = createSlice({
  name: 'wallet',
  initialState: {userStocks: [], userAccount: 0}, //definir estado inicial depois
  reducers: {
    buySell: (state, action) => {
      state.userStocks = action.payload
    },
    updateAccount: (state, action) => {
      state.userAccount = action.payload
    }
  },
})

// Action creators are generated for each case reducer function
export const { sell, buySell } = walletSlice.actions

export default walletSlice.reducer