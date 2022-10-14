import React from 'react';
import { DayContainer } from '../CalendarStyles/calendar.Styles';

const Day = ({ day }) => {
  return (
    <DayContainer>
      <header className="flex flex-col a-center j-align  ">
        <p className="day t-sm">{day.format('DD')}</p>
      </header>
    </DayContainer>
  );
};

export default Day;
