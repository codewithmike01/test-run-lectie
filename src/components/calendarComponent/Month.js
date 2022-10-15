import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Day from './Day';
import dayjs from 'dayjs';
import {
  setPrevMonthNumber,
  setNextMonthNumber,
} from '../../redux/features/monthSlice';
import Button from '../utils/utilComponents/Button';
import { FiChevronLeft, FiChevronRight, FiEdit } from 'react-icons/fi';
import { MonthContainer } from '../CalendarStyles/calendar.Styles';
import BgImage from '../../Assets/Images/background_edit.png';

const Month = ({ month }) => {
  const dispatch = useDispatch();
  const { monthNumber } = useSelector((state) => state.month);
  let dateFormated = dayjs(new Date(dayjs().year(), monthNumber)).format(
    'YYYY MMMM'
  );

  return (
    <React.Fragment>
      <div className=" flex flex-col w-100">
        <div className="edit-background flex flex-col">
          <div className="img-container">
            <img src={BgImage} alt="background cover" />
          </div>
          <p className="flex a-center">
            Edit
            <FiEdit />
          </p>
        </div>
        <div className="month-inc-dec flex a-center">
          <Button
            content={<FiChevronLeft />}
            func={() => dispatch(setPrevMonthNumber())}
          />
          <p>{dateFormated.split(' ')[1]}</p>
          <Button
            content={<FiChevronRight />}
            func={() => dispatch(setNextMonthNumber())}
          />
        </div>
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
