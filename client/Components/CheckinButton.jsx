import React from "react";
import { useNavigate } from "react-router-dom"

const CheckinButton = () => {
  const navigate = useNavigate();
  
  function switchTabs() {
    navigate('/switch');
  }

  return (
    <div className="checkin">
      <button onClick={switchTabs}>Check in</button>
    </div>
  )
}

export default CheckinButton;