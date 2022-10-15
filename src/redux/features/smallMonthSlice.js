import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  smallMonthNumber: 0,
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
  },
});

export const {
  setNextSmallMonthNumber,
  setPrevSmallMonthNumber,
  setSmallMonthNumber,
} = smallMonthSlice.actions;
export default smallMonthSlice.reducer;
