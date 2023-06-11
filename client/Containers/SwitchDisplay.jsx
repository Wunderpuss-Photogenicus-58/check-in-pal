import React from "react";
import Prompt from '../Components/Prompt.jsx';
import InputWindow from '../Components/InputWindow.jsx';
import { Link } from 'react-router-dom';

const SwitchDisplay = ({activity, setActivity}) => {



  
  return (
    <>
      <div className="switchpage">
          <Prompt />
          <InputWindow activity={activity} setActivity={setActivity}/>
      </div>
    </>
  )
}

export default SwitchDisplay;