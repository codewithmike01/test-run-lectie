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

getTodayDate();
