import React from "react";
import { useNavigate } from "react-router-dom"

const Switch = () => {
  const navigate = useNavigate();

  // holds current time functionality
  async function logTime() {
    // logs the exact current time
    const currentTime = new Date();
  
    // logs the hour and minutes from currentTime
    const hours = currentTime.getHours();
    const minutes = currentTime.getMinutes();
  
    // declares endTime set to military time to send to the database for calculations
    const endTime = hours * 100 + minutes;
    // ========== NEEDS MORE FUNCTIONALITY TO SEND endTime TO THE DATABASE ==========
    try {
      const response = await fetch ('http://localhost:3000/activity', {
        //specify the method that is going to be used
        method: 'PATCH',
        //parse data into the body
        body: JSON.stringify({endTime: endTime}),
        // define headers
        headers: {
          'Content-Type': 'application/json',
        }
      })
      // console log the message depends by the result of sending data
      if (response.ok) console.log('End time has been sent to the database!');
      else console.log('Failed to send end time to the database');
    } catch (error) {
      // console log the error
      console.log('An error occurred while sending end time to the database:', error);
    }
    navigate('/switch');
  }
  
  
  // returning div switch with button 'Switch' with an onClick to call our logTime function
  return (
    <div className="switch">
      <button id="switch-button" onClick={logTime}>Switch</button>
    </div>
  )
}


const Checkout = () => {
  const navigate = useNavigate();
  // holds current time functionality
  async function logTime() {
    // logs the exact current time
    const currentTime = new Date();
  
    // logs the hour and minutes from currentTime
    const hours = currentTime.getHours();
    const minutes = currentTime.getMinutes();
  
    // declares endTime set to military time to send to the database for calculations
    const endTime = hours * 100 + minutes;
    // ========== NEEDS MORE FUNCTIONALITY TO SEND endTime TO THE DATABASE ==========
    try {
      const response = await fetch ('http://localhost:3000/activity', {
        //specify the method that is going to be used
        method: 'PATCH',
        //parse data into the body
        body: JSON.stringify({endTime: endTime}),
        // define headers
        headers: {
          'Content-Type': 'application/json',
        }
      })
      // console log the message depends by the result of sending data
      if (response.ok) console.log('End time has been sent to the database!');
      else console.log('Failed to send end time to the database');
    } catch (error) {
      // console log the error
      console.log('An error occurred while sending end time to the database:', error);
    }
    navigate('/checkout');
  }
  


  // returning div checkout with button 'Checkout' with an onClick to call our logTime function
  return (
    <div className="checkout">
      <button id="checkout-button" onClick={logTime}>Checkout</button>
    </div>
  )
}

export { Switch, Checkout };