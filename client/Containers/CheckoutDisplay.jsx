import React, { useEffect, useState } from "react";
import Prompt from "../Components/Prompt.jsx";

const CheckoutDisplay = () => {
/**
 * one row for each activity with their associated start/end times
 * total row for all combined times to show hours worked
 * checkin redirect button that takes user back to the home page
 */

  const [ rows, setRows ] = useState([]);

  useEffect(() => {
    async function getData() {
      try {
        const response = await fetch('http://localhost:3000/checkout')
        const data = await response.json();
        
        if (response.ok) console.log('data in if statement: ', data);
        else console.log('Failed to get data');
        
        const rowElements = [];

        for (let i = 0; i < data.length - 1; i++) {
          // console.log('Data type of startTime:', typeof data[i].starttime);
          // console.log('starttime:', data[i].starttime);
          const startTime = `${Math.floor(data[i].starttime / 100)}:${(data[i].starttime % 100).toString().padStart(2, '0')}`;
          const endTime = `${Math.floor(data[i].endtime / 100)}:${(data[i].endtime % 100).toString().padStart(2, '0')}`;

    
          rowElements.push(<p key={i}>Activity: {data[i].activity}, Time spent: {startTime} - {endTime}</p>);
        }
          
        const hours = `${Math.floor(data[data.length - 1].total / 100)}`;
        const minutes = `${(data[data.length - 1].total % 100).toString().padStart(2, '0')}`;
        rowElements.push(<h3 key={'total'}>Total: {hours} hours & {minutes} minutes</h3>)


        setRows(rowElements);
  
      } catch (err) {
        console.log('An error occurred fetching data from database:', err);
      }
    }
    getData();
  }, []);
  

  return (
    <div className="checkoutpage">
     {rows}
     <p></p>
    </div>
  )

}

export default CheckoutDisplay;