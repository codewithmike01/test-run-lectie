import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import dayjs from 'dayjs';
import {
  setPrevMonthNumber,
  setNextMonthNumber,
} from '../../redux/features/monthSlice';
import { SideBarConatainer } from '../CalendarStyles/calendar.Styles';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import Button from '../utils/utilComponents/Button';
import ButtonColoured from '../utils/utilComponents/ButtonColored';
import { buttonBlueColor } from '../globalStyles/globalStyles.styles';

const SideBar = () => {
  const dispatch = useDispatch();
  const { monthNumber } = useSelector((state) => state.month);
  let dateFormated = dayjs(new Date(dayjs().year(), monthNumber)).format(
    'YYYY MMMM'
  );
  return (
    <SideBarConatainer>
      <ButtonColoured content={'Preview'} color={buttonBlueColor} />
      <div className="month-move flex">
        <Button
          content={<FiChevronLeft />}
          func={() => dispatch(setPrevMonthNumber())}
        />
        <p>{dateFormated.split(' ')[1]}</p>
        <p>{dateFormated.split(' ')[0]}</p>
        <Button
          content={<FiChevronRight />}
          func={() => dispatch(setNextMonthNumber())}
        />
      </div>
    </SideBarConatainer>
  );
};

export default SideBar;
