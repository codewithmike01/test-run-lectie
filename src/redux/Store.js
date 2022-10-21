import { combineReducers, configureStore } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage';
import { persistReducer, persistStore } from 'redux-persist';
import thunk from 'redux-thunk';
import monthSlice from './features/monthSlice';
import smallMonthSlide from './features/smallMonthSlice';
import modalSlice from './features/modalSlice';
import timeSlice from './features/timeSlice';
import calendarSlice from './features/calendarSlice';

const persistConfig = {
  key: 'root',
  storage,
};

const rootReducer = combineReducers({
  month: monthSlice,
  smallMonth: smallMonthSlide,
  calendarModal: modalSlice,
  startEventModal: timeSlice,
  calendar: calendarSlice,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: [thunk],
});

export const persistor = persistStore(store);
