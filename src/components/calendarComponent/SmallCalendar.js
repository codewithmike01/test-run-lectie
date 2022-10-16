import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { SmallCalendarConatiner } from './styles/calendar.Styles';
import { getDay } from '../../util';
import { setMonthNumber } from '../../redux/features/monthSlice';
import { setSmallSelectedDay } from '../../redux/features/smallMonthSlice';

const SmallCalendar = ({ currentMonth, smallMonthNumber }) => {
  const dispatch = useDispatch();
  const smallDispatch = useDispatch();
  const [smallCurrentMonth, setSmallCurrentMonth] = useState(null);
  const { selectedSmallDay } = useSelector((state) => state.smallMonth);

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
                smallDispatch(setSmallSelectedDay(day.format('DD-MM-YY')));
              }}
              className={
                getDay(day, selectedSmallDay) === true
                  ? 'highlight'
                  : getDay(day, selectedSmallDay) === 'seen'
                  ? 'selected'
                  : ''
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
