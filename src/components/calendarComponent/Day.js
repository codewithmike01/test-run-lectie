import React from 'react';
import { getDay } from '../../util';
import { DayContainer } from './styles/calendar.Styles';

const Day = ({ day }) => {
  console.log(getDay(day, null));
  return (
    <DayContainer className={`day-month`}>
      <header className="flex flex-col">
        <p className={`day t-sm  ${getDay(day, null) ? 'highlight' : 'down'}`}>
          {day.format('DD')}
        </p>
      </header>
    </DayContainer>
  );
};

export default Day;
