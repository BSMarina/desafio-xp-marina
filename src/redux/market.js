import { createSlice } from '@reduxjs/toolkit';

export const marketSlice = createSlice({
  name: 'market',
  initialState: { stocks: [], chosenStock: {} },
  reducers: {
    get: (state, action) => {
      state.stocks = action.payload;
    },

    choose: (state, action) => {
      state.chosenStock = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { get, choose } = marketSlice.actions;

export default marketSlice.reducer;
