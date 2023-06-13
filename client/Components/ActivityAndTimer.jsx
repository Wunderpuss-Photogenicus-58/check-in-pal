import React from "react";
import { useState, useEffect } from 'react';

const ActivityBox = ({activity}) => {
  
  // returning div activitybox with the associated activity from the /switch tab
  return (
    <div className="activitybox">
      <h1 id="activity">{activity}</h1>
    </div>
  )
}

const TimerBox = () => {
  // setting states hours/minutes/seconds and their respective setter functions
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  // running useEffect once to begin our timer when the component renders
  useEffect(() => {
    // setting a one second interval to increment the timer
    const interval = setInterval(() => {
      // checks if the last second was 59, resets to 0 and increments minutes by 1 if so
      setSeconds((prevSeconds) => {
        if (prevSeconds === 59) {
          // checks if the last minute was 59, resets to 0 and increments hours by 1 if so
          // running inside the last if statement to trigger a domino effect at the hour mark (e.g.: 0 hrs, 59 mins, 59 secs => 1:00:00)
          setMinutes((prevMinutes) => {
            if (prevMinutes === 59) {
              setHours((prevHours) => prevHours + 1);
              return 0;
            } else {
              // if not, minutes just increments
              return prevMinutes + 1;
            }
          });
          return 0;
        } else {
          // if not, seconds just increments
          return prevSeconds + 1;
        }
      });
    }, 1000);

    // ends the timer if the component unrenders/unmounts
    return () => {
      clearInterval(interval);
    };
  }, []);

  // Might use this for a pausing stretch feature
  // const stopTimer = () => {
  //   clearInterval(interval);
  // };

  // returning div timerbox with a concatenated hours/minutes/seconds format: 00:00:00
  return (
    <div className="timerbox">
      <h1>Timer</h1>
      <p>{`${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`}</p>
      {/* Button for stopping the timer */}
      {/* <button onClick={stopTimer}>Stop</button> */}
    </div>
  )
}

export { ActivityBox, TimerBox };