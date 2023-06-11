const db = require('../models/activityModel');


const checkoutController = {};

checkoutController.postTotals = async (req, res, next) => {
  const activity = 'codewars';
  const starttime = 1100;
  const day = '06/10';
 
  try {
    const text = `
    INSERT INTO time_card (activity, starttime, day)
    VALUES ($1, $2, $3)
    `;

    const params = [activity, starttime, day];
    const result = await db.query(text, params);
    console.log('result is: ', result);
    next();
  }
  
  catch(err) {
    next({
      log: 'Express error handler caught in checkoutController.postTotals middleware',
      status: 400,
      message: { err: 'Failed to insert totals to database' }
    });
  }

};

checkoutController.getTimecard = async (req, res, next) => {
  const activity = 'codewars';
  const starttime = 1100;
  const day = '06/10';
 
  try {
    const text = `
    INSERT INTO time_card (activity, starttime, day)
    VALUES ($1, $2, $3)
    `;

    const params = [activity, starttime, day];
    const result = await db.query(text, params);
    console.log('result is: ', result);
    next();
  }
  
  catch(err) {
    next({
      log: 'Express error handler caught in checkoutController.getTimecard middleware',
      status: 400,
      message: { err: 'Failed to get timecard from database' }
    });
  }

};


module.exports = checkoutController;