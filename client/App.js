import React from "react";
import Home from './Containers/Home.js';
import SwitchDisplay from './Containers/SwitchDisplay.js';
import ActivityDisplay from './Containers/ActivityDisplay.js';
import { useState } from "react";

const App = () => {
  const [ activity, setActivity ] = useState('');
  // console.log(activity);




  return (
    <div>
      {/* <Home /> */}
      <SwitchDisplay setActivity={setActivity}/>
      <ActivityDisplay activity={activity}/>
    </div>
  );
}

export default App;