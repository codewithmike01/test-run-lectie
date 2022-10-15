import { configureStore } from '@reduxjs/toolkit';
import monthSlice from './features/monthSlice';

const store = configureStore({
  reducer: {
    month: monthSlice,
  },
});

export default store;
