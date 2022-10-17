import React from 'react';
import Clock from '../../Assets/Images/clock.png';
import Descripe from '../../Assets/Images/describe.svg';
const EventForm = () => {
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
            value={null}
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
        <textarea placeholder="Description"></textarea>
      </div>
    </form>
  );
};

export default EventForm;
