import React, { useEffect, useState } from 'react';
import { getClock } from '../../../util';

const Clock = () => {
  const [time, setTime] = useState(getClock());

  useEffect(() => {
    const clock = setInterval(() => setTime(getClock()), 1000);

    return function cleanup() {
      clearInterval(clock);
    };
  }, [time]);

  return <div className="t-sm"> Time: {time}</div>;
};

export default Clock;
