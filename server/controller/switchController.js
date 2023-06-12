const db = require('../models/activityModel');

//create empty controller object
const switchController = {};
//create postActivity function
switchController.postActivity = async (req, res, next) => {
  const { activity, startTime } = req.body;

  console.log('req.body: ', req.body);
  // const activity = 'testwork';
  // const startTime = 1400;

 //Try & catch block
  try {
 //SQL method to insert data into the time_card table   
    const text = `
    INSERT INTO time_card (activity, starttime)
    VALUES ($1, $2)
    `;
//create a variable that holds the params values
    const params = [activity, startTime];
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
