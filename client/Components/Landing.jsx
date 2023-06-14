import React from "react";
import CheckinButton from "./CheckinButton.jsx";

const Landing = () => {


  // returning the hompage div
  return (
    <div className="homepage">
      {/* Display the welcome message  */}
      <h1 id="welcome">Hi! I'm your check in pal.</h1>
      {/* renders the CheckinButton component */}
      <CheckinButton />
    </div>
  );
}

export default Landing;