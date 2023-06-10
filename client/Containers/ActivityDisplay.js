import React from "react";
import { ActivityBox, TimerBox } from '../Components/ActivityAndTimer';
import { Switch, Checkout} from '../Components/SwitchAndCheckout';

const ActivityDisplay = () => {





  return (
    <div className="activitydisplay">
      <div className="box-row">
        <ActivityBox />
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