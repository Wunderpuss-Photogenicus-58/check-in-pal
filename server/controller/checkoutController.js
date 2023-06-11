const db = require('../models/activityModel');


const checkoutController = {};

checkoutController.getAllTableData = async (req, res, next) => {
 
  try {
    const text = `
    SELECT * FROM time_card
    `;

    const result = await db.query(text);

    res.locals.timecard = result.rows;
    
    // Take the last ids endtime the first ids start time and subtract to get the total hours
    const totalHours = res.locals.timecard[res.locals.timecard.length - 1].endtime - res.locals.timecard[0].starttime;
    
    res.locals.timecard.totals = totalHours;
    
    res.locals.timecard.push({ total: totalHours });

    console.log('totalHours is: ', totalHours);
    console.log('res.locals.timecard is: ', res.locals.timecard);
    
    next();
  }
  
  catch(err) {
    next({
      log: 'Express error handler caught in checkoutController.getAllTableData middleware',
      status: 400,
      message: { err: 'Failed to get table data from database' }
    });
  }

};


module.exports = checkoutController;