import React from "react";


const Switch = () => {
  function logTime() {
    // gets current time
    const currentTime = new Date();
  
    // gets hour/minute from logged currentTime
    const hours = currentTime.getHours();
    const minutes = currentTime.getMinutes();
  
    // converting to military time for database calculations
    const endTime = hours * 100 + minutes;
    console.log("Military time: " + endTime);
  }
  
  
  
  return (
    <div className="switch">
      <button id="switch-button" onClick={logTime}>Switch</button>
    </div>
  )
}


const Checkout = () => {
  function logTime() {
    // gets current time
    const currentTime = new Date();
  
    // gets hour/minute from logged currentTime
    const hours = currentTime.getHours();
    const minutes = currentTime.getMinutes();
  
    // converting to military time for database calculations
    const endTime = hours * 100 + minutes;
    console.log("Military time: " + endTime);
  }
  



  return (
    <div className="checkout">
      <button id="checkout-button" onClick={logTime}>Checkout</button>
    </div>
  )
}

export { Switch, Checkout };