import React from "react";


const Switch = () => {
  // holds current time functionality
  function logTime() {
    // logs the exact current time
    const currentTime = new Date();
  
    // logs the hour and minutes from currentTime
    const hours = currentTime.getHours();
    const minutes = currentTime.getMinutes();
  
    // declares endTime set to military time to send to the database for calculations
    const endTime = hours * 100 + minutes;
    // ========== NEEDS MORE FUNCTIONALITY TO SEND endTime TO THE DATABASE ==========
  }
  
  
  // returning div switch with button 'Switch' with an onClick to call our logTime function
  return (
    <div className="switch">
      <button id="switch-button" onClick={logTime}>Switch</button>
    </div>
  )
}


const Checkout = () => {
  // holds current time functionality
  function logTime() {
    // logs the exact current time
    const currentTime = new Date();
  
    // logs the hour and minutes from currentTime
    const hours = currentTime.getHours();
    const minutes = currentTime.getMinutes();
  
    // declares endTime set to military time to send to the database for calculations
    const endTime = hours * 100 + minutes;
    // ========== NEEDS MORE FUNCTIONALITY TO SEND endTime TO THE DATABASE ==========
  }
  


  // returning div checkout with button 'Checkout' with an onClick to call our logTime function
  return (
    <div className="checkout">
      <button id="checkout-button" onClick={logTime}>Checkout</button>
    </div>
  )
}

export { Switch, Checkout };