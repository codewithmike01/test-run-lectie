import React, { useState } from 'react';

import { useSelector } from 'react-redux';
import Clock from '../../Assets/Images/clock.png';
import Descripe from '../../Assets/Images/describe.svg';

const EventForm = () => {
  const { selectedSmallDay } = useSelector((state) => state.smallMonth);

  const [title, setTitle] = useState();
  const [date, setDate] = useState(selectedSmallDay);

  return (
    <form className="flex flex-col">
      <input
        type="text"
        name="event-title"
        value={null}
        placeholder="Add Title"
        required
      />

      <div className="time-date flex">
        <div>
          <img src={Clock} alt="Time and date input" />
        </div>
        <div className="time-date-input flex flex-col">
          <input
            className="event-date"
            type="text"
            name="event-date"
            value={date}
            placeholder="Add Date"
            required
          />
          <input
            className="time-size"
            type="text"
            name="event-start-time"
            value={null}
            placeholder="Add Time"
            required
          />
        </div>
      </div>

      <div className="description flex">
        <div>
          <img src={Descripe} alt="description" />
        </div>
        <textarea placeholder="Add description"></textarea>
      </div>
    </form>
  );
};

export default EventForm;
