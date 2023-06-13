import React from "react";
import Home from './Components/Home.jsx';
import SwitchDisplay from './Components/SwitchDisplay.jsx';
import ActivityDisplay from './Components/ActivityDisplay.jsx';
import CheckoutDisplay from './Components/CheckoutDisplay.jsx';
import Login from './Components/Login.jsx';
import { useState } from "react";
import { Routes, Route } from "react-router-dom";

const App = () => {
  // create state called 'activity' and assign it to empty string and it's setter function as 'setActivity'
  const [ activity, setActivity ] = useState('');


  // return the routes , each rendering a component at their respective paths
  return (
     // create routes
    //  <Routes>
    //   <Route path="/login" element={<Home />} />
    //   <Route path="/signup" element={<SwitchDisplay activity={activity} setActivity={setActivity} />} />
    //   <Route path="/home" element={<ActivityDisplay activity={activity} />} />
    //   <Route path="/todo" element={<CheckoutDisplay />} />
    //   <Route path="/studyzone" element={<CheckoutDisplay />} />
    //   <Route path="/checkout" element={<CheckoutDisplay />} />
    // </Routes>
    <Login />
  );
}

export default App;