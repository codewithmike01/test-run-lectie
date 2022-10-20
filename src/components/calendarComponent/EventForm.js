import React, { useEffect, useState } from 'react';
import uuid from 'react-uuid';
import { IoAttach } from 'react-icons/io5';
import { useSelector, useDispatch } from 'react-redux';
import { FiClock, FiCheck } from 'react-icons/fi';
import { BiMenuAltLeft } from 'react-icons/bi';
import { buttonBlueColor } from '../globalStyles/globalStyles.styles';
import ButtonColoured from '../utils/utilComponents/ButtonColored';
import TimeModal from './TimeModal';
import {
  setShowEventModel,
  setShowTimeModel,
} from '../../redux/features/modalSlice';
import {
  setCalendarEvent,
  setSelectedEvent,
} from '../../redux/features/calendarSlice';
import { colorArr } from './service/colorService';
import dayjs from 'dayjs';
import { setEndTime, setStartTime } from '../../redux/features/timeSlice';

const EventForm = () => {
  const dispatch = useDispatch();
  const { startTime, endTime, selectedDate } = useSelector(
    (state) => state.startEventModal
  );
  const { showTime } = useSelector((state) => state.calendarModal);
  const { selectedEvent } = useSelector((state) => state.calendar);

  const [showEditor, setShowEditor] = useState(false);

  const [timeClicked, setTimeClicked] = useState(null);

  // Form values
  const [title, setTitle] = useState('');
  const [firstTime, setFirstTime] = useState('');
  const [lastTime, setLastTime] = useState('');
  const [colored, setColor] = useState(colorArr[0]['color']);
  const [description, setDescription] = useState('');
  const [date, setDate] = useState(
    selectedDate || dayjs().format('dddd MMMM DD')
  );
  const [id, setId] = useState('');

  useEffect(() => {
    if (selectedEvent !== '') {
      setTitle(selectedEvent['title']);
      setFirstTime(selectedEvent['startTime']);
      setLastTime(selectedEvent['endTime']);
      setDescription(selectedEvent['description']);
      setColor(selectedEvent['color']);
      setId(selectedEvent['id']);
      dispatch(setStartTime(selectedEvent['startTime']));
      dispatch(setEndTime(selectedEvent['endTime']));
    } else setId('');
    dispatch(setSelectedEvent(''));
  }, []);

  useEffect(() => {
    setFirstTime(startTime);
    setLastTime(endTime);
  }, [startTime, endTime]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const idx = id !== '' ? id : uuid();

    const eventObj = {
      date: selectedDate.format('YYYY-M'),
      background: 'test',
      events: [
        {
          id: idx,
          title: title,
          startDate: date,
          endDate: 'null',
          startTime: firstTime,
          endTime: lastTime,
          description: description,
          link: 'unknown',
          color: colored,
        },
      ],
    };
    dispatch(setCalendarEvent(eventObj));
    dispatch(setShowEventModel(false));
  };

  return (
    <form className="flex flex-col" onSubmit={(e) => handleSubmit(e)}>
      <input
        type="text"
        name="event-title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Add Title"
        required
      />
      <input
        type="text"
        value={id}
        placeholder="no id"
        onChange={() => ''}
        className="hideInput"
        hidden
      />
      <div className="time-date flex">
        <FiClock />
        <div className="time-date-input flex flex-col">
          <input
            className="event-date"
            type="text"
            name="event-date"
            value={date.format('dddd MMMM DD')}
            placeholder="Add Date"
            onChange={(e) => setDate(e.target.value)}
            required
          />
          <div className="time-container flex ">
            <input
              className="time-size"
              type="text"
              name="event-start-time"
              value={firstTime}
              placeholder="Start Time"
              typeof="button"
              onChange={(e) => setFirstTime(e.target.value)}
              onClick={() => {
                setTimeClicked('start-time');
                dispatch(setShowTimeModel(true));
              }}
              required
            />
            <input
              className="time-size"
              type="text"
              name="event-start-time"
              value={lastTime}
              placeholder="End Time"
              onChange={(e) => setLastTime(e.target.value)}
              onClick={() => {
                setTimeClicked('end-time');
                dispatch(setShowTimeModel(true));
              }}
              required
            />
            {showTime && <TimeModal timeClicked={timeClicked} />}
          </div>
        </div>
      </div>

      <div className={`description flex ${showEditor ? '' : 'a-center'} `}>
        <BiMenuAltLeft />
        {!showEditor && (
          <p
            className={`t-sm  ${showEditor ? '' : 'hovDescription'}`}
            typeof="button"
            onClick={() => setShowEditor(true)}
          >
            Add description
          </p>
        )}
        {showEditor && (
          <div>
            <textarea
              placeholder="Add description"
              className="text-area"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>
        )}
      </div>

      <div className="add-image flex a-center">
        <IoAttach />
        <p className="t-sm">Add attachment</p>
      </div>

      <div className="flex color-contain">
        {colorArr.map(({ color, id }) => (
          <div
            style={{ backgroundColor: color }}
            key={id}
            className="flex colors"
            typeof="button"
            onClick={() => setColor(color)}
          >
            {color === colored && <FiCheck />}
          </div>
        ))}
      </div>

      <div className="button-container flex">
        <ButtonColoured
          content="Save"
          color={buttonBlueColor}
          type="submit"
          Type={'submit'}
        />
      </div>
    </form>
  );
};

export default EventForm;
