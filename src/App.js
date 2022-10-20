import React, { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import { getMonth } from './util';
import { setMonthNumber } from './redux/features/monthSlice';
import { setSmallMonthNumber } from './redux/features/smallMonthSlice';
import { useSelector, useDispatch } from 'react-redux';
import EventModal from './components/calendarComponent/EventModal';
import {
  CalendarMainConatiner,
  CalendarWrapper,
} from './components/calendarComponent/styles/calendar.Styles';
import CalendarHeader from './components/calendarComponent/CalendarHeader';
import SideBar from './components/calendarComponent/SideBar';
import Month from './components/calendarComponent/Month';
import dayjs from 'dayjs';

function App() {
  const dispatch = useDispatch();
  const [currentMonth, setCurrentMonth] = useState(getMonth());
  const { monthNumber } = useSelector((state) => state.month);
  const { showEvent } = useSelector((state) => state.calendarModal);
  const { selectedEvent } = useSelector((state) => state.calendar);
  let month = parseInt(dayjs().month());

  useEffect(() => {
    setCurrentMonth(getMonth(monthNumber));
  }, [monthNumber]);

  useEffect(() => {
    dispatch(setMonthNumber(month));
    dispatch(setSmallMonthNumber(month));
  }, []);

  return (
    <>
      {showEvent && <EventModal editOption={selectedEvent ? true : false} />}
      <CalendarMainConatiner>
        <CalendarHeader />
        <CalendarWrapper>
          <SideBar />
          <Month month={currentMonth} />
        </CalendarWrapper>
      </CalendarMainConatiner>

      {/*<Routes>
        <Route path="/" element={<FinancialCalendar />} />
</Routes>*/}
    </>
  );
}

export default App;
