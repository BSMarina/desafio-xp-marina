import { createSlice } from '@reduxjs/toolkit'

export const walletSlice = createSlice({
  name: 'wallet',
  initialState: {userStocks: []}, //definir estado inicial depois
  reducers: {
    sell: (state) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.value += 1 //implementar ação de venda
    },
    buy: (state, action) => {
      // const alreadyBought = state.userStocks.find((stock) => stock.simbol === action.payload.simbol);

      // if (alreadyBought) {
      //   state.userStocks.quantity += 1

      // }
      return state = {...state, userStocks: action.payload}
    },
  },
})

// Action creators are generated for each case reducer function
export const { sell, buy } = walletSlice.actions

export default walletSlice.reducer