import React from 'react';
import { TimeModalContainer } from './styles/calendar.Styles';
import { setEndTime, setStartTime } from '../../redux/features/timeSlice';
import { useDispatch } from 'react-redux';
import { setShowTimeModel } from '../../redux/features/modalSlice';
import { startTime, endTime } from './service/timePopup';

const TimeModal = ({ timeClicked }) => {
  const dispacth = useDispatch();

  return (
    <TimeModalContainer className="flex flex-col" pos={timeClicked}>
      {timeClicked !== 'end-time' &&
        startTime.map(({ time, i }) => (
          <div
            className="time"
            typeof="button"
            onClick={(e) => {
              dispacth(setShowTimeModel(false));
              dispacth(setStartTime(e.target.textContent));
            }}
            key={i}
          >
            {time}
          </div>
        ))}

      {timeClicked === 'end-time' &&
        endTime.map(({ time, i }) => (
          <div
            className="time"
            typeof="button"
            onClick={(e) => {
              dispacth(setShowTimeModel(false));
              dispacth(setEndTime(e.target.textContent.split(' (')[0]));
            }}
            key={i}
          >
            {time}
          </div>
        ))}
    </TimeModalContainer>
  );
};

export default TimeModal;
