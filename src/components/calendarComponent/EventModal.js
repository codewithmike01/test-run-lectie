import React, { useState } from 'react';
import { EventContainer, EventWrapper } from './styles/calendar.Styles';
import { setShowModel } from '../../redux/features/modalSlice';
import { useDispatch, useSelector } from 'react-redux';

import { buttonBlueColor } from '../globalStyles/globalStyles.styles';
import EventForm from './EventForm';

const EventModal = () => {
  const dispatch = useDispatch();
  const { selectedSmallDay } = useSelector((state) => state.smallMonth);

  const [title, setTitle] = useState();
  const [date, setDate] = useState(selectedSmallDay);

  return (
    <EventContainer color={buttonBlueColor}>
      <EventWrapper>
        <header className="flex">
          <button type="button" onClick={() => dispatch(setShowModel(false))}>
            &times;
          </button>
        </header>
        <EventForm />
      </EventWrapper>
    </EventContainer>
  );
};

export default EventModal;
