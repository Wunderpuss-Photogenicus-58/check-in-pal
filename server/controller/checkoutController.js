const db = require('../models/activityModel');


const checkoutController = {};

//define getAllTable data method
checkoutController.getAllTableData = async (req, res, next) => {
 
  //try and catch block
  try {
    // SQL request to time_card table
    const text = `
    SELECT * FROM time_card
    `;
// Execute the SQL query and store the result in the 'result' variable
    const result = await db.query(text);

    // Create a property called 'timecard' on the res.locals object, assign it the rows property (which is an array of objects) of the result object on line 16
    res.locals.timecard = result.rows;
    
    // Take the last ids endtime the first ids start time and subtract to get the total hours
    const totalHours = res.locals.timecard[res.locals.timecard.length - 1].endtime - res.locals.timecard[0].starttime;
    //push totalHours variable into the end of the res.locals.timecard array
    res.locals.timecard.push({ total: totalHours });

    console.log('totalHours is: ', totalHours);
    console.log('res.locals.timecard is: ', res.locals.timecard);
    //continue to the next middleware function
    next();
  }
  //catch error in checkoutController.getAllTableData middleware function
  catch(err) {
    next({
      log: 'Express error handler caught in checkoutController.getAllTableData middleware',
      status: 400,
      message: { err: 'Failed to get table data from database' }
    });
  }

};

//export module
module.exports = checkoutController;