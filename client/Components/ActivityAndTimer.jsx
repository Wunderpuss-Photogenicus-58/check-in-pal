import React from "react";
import { useState, useEffect } from 'react';

const ActivityBox = ({activity}) => {
  
  
  return (
    <div className="activitybox">
      <h1 id="activity">{activity}</h1>
    </div>
  )
}

const TimerBox = () => {
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      // Update the seconds
      setSeconds((prevSeconds) => {
        if (prevSeconds === 59) {
          // If seconds reach 59, reset to 0 and update minutes
          setMinutes((prevMinutes) => {
            if (prevMinutes === 59) {
              // If minutes reach 59, reset to 0 and update hours
              setHours((prevHours) => prevHours + 1);
              return 0;
            } else {
              return prevMinutes + 1;
            }
          });
          return 0;
        } else {
          return prevSeconds + 1;
        }
      });
    }, 1000);

    return () => {
      clearInterval(interval); // Clear interval when component unmounts
    };
  }, []);

  // const stopTimer = () => {
  //   clearInterval(interval); // Clear the interval to stop the timer
  // };

  return (
    <div className="timerbox">
      <h1>Timer</h1>
      <div>{`${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`}</div>
      {/* <button onClick={stopTimer}>Stop</button> */}
    </div>
  )
}

export { ActivityBox, TimerBox };