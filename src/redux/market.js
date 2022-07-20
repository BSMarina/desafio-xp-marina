import { createSlice } from '@reduxjs/toolkit'

export const marketSlice = createSlice({
  name: 'market',
  initialState: 0, //definir estado inicial depois
  reducers: {
    sell: (state) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.value += 1 //implementar ação de venda
    },
    buy: (state) => {
      state.value -= 1 //implementar ação de compra
    },
    // incrementByAmount: (state, action) => {
    //   state.value += action.payload
    // },
  },
})

// Action creators are generated for each case reducer function
export const { sell, buy } = marketSlice.actions

export default marketSlice.reducer