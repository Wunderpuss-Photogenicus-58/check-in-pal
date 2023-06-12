// const db = require('../models/activityModel');

// //create empty controller object
// const activityController = {};
// //create postActivity function
// activityController.postActivity = async (req, res, next) => {
//   const activity = 'codewars';
//   const starttime = 1100;
//   const day = '06/10';
//  //Try & catch block 
//   try {
//  //SQL method to insert data into the time_card table   
//     const text = `
//     INSERT INTO time_card (activity, starttime, day)
//     VALUES ($1, $2, $3)
//     `;
// //create a variable that holds the params values
//     const params = [activity, starttime, day];
//     //Query the result
//     const result = await db.query(text, params);
//     console.log('result is: ', result);
//     //allow for the middleware function to continue to next function/middleware
//     next();
//   }
//   //catch error handler
//   catch(err) {
//     next({
//       log: 'Express error handler caught in activityController.postActivity middleware',
//       status: 400,
//       message: { err: 'Failed to insert to database' }
//     });
//   }

// };

// //export module
// module.exports = activityController;

const db = require('../models/activityModel');

//create empty controller object
const switchController = {};
//create postActivity function
switchController.postActivity = async (req, res, next) => {
  const activity = 'interviews';
  const starttime = 1130;
  const day = '06/10';
 //Try & catch block 
  try {
 //SQL method to insert data into the time_card table   
    const text = `
    INSERT INTO time_card (activity, starttime, day)
    VALUES ($1, $2, $3)
    `;
//create a variable that holds the params values
    const params = [activity, starttime, day];
    //Query the result
    const result = await db.query(text, params);
    console.log('result is: ', result);
    //allow for the middleware function to continue to next function/middleware
    next();
  }
  //catch error handler
  catch(err) {
    next({
      log: 'Express error handler caught in switchController.postActivity middleware',
      status: 400,
      message: { err: 'Failed to insert to database' }
    });
  }

};

//export module
module.exports = switchController;
