import { createSlice } from '@reduxjs/toolkit';
import { endTime } from '../../components/calendarComponent/service/timePopup';

const initialState = {
  startTime: null,
  endTime: null,
};

const timeSlice = createSlice({
  name: 'startTimeModal',
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
  },
});

export const { setStartTime, setEndTime } = timeSlice.actions;
export default timeSlice.reducer;
