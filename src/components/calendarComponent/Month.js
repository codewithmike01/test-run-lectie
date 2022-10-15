import React from 'react';

import { MonthContainer } from '../CalendarStyles/calendar.Styles';
import Day from './Day';
const Month = ({ month }) => {
  return (
    <React.Fragment>
      <div className=" flex flex-col w-100">
        <div className="weeks">
          {month[0].map((row, i) => (
            <div className="t-center" key={i}>
              {row.format('ddd')}
            </div>
          ))}
        </div>

        <MonthContainer>
          {month.map((row, id) => (
            <React.Fragment key={id}>
              {row.map((day, idx) => (
                <Day day={day} key={idx} />
              ))}
            </React.Fragment>
          ))}
        </MonthContainer>
      </div>
    </React.Fragment>
  );
};

export default Month;
