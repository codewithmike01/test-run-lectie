import { configureStore } from '@reduxjs/toolkit';
import monthSlice from './features/monthSlice';
import smallMonthSlide from './features/smallMonthSlice';
import modalSlice from './features/modalSlice';
const store = configureStore({
  reducer: {
    month: monthSlice,
    smallMonth: smallMonthSlide,
    calendarModal: modalSlice,
  },
});

export default store;
