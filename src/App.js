import React, { useState } from 'react';
import { getMonth } from './util';
import {
  CalendarMainConatiner,
  CalendarWrapper,
} from './components/CalendarStyles/calendar.Styles';
import CalendarHeader from './components/calendarComponent/CalendarHeader';
import SideBar from './components/calendarComponent/SideBar';
import Month from './components/calendarComponent/Month';

function App() {
  const [currentMonth, setCurrentMonth] = useState(getMonth());

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
