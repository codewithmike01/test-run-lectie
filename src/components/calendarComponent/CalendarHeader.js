import React from 'react';
import { useDispatch } from 'react-redux';
import {
  setPrevMonthNumber,
  setNextMonthNumber,
} from '../../redux/features/monthSlice';
import { CalendarHeaderContainer } from '../CalendarStyles/calendar.Styles';
import { useSelector } from 'react-redux';
import Button from '../utils/utilComponents/Button';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import Profile from '../../Assets/Images/profile.jpg';
import Setting from '../../Assets/Images/setting.svg';
import dayjs from 'dayjs';

const CalendarHeader = () => {
  const dispatch = useDispatch();
  const { monthNumber } = useSelector((state) => state.month);
  let dateFormated = dayjs(new Date(dayjs().year(), monthNumber)).format(
    'YYYY MMMM'
  );

  // console.log(dayjs.year());
  return (
    <CalendarHeaderContainer className="flex j-btw a-center">
      <div className="left-side-header flex a-center">
        <h5>Logo</h5>
        <p>{dateFormated}</p>
        <div className="month-inc-dec flex a-center">
          <Button
            content={<FiChevronLeft />}
            func={() => dispatch(setPrevMonthNumber())}
          />
          <Button
            content={<FiChevronRight />}
            func={() => dispatch(setNextMonthNumber())}
          />
        </div>
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
