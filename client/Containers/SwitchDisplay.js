import React from "react"
import Prompt from '../Components/Prompt.js'
import InputWindow from '../Components/InputWindow.js'
import { useState } from "react"


const SwitchDisplay = ({activity, setActivity}) => {



  
  return (
    <div className="switchpage">
      <Prompt />
      <InputWindow activity={activity} setActivity={setActivity}/>
    </div>
  )
}

export default SwitchDisplay;