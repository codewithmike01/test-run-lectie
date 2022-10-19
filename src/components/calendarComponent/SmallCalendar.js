import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { SmallCalendarConatiner } from './styles/calendar.Styles';
import { getDay } from '../../util';
import { setMonthNumber } from '../../redux/features/monthSlice';
import { setSelectedDate } from '../../redux/features/timeSlice';

const SmallCalendar = ({ currentMonth, smallMonthNumber }) => {
  const dispatch = useDispatch();
  const smallDispatch = useDispatch();
  const [smallCurrentMonth, setSmallCurrentMonth] = useState(null);
  const { selectedDate } = useSelector((state) => state.startEventModal);

  useEffect(() => {
    if (smallCurrentMonth !== null) {
      dispatch(setMonthNumber(smallCurrentMonth));
    }
  }, [smallCurrentMonth, dispatch]);
  return (
    <SmallCalendarConatiner>
      {currentMonth[0].map((day, i) => (
        <p key={i} className="day-init t-center t-sm">
          {day.format('dd').charAt(0)}
        </p>
      ))}
      {currentMonth.map((row, i) => (
        <React.Fragment key={i}>
          {row.map((day, idx) => (
            <button
              key={idx}
              type="button"
              onClick={() => {
                setSmallCurrentMonth(smallMonthNumber);
                smallDispatch(setSelectedDate(day.format('dddd MMMM DD')));
              }}
              className={
                getDay(day, selectedDate) === true
                  ? 'highlight'
                  : getDay(day, selectedDate) === 'seen'
                  ? 'selected'
                  : 'hov'
              }
            >
              <p className="t-sm">{day.format('D')}</p>
            </button>
          ))}
        </React.Fragment>
      ))}
    </SmallCalendarConatiner>
  );
};

export default SmallCalendar;
