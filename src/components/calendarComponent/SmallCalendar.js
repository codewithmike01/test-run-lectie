import React from 'react';
import { SmallCalendarConatiner } from './styles/calendar.Styles';

const SmallCalendar = ({ currentMonth }) => {
  return (
    <SmallCalendarConatiner>
      {currentMonth[0].map((day, i) => (
        <span key={i} className="day-init t-center">
          {day.format('dd').charAt(0)}
        </span>
      ))}
      {currentMonth.map((row, i) => (
        <React.Fragment key={i}>
          {row.map((day, idx) => (
            <button key={idx}>
              <span>{day.format('D')}</span>
            </button>
          ))}
        </React.Fragment>
      ))}
    </SmallCalendarConatiner>
  );
};

export default SmallCalendar;
