import dayjs from 'dayjs';
import React from 'react';
import { getDay } from '../../util';
import { DayContainer } from './styles/calendar.Styles';

const Day = ({ day, func, months, funcEvent }) => {
  let allEvent = [];
  let newEvent = [];
  for (const month of months) {
    for (let i = 0; i < month['events'].length; i++) {
      allEvent.push(month['events'][i]);
    }
  }

  newEvent = JSON.parse(JSON.stringify(allEvent));

  if (newEvent.length > 0) {
    for (const event of newEvent) {
      if (typeof event['startDate'] !== 'object') {
        if (event['startDate'].includes('000Z')) {
          event['startDate'] = dayjs(new Date(event['startDate'])).format(
            'DD MM'
          );
        }
      } else if (typeof event['startDate'] === 'object') {
        event['startDate'] = event['startDate'].format('DD MM');
      }
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

        {newEvent.map((evt, i) => {
          return (
            evt['startDate'] === day.format('DD MM') && (
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
