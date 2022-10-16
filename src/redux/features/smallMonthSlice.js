import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  smallMonthNumber: 0,
  selectedSmallDay: null,
};

const smallMonthSlice = createSlice({
  name: 'smallMonth',
  initialState,
  reducers: {
    setSmallMonthNumber: (state, { payload }) => {
      state.smallMonthNumber = payload;
    },
    setNextSmallMonthNumber: (state) => {
      state.smallMonthNumber = state.smallMonthNumber + 1;
    },
    setPrevSmallMonthNumber: (state) => {
      state.smallMonthNumber = state.smallMonthNumber - 1;
    },
    setSmallSelectedDay: (state, { payload }) => {
      state.selectedSmallDay = payload;
    },
  },
});

export const {
  setNextSmallMonthNumber,
  setPrevSmallMonthNumber,
  setSmallMonthNumber,
  setSmallSelectedDay,
} = smallMonthSlice.actions;
export default smallMonthSlice.reducer;
