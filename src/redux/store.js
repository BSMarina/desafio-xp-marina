import { configureStore } from '@reduxjs/toolkit';
import walletReducer from './wallet';
import userReducer from './user';
import marketReducer from './market';

export default configureStore({
  reducer: {
    user: userReducer,
    wallet: walletReducer,
    market: marketReducer,
  },
});
