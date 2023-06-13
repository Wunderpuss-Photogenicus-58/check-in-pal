import React, { useEffect, useState } from "react";

const SummaryBox = () => {
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
          const startConversion = data[i].starttime;
          const endConversion = data[i].endtime;
          let startTime;
          let endTime;
          
          if (startConversion >= 1200) {
            startTime = `${Math.floor(startConversion / 100) % 12}:${(startConversion % 100).toString().padStart(2, '0')} pm`;
          } else {
            startTime = `${Math.floor(startConversion / 100)}:${(startConversion % 100).toString().padStart(2, '0')} am`;
          }
          
          if (endConversion >= 1200) {
            endTime = `${Math.floor(endConversion / 100) % 12}:${(endConversion % 100).toString().padStart(2, '0')} pm`;
          } else {
            endTime = `${Math.floor(endConversion / 100)}:${(endConversion % 100).toString().padStart(2, '0')} am`;
          }
          rowElements.push(
            <tr key={i}>
              <td className="activity">{data[i].activity}</td>
              <td className="time" colSpan={2}>{startTime} - {endTime}</td>
            </tr>
          );
        }
          
        const hours = `${Math.floor(data[data.length - 1].total / 100)}`;
        const minutes = `${(data[data.length - 1].total % 100).toString().padStart(2, '0')}`;

        rowElements.push(
          <tr className="totalRow">
            <td colSpan={2} id='total'>Total: {hours} hours & {minutes} minutes</td>
          </tr>
        );


        setRows(rowElements);
  
      } catch (err) {
        console.log('An error occurred fetching data from database:', err);
      }
    }
    getData();
  }, []);
  

  return (
    <div className="summarybox">
      <table>
        <thead>
          <tr>
            <th colSpan={4}>Day Summary</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="activityHeading">Activity</td>
            <td className="timeHeading" colSpan={2}>Time Spent</td>
          </tr>
            {rows}
        </tbody>
      </table>
    </div>
  )

}

export default SummaryBox;
