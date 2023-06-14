import React from "react";
import Prompt from '../Components/Prompt.jsx';
import InputWindow from '../Components/InputWindow.jsx';
import { Link } from 'react-router-dom';

// SwitchDisplay has a passed in props which are 'activity' and 'setActivity' from App.jsx
const SwitchDisplay = ({activity, setActivity}) => {


  
  // returning the switchpage div
  return (
    <>
      <div className="switchpage">
          {/* It renders Prompt.jsx and InputWindow.jsx and pass the 2 props to InputWindow */}
          <Prompt />
          <InputWindow activity={activity} setActivity={setActivity}/>
      </div>
    </>
  )
}

export default SwitchDisplay;