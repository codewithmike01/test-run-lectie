import React from 'react';
import { CalendarHeaderContainer } from '../CalendarStyles/calendar.Styles';
import { getTodayDate } from '../../util';
import Profile from '../../Assets/Images/profile.jpg';
import Setting from '../../Assets/Images/setting.svg';
import Clock from '../utils/utilComponents/Clock';

const CalendarHeader = () => {
  return (
    <CalendarHeaderContainer className="flex j-btw a-center">
      <div className="left-side-header flex a-center">
        <h5>Studio</h5>
      </div>

      <div className="date-time">
        <p>Date: {getTodayDate()}</p>
        <Clock />
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
