import React from 'react';
import { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom'

// drilling prop setActivity for use in our component
const InputWindow = ({setActivity}) => {
  // declaring input as a new state initially at '', with setter function setInput
  const [ input, setInput ] = useState('');
  const navigate = useNavigate();

  // focusing input field when component renders
  const inputRef = useRef(null);
  useEffect(() => {
    inputRef.current.focus();
  }, []);

  // holds refresh prevention, setActivity/setInput functionality, and runs another function
  function handleActivity (e) {
    e.preventDefault();
    setActivity(input);
    logTime();
    setInput('');
    navigate("/activity");
  }

  // called from handleActivity(), async to ensure the promise is fulfilled first
  async function logTime() {
    // logs the exact current time
    const currentTime = new Date();
  
    // logs the hour and minutes from currentTime, then writes startTime as military time (w/o colon) to send to the database for calculations
    const hours = currentTime.getHours();
    const minutes = currentTime.getMinutes();
    const startTime = hours * 100 + minutes;
    // try and catch block
    try {
      const response = await fetch ('http://localhost:3000/switch', {
        //specify the method that is going to be used
        method: 'POST',
        //parse data into the body
        body: JSON.stringify({activity: input, startTime: startTime}),
        // define headers
        headers: {
          'Content-Type': 'application/json',
        }
      })
      // console log the message depends by the result of sending data
      if (response.ok) console.log('Data has been sent to the database!');
      else console.log('Failed to send data to the database');
    } catch (error) {
      // console log the error
      console.log('An error occurred while sending data to the database:', error);
    }
  }

  // returning div inputwindow
  return (
    <div className="inputwindow">
      <form id="textandbutton">

        {/* when user types in inputfield, we are updating the state of input */}
        <input id="inputfield" type="text" ref={inputRef} value={input} placeholder='E.g.: Algorithm practicing, job searching, etc...' onChange={e => setInput(e.target.value)}></input>
        {/* Submit button with an onClick to call our handleActivity function */}
        <button id="inputbutton" onClick={handleActivity}>Submit</button>
      </form>
    </div>
  )
}
//export 
export default InputWindow;