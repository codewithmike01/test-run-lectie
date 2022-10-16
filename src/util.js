import dayjs from 'dayjs';

// Util Function
const getSuffix = (daySuf) => {
  switch (daySuf) {
    case 1:
      return 'st';
    case 2:
      return 'nd';
    case 3:
      return 'rd';
    default:
      return 'th';
  }
};

export const getMonth = (month = dayjs().month()) => {
  const year = dayjs().year();
  const firstDayOfMonth = dayjs(new Date(year, month, 1)).day();
  let currentMonthCount = 0 - firstDayOfMonth;
  // Two Dimentional array for 5rows and 7 column
  const daysMatrix = new Array(5).fill([]).map(() => {
    return new Array(7).fill(null).map(() => {
      currentMonthCount++;
      return dayjs(new Date(year, month, currentMonthCount));
    });
  });
  return daysMatrix;
};

// To format the date as 14th October 2022
export const getTodayDate = () => {
  const date = new Date().toISOString().slice(0, 10);
  const day = date.split('-')[2];
  const monthNumber = dayjs().month();
  const yearMonth = dayjs(new Date(dayjs().year(), monthNumber))
    .format('YYYY MMMM')
    .split(' ')
    .reverse()
    .join(' ');
  const daySplit = day.split('')[day.length - 1];
  const nth = getSuffix(daySplit);
  return `${day}${nth} ${yearMonth}`;
};

// To format Time as hh:mm:ss am
export const getClock = () => {
  let date = new Date().toLocaleTimeString();
  let clock = date.split(' ')[0] + ' ' + date.split(' ')[1].toLowerCase();
  return clock;
};

// To get current day: To higlight the current day in Calendar
export const getDay = (day, selectedDay) => {
  const format = 'DD-MM-YY';
  const nowDay = dayjs().format(format);
  const curDay = day.format(format);

  if (nowDay === curDay) {
    return true;
  } else if (selectedDay === curDay) {
    return 'seen';
  }
};
