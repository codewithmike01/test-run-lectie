import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  show: false,
};

const modalSlice = createSlice({
  name: 'calendarModal',
  initialState,
  reducers: {
    setShowModel: (state, { payload }) => {
      state.show = payload;
    },
  },
});

export const { setShowModel } = modalSlice.actions;
export default modalSlice.reducer;
