import React from 'react';
import { useState } from 'react';



const InputWindow = ({activity, setActivity}) => {
  const [ updateInput, setInput ] = useState('');

  function handleActivity (e) {
    e.preventDefault();
    setActivity(updateInput);
    setInput('');
    logTime()
  }

  function logTime() {
    // gets current time
    const currentTime = new Date();
  
    // gets hour/minute from logged currentTime
    const hours = currentTime.getHours();
    const minutes = currentTime.getMinutes();
  
    // converting to military time for database calculations
    const startTime = hours * 100 + minutes;
    console.log("Military time: " + startTime);
  }



  
  return (
    <div className="inputwindow">
      <form id="textandbutton">
        <input id="inputfield" type="text" value={updateInput} placeholder='Add activity here!' onChange={e => setInput(e.target.value)}></input>
        <button id="inputbutton" onClick={handleActivity}>
          Submit
        </button>
      </form>
    </div>
  )
}

export default InputWindow;