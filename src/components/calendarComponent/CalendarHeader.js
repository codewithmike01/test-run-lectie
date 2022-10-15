import React from 'react';

import { CalendarHeaderContainer } from '../CalendarStyles/calendar.Styles';
import { useSelector } from 'react-redux';

import Profile from '../../Assets/Images/profile.jpg';
import Setting from '../../Assets/Images/setting.svg';
import dayjs from 'dayjs';

const CalendarHeader = () => {
  const { monthNumber } = useSelector((state) => state.month);
  let dateFormated = dayjs(new Date(dayjs().year(), monthNumber)).format(
    'YYYY MMMM'
  );

  // console.log(dayjs.year());
  return (
    <CalendarHeaderContainer className="flex j-btw a-center">
      <div className="left-side-header flex a-center">
        <h5>Studio</h5>
        <p>{dateFormated}</p>
      </div>

      <div className="right-side-header flex a-center">
        <div className="icon">
          <img src={Setting} alt="Setting icon" />
        </div>
        <div className="profile-image">
          <img src={Profile} alt="Profile " />
        </div>
      </div>
    </CalendarHeaderContainer>
  );
};

export default CalendarHeader;
