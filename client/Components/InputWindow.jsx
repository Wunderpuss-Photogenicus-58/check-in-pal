import React from 'react';
import { useState } from 'react';


// drilling prop setActivity for use in our component
const InputWindow = ({setActivity}) => {
  // declaring updateInput as a new state initially at '', with setter function setInput
  const [ updateInput, setInput ] = useState('');

  // holds refresh prevention, setActivity/setInput functionality, and runs another function
  function handleActivity (e) {
    e.preventDefault();
    setActivity(updateInput);
    setInput('');
    logTime()
  }

  // called from handleActivity()
  function logTime() {
    // logs the exact current time
    const currentTime = new Date();
  
    // logs the hour and minutes from currentTime
    const hours = currentTime.getHours();
    const minutes = currentTime.getMinutes();
  
    // declares startTime set to military time to send to the database for calculations
    const startTime = hours * 100 + minutes;
    // ========== NEEDS MORE FUNCTIONALITY TO SEND startTime TO THE DATABASE ==========
  }



  // returning div inputwindow
  return (
    <div className="inputwindow">
      <form id="textandbutton">

        {/* when user types in inputfield, we are updating the state of updateInput */}
        <input id="inputfield" type="text" value={updateInput} placeholder='Add activity here!' onChange={e => setInput(e.target.value)}></input>
        {/* Submit button with an onClick to call our handleActivity function */}
        <button id="inputbutton" onClick={handleActivity}>Submit</button>
      </form>
    </div>
  )
}

export default InputWindow;