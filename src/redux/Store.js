import { configureStore } from '@reduxjs/toolkit';
import monthSlice from './features/monthSlice';
import smallMonthSlide from './features/smallMonthSlice';

const store = configureStore({
  reducer: {
    month: monthSlice,
    smallMonth: smallMonthSlide,
  },
});

export default store;
