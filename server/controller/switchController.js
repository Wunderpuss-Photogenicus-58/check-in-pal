const db = require('../models/activityModel');


const switchController = {};

switchController.updateEndtime = async (req, res, next) => {
  const endtime = 1130;
  
  try {
    const text = `
    UPDATE time_card
    SET endtime = $1
    WHERE id IN (SELECT MAX(id) FROM time_card)
    `;

    const params = [endtime];
    const result = await db.query(text, params);
    next();
  }
  
  catch(err) {
    next({
      log: 'Express error handler caught in switchController.updateEndtime middleware',
      status: 400,
      message: { err: 'Failed to update endtime in database' }
    });
  }

  };
  

module.exports = switchController;