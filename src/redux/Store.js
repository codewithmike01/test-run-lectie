import { configureStore } from '@reduxjs/toolkit';
import monthSlice from './features/monthSlice';
import smallMonthSlide from './features/smallMonthSlice';
import modalSlice from './features/modalSlice';
import timeSlice from './features/timeSlice';
const store = configureStore({
  reducer: {
    month: monthSlice,
    smallMonth: smallMonthSlide,
    calendarModal: modalSlice,
    startEventModal: timeSlice,
  },
});

export default store;
