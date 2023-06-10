import React from "react";
import { ActivityBox, TimerBox } from '../Components/ActivityAndTimer';
import { Switch, Checkout} from '../Components/SwitchAndCheckout';
import { useState } from "react";

const ActivityDisplay = ({activity}) => {





  return (
    <div className="activitydisplay">
      <div className="box-row">
        <ActivityBox activity={activity}/>
        <TimerBox />
      </div>
      <div className="button-row">
        {/* <Switch /> */}
        {/* <Checkout /> */}
      </div>
    </div>
  )
}

export default ActivityDisplay;