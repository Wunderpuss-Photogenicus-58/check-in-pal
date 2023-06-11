import React from "react";
import CheckinButton from "../Components/CheckinButton.jsx";

const Home = () => {
  

  return (
    <div className="homepage">
      <h1 id="welcome">Hi! I'm your check in pal.</h1>
      <CheckinButton />
    </div>
  );
}

export default Home;