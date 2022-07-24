import { createSlice } from '@reduxjs/toolkit';

export const userSlice = createSlice({
  name: 'user',
  initialState: { email: '' },
  reducers: {
    login: (state, action) => {
      state = { ...state, email: action.payload };
      return state;
    },
  },
});

export const { login } = userSlice.actions;

export default userSlice.reducer;
