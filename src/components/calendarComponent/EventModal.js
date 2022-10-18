import React from 'react';
import { EventContainer, EventWrapper } from './styles/calendar.Styles';
import { setShowEventModel } from '../../redux/features/modalSlice';
import { useDispatch } from 'react-redux';

import { buttonBlueColor } from '../globalStyles/globalStyles.styles';
import EventForm from './EventForm';

const EventModal = () => {
  const dispatch = useDispatch();

  return (
    <EventContainer color={buttonBlueColor}>
      <EventWrapper>
        <header className="flex">
          <button
            type="button"
            onClick={() => dispatch(setShowEventModel(false))}
          >
            &times;
          </button>
        </header>
        <EventForm />
      </EventWrapper>
    </EventContainer>
  );
};

export default EventModal;
