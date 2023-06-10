import React from 'react';
import { useState } from 'react';



const InputWindow = ({setActivity}) => {
  const [ updateInput, setInput ] = useState('');
  function handleActivity (e) {
    e.preventDefault();
    setActivity(updateInput);
    // console.log('Before resetting input: ', updateInput);
    setInput('');
    // console.log('After resetting input: ', updateInput);
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