import React from "react"
import Prompt from '../Components/Prompt.js'
import InputWindow from '../Components/InputWindow.js'
import { useState } from "react"


const SwitchDisplay = ({setActivity}) => {



  
  return (
    <div className="switchpage">
      <Prompt />
      <InputWindow 
        setActivity={setActivity}
      />
    </div>
  )
}

export default SwitchDisplay;