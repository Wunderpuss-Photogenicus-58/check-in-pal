const db = require('../models/activityModel');


const activityController = {};

// Updates 'endtime' column of a particular row in the table
activityController.updateEndtime = async (req, res, next) => {
  // Get the endtime from the req object that is sent from the client/front end
  const endtime = 1230;
  
  try {
    // SQL query string for the patch request
    const text = `
    UPDATE time_card
    SET endtime = $1
    WHERE id IN (SELECT MAX(id) FROM time_card)
    `;
    
    // Array params that dynamically assigns the value on line 15 for the SET part of the SQL query
    const params = [endtime];
    // Store the result of the db query asynchronously in the result constant.
    const result = await db.query(text, params);
    next();
  }
  
  // Error handler for failed db query
  catch(err) {
    next({
      log: 'Express error handler caught in activityController.updateEndtime middleware',
      status: 400,
      message: { err: 'Failed to update endtime in database' }
    });
  }

  };
  

module.exports = activityController;