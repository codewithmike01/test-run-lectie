import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  monthNumber: 9,
};

const monthSlice = createSlice({
  name: 'month',
  initialState,
  reducers: {
    setMonthNumber: (state, { payload }) => {
      state.monthNumber = payload;
    },
    setNextMonthNumber: (state) => {
      state.monthNumber = state.monthNumber + 1;
    },
    setPrevMonthNumber: (state) => {
      state.monthNumber = state.monthNumber - 1;
    },
  },
});

export const { setMonthNumber, setNextMonthNumber, setPrevMonthNumber } =
  monthSlice.actions;
export default monthSlice.reducer;
