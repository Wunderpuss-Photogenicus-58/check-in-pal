import React from 'react';
import { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom'

// drilling prop setActivity for use in our component
const InputWindow = ({setActivity}) => {
  // declaring input as a new state initially at '', with setter function setInput
  const [ input, setInput ] = useState('');
  const navigate = useNavigate();

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

  // called from handleActivity()
  async function logTime() {
    // logs the exact current time
    const currentTime = new Date();
  
    // logs the hour and minutes from currentTime
    const hours = currentTime.getHours();
    const minutes = currentTime.getMinutes();
  
    // declares startTime set to military time to send to the database for calculations
    const startTime = hours * 100 + minutes;
    // ========== NEEDS MORE FUNCTIONALITY TO SEND startTime TO THE DATABASE ==========
    try {
      const response = await fetch ('http://localhost:3000/switch', {
        method: 'POST',
        body: JSON.stringify({activity: input, startTime: startTime}),
        // mode: 'no-cors',
        headers: {
          'Content-Type': 'application/json',
        }
      })
      if (response.ok) console.log('Data has been sent to the database!');
      else console.log('Failed to send data to the database');
    } catch (error) {
      console.log('An error occurred while sending data to the database:', error);
    }
  }

  // returning div inputwindow
  return (
    <div className="inputwindow">
      <form id="textandbutton">

        {/* when user types in inputfield, we are updating the state of input */}
        <input id="inputfield" type="text" ref={inputRef} value={input} placeholder='Add activity here!' onChange={e => setInput(e.target.value)}></input>
        {/* Submit button with an onClick to call our handleActivity function */}
        <button id="inputbutton" onClick={handleActivity}>Submit</button>
      </form>
    </div>
  )
}

export default InputWindow;