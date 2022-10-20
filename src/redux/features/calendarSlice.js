import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  months: [],
  selectedEvent: '',
};

const calendarSlice = createSlice({
  name: 'calendar',
  initialState,
  reducers: {
    setCalendarEvent: (state, { payload }) => {
      let isMonthPresent = false;
      let isEventPresent = false;
      for (const month of state.months) {
        let index = state.months.indexOf(month);
        if (month['date'] === payload['date']) {
          for (const evt of state.months[index]['events']) {
            let idx = state.months[index]['events'].indexOf(evt);
            if (evt['id'] === payload['events'][0]['id']) {
              state.months[index]['events'][idx] = payload['events'][0];
              isEventPresent = true;
            }
          }
          if (isEventPresent === false) {
            state.months[index]['events'].push(...payload['events']);
          }
          isMonthPresent = true;
        }
      }

      if (isMonthPresent === false) {
        state.months.push(payload);
      }
    },
    setSelectedEvent: (state, { payload }) => {
      state.selectedEvent = payload;
    },
    getCalendarEvent: (state, { payload }) => {
      for (const month of state.months) {
        for (const event of month['events']) {
          if (event['id'] === payload) {
            state.selectedEvent = event;
          }
        }
      }
    },
    setDeleteEvent: (state, { payload }) => {
      for (const month of state.months) {
        let index = state.months.indexOf(month);
        let newEvents = month['events'].filter((evt) => evt['id'] !== payload);
        state.months[index]['events'] = newEvents;
      }
    },
  },
});

export const {
  setCalendarEvent,
  setSelectedEvent,
  setDeleteEvent,
  getCalendarEvent,
} = calendarSlice.actions;
export default calendarSlice.reducer;
