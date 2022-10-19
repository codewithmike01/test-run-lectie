import React from 'react';
import { getDay } from '../../util';
import { DayContainer } from './styles/calendar.Styles';

const Day = ({ day, key, func }) => {
  return (
    <DayContainer
      className={`day-month`}
      key={key}
      typeof="button"
      onClick={() => func(day.format('dddd MMMM DD'))}
    >
      <header className="flex flex-col">
        <p className={`day t-sm  ${getDay(day, null) ? 'highlight' : 'down'}`}>
          {day.format('DD')}
        </p>
      </header>
    </DayContainer>
  );
};

export default Day;
