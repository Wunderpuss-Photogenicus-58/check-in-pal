import React from "react";
import Home from './Containers/Home.jsx';
import SwitchDisplay from './Containers/SwitchDisplay.jsx';
import ActivityDisplay from './Containers/ActivityDisplay.jsx';
import { useState } from "react";
import { Routes, Route } from "react-router-dom";
const App = () => {
  const [ activity, setActivity ] = useState('');
  // console.log(activity);


  

  return (
     <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/switch" element={<SwitchDisplay activity={activity} setActivity={setActivity} />} />
      <Route path="/activity" element={<ActivityDisplay activity={activity} />} />
    </Routes>
  );
}

export default App;