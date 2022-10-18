import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  showEvent: false,
  showTime: false,
};

const modalSlice = createSlice({
  name: 'calendarModal',
  initialState,
  reducers: {
    setShowEventModel: (state, { payload }) => {
      state.showEvent = payload;
    },
    setShowTimeModel: (state, { payload }) => {
      state.showTime = payload;
    },
  },
});

export const { setShowEventModel, setShowTimeModel } = modalSlice.actions;
export default modalSlice.reducer;
