import React from 'react';
import { getDay } from '../../util';
import { DayContainer } from './styles/calendar.Styles';

const Day = ({ day, func, months, funcEvent }) => {
  let allEvent = [];
  for (const month of months) {
    for (let i = 0; i < month['events'].length; i++) {
      allEvent.push(month['events'][i]);
    }
  }

  return (
    <DayContainer
      className={`day-month`}
      typeof="button"
      onClick={() => func(day)}
    >
      <header className="flex flex-col">
        <p className={`day t-sm  ${getDay(day, null) ? 'highlight' : 'down'}`}>
          {day.format('DD')}
        </p>

        {allEvent.map((evt, i) => {
          return (
            evt['startDate'].format('DD MM') === day.format('DD MM') && (
              <div className=" flex event-tag a-center" key={i}>
                <span
                  className="event-color"
                  style={{ backgroundColor: evt['color'] }}
                ></span>
                <p
                  className="event t-sm"
                  typeof="button"
                  onClick={() => funcEvent(evt['id'])}
                >
                  {' '}
                  {evt['title']}{' '}
                </p>
              </div>
            )
          );
        })}
      </header>
    </DayContainer>
  );
};

export default Day;
// <div className=" flex event-tag a-center" key={i}>
// <span className="event-color"></span>
// <p className="event t-sm">Hello</p>
// </div>

// dayEvent[0]['date'].format('DD MM') === day.format('DD MM') && (
//   <div className=" flex event-tag a-center">
//     <span className="event-color"></span>
//     <p className="event t-sm">Hello</p>
//     <p>{evt}</p>
//   </div>
