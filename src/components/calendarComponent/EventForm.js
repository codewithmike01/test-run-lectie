import React, { useEffect, useState } from 'react';
import { IoAttach } from 'react-icons/io5';
import { useSelector, useDispatch } from 'react-redux';
import { FiClock } from 'react-icons/fi';
import { BiMenuAltLeft } from 'react-icons/bi';
import { buttonBlueColor } from '../globalStyles/globalStyles.styles';
import ButtonColoured from '../utils/utilComponents/ButtonColored';
import Editor from '../utils/utilComponents/Editor';
import TimeModal from './TimeModal';
import { setShowTimeModel } from '../../redux/features/modalSlice';
import { colorArr } from './service/colorService';

const EventForm = () => {
  const dispatch = useDispatch();
  const { selectedSmallDay } = useSelector((state) => state.smallMonth);
  const { startTime, endTime } = useSelector((state) => state.startTimeModal);
  const { showTime } = useSelector((state) => state.calendarModal);
  const [showEditor, setShowEditor] = useState(false);

  const [timeClicked, setTimClicked] = useState(null);

  // Form values
  const [title, setTitle] = useState('');
  const [firstTime, setFirstTime] = useState(startTime);
  const [lastTime, setLastTime] = useState(endTime);
  const [color, setColor] = useState('');
  const [date, setDate] = useState(selectedSmallDay);

  useEffect(() => {
    setFirstTime(startTime);
    setLastTime(endTime);
  }, [startTime, endTime]);

  const handleSubmit = (e) => {
    e.target.preventDefault();
    console.log('submit clicked');
  };
  return (
    <form className="flex flex-col" onSubmit={(e) => handleSubmit(e)}>
      <input
        type="text"
        name="event-title"
        value={null}
        placeholder="Add Title"
        required
      />

      <div className="time-date flex">
        <FiClock />
        <div className="time-date-input flex flex-col">
          <input
            className="event-date"
            type="text"
            name="event-date"
            value={date}
            placeholder="Add Date"
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
              onClick={() => {
                setTimClicked('start-time');
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
              onClick={() => {
                setTimClicked('end-time');
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
        {showEditor && <Editor />}
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
            className="colors"
            typeof="button"
            onClick={() => setColor({ color })}
          >
            {' '}
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
