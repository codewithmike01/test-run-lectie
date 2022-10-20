import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  startTime: null,
  endTime: null,
  selectedDate: null,
};

const timeSlice = createSlice({
  name: 'startEventModal',
  initialState,

  reducers: {
    setStartTime: (state, { payload }) => {
      state.startTime = payload;
      let firstValue = parseInt(payload.split(':')[0]) + 1;
      if (firstValue === 13) {
        firstValue = 1;
      }
      state.endTime = firstValue.toString() + ':' + payload.split(':')[1];
    },
    setEndTime: (state, { payload }) => {
      state.endTime = payload;
    },
    setSelectedDate: (state, { payload }) => {
      state.selectedDate = payload;
    },
  },
});

export const { setStartTime, setEndTime, setSelectedDate } = timeSlice.actions;
export default timeSlice.reducer;
