const db = require('../models/activityModel');


const activityController = {};

activityController.postActivity = async (req, res, next) => {
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
      log: 'Express error handler caught in activityController.postActivity middleware',
      status: 400,
      message: { err: 'Failed to insert to database' }
    });
  }

};

module.exports = activityController;
