import React from "react";
import Home from './Containers/Home.jsx';
import SwitchDisplay from './Containers/SwitchDisplay.jsx';
import ActivityDisplay from './Containers/ActivityDisplay.jsx';
import CheckoutDisplay from './Containers/CheckoutDisplay.jsx';
import { useState } from "react";
import { Routes, Route } from "react-router-dom";

const App = () => {
  // create state called 'activity' and assign it to empty string and it's setter function as 'setActivity'
  const [ activity, setActivity ] = useState('');


  // return the routes , each rendering a component at their respective paths
  return (
     // create routes
     <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/switch" element={<SwitchDisplay activity={activity} setActivity={setActivity} />} />
      <Route path="/activity" element={<ActivityDisplay activity={activity} />} />
      <Route path="/checkout" element={<CheckoutDisplay />} />
    </Routes>
  );
}

export default App;