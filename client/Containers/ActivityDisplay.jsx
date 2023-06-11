import React from "react";
import { ActivityBox, TimerBox } from '../Components/ActivityAndTimer.jsx';
import { Switch, Checkout} from '../Components/SwitchAndCheckout.jsx';
import { useState } from "react";

const ActivityDisplay = ({activity}) => {





  return (
    <div className="activitydisplay">
      <div className="box-row">
        <ActivityBox activity={activity}/>
        <TimerBox />
      </div>
      <div className="button-row">
        <Switch />
        <Checkout />
      </div>
    </div>
  )
}

export default ActivityDisplay;