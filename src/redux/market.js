import { createSlice } from '@reduxjs/toolkit'

export const marketSlice = createSlice({
  name: 'market',
  initialState: { stocks: [], chosenStock: {} }, //definir estado inicial depois
  reducers: {
    get: (state, action) => {
      return state = {...state, stocks: action.payload}
    },

    chose: (state, action) => {
      return state = {...state, chosenStock: action.payload}
    },

    buy: (state) => {
      state.value -= 1 //implementar ação de compra
    },
    // incrementByAmount: (state, action) => {
    //   state.value += action.payload
    // },
  }
})

// Action creators are generated for each case reducer function
export const { get, chose, buy } = marketSlice.actions;

export default marketSlice.reducer;