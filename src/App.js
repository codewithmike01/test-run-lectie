import React, { useEffect, useState } from 'react';
import { getMonth } from './util';
import { setMonthNumber } from './redux/features/monthSlice';
import { useSelector, useDispatch } from 'react-redux';
import {
  CalendarMainConatiner,
  CalendarWrapper,
} from './components/CalendarStyles/calendar.Styles';
import CalendarHeader from './components/calendarComponent/CalendarHeader';
import SideBar from './components/calendarComponent/SideBar';
import Month from './components/calendarComponent/Month';
import dayjs from 'dayjs';

function App() {
  const dispatch = useDispatch();
  const [currentMonth, setCurrentMonth] = useState(getMonth());
  const { monthNumber } = useSelector((state) => state.month);
  let month = parseInt(dayjs().month());

  useEffect(() => {
    setCurrentMonth(getMonth(monthNumber));
  }, [monthNumber]);

  useEffect(() => {
    dispatch(setMonthNumber(month));
  }, []);

  return (
    <>
      <CalendarMainConatiner>
        <CalendarHeader />
        <CalendarWrapper>
          <SideBar />
          <Month month={currentMonth} />
        </CalendarWrapper>
      </CalendarMainConatiner>
    </>
  );
}

export default App;
