import React, { useEffect, useState } from 'react';
import { EventContainer, EventWrapper } from './styles/calendar.Styles';
import { setShowEventModel } from '../../redux/features/modalSlice';
import { useDispatch } from 'react-redux';
import { FiTrash2, FiX } from 'react-icons/fi';
import { buttonBlueColor } from '../globalStyles/globalStyles.styles';
import EventForm from './EventForm';
import { setDeleteEvent } from '../../redux/features/calendarSlice';

const EventModal = ({ editOption }) => {
  const dispatch = useDispatch();
  const [showDelete, setShowDelete] = useState(false);

  useEffect(() => {
    if (editOption) {
      setShowDelete(true);
    }
  }, []);

  return (
    <EventContainer color={buttonBlueColor}>
      <EventWrapper>
        <header className="flex a-center">
          {showDelete && (
            <FiTrash2
              onClick={() => {
                dispatch(
                  setDeleteEvent(document.querySelector('.hideInput').value)
                );
                dispatch(setShowEventModel(false));
              }}
            />
          )}
          <button
            className="flex a-center"
            type="button"
            onClick={() => dispatch(setShowEventModel(false))}
          >
            <FiX />
          </button>
        </header>
        <EventForm />
      </EventWrapper>
    </EventContainer>
  );
};

export default EventModal;
