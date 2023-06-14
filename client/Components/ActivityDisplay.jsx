import React from "react";
import { ActivityBox, TimerBox } from '../Components/ActivityAndTimer.jsx';
import { Switch, Checkout} from '../Components/SwitchAndCheckout.jsx';
import { useState } from "react";

// ActivityDisplay has passed in props 'activity' from App.jsx
const ActivityDisplay = ({activity}) => {


  // returning the activitydisplay div
  return (
    <div className="activitydisplay">
      <div className="box-row">
      {/* It renders 2 components which are AcitivityBox and TimerBox from ActivityAndTimer.jsx */}
      {/* And pass the props to the Activity component which is activity  */}
        <ActivityBox activity={activity}/>
        <TimerBox />
      </div>
      <div className="button-row">
        {/* Also renders another 2 components which are Switch and Checkout from SwitchAndCheckout.jsx */}
        <Switch />
        <Checkout />
      </div>
    </div>
  )
}

export default ActivityDisplay;