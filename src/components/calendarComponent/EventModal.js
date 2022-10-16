import React, { useState } from 'react';
import { EventContainer } from './styles/calendar.Styles';
import { setShowModel } from '../../redux/features/modalSlice';
import { useDispatch, useSelector } from 'react-redux';
import { FiClock, FiPlusCircle } from 'react-icons/fi';
import Descrip from '../../Assets/Images/descrip.svg';
import { buttonBlueColor } from '../globalStyles/globalStyles.styles';

const EventModal = () => {
  const dispatch = useDispatch();
  const { selectedSmallDay } = useSelector((state) => state.smallMonth);

  const [title, setTitle] = useState();
  const [date, setDate] = useState(selectedSmallDay);

  return (
    <EventContainer color={buttonBlueColor}>
      <form>
        <header className="flex">
          <button type="button" onClick={() => dispatch(setShowModel(false))}>
            &times;
          </button>
        </header>
        <div className="form-inputs">
          <div></div>
          <input
            type="text"
            name="title"
            placeholder="Add title"
            value={title}
            required
            className="event-title"
            onChange={(e) => setTitle(e.target.value)}
          />

          <div className="date-time flex">
            <FiClock />
            <div className="set-date-time flex">
              <input
                type="text"
                name="date"
                value={date}
                required
                className="time-date"
                onChange={(e) => setDate(e.target.value)}
              />
              <input type="text" name="date" required className="time" />
              <span>-</span>
              <input type="text" name="date" required className="time" />
            </div>
          </div>
          <div className="descibe flex">
            <div className="img-container">
              <img src={Descrip} alt="Describe text" />
            </div>
            <input
              type="text"
              name="description"
              placeholder="Add description"
              value={title}
              required
              className="description"
            />
          </div>

          <div className="add-image flex">
            <FiPlusCircle />
            <p className="t-sm" typeof="button">
              Add event image
            </p>
          </div>

          <div className="button-contain flex ">
            <button type="button" className="button-save t-sm">
              {' '}
              Save
            </button>
          </div>
        </div>
      </form>
    </EventContainer>
  );
};

export default EventModal;
