import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { SmallCalendarConatiner } from './styles/calendar.Styles';
import { getDay } from '../../util';
import { setMonthNumber } from '../../redux/features/monthSlice';

const SmallCalendar = ({ currentMonth, smallMonthNumber }) => {
  const dispatch = useDispatch();
  const [smallCurrentMonth, setSmallCurrentMonth] = useState(null);

  useEffect(() => {
    if (smallCurrentMonth !== null) {
      dispatch(setMonthNumber(smallCurrentMonth));
    }
  }, [smallCurrentMonth, dispatch]);
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
            <button
              key={idx}
              type="button"
              onClick={() => setSmallCurrentMonth(smallMonthNumber)}
            >
              <span className={getDay(day) ? 'highlight' : ''}>
                {day.format('D')}
              </span>
            </button>
          ))}
        </React.Fragment>
      ))}
    </SmallCalendarConatiner>
  );
};

export default SmallCalendar;
