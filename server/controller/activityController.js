const db = require('../models/activityModel');


const activityController = {};

activityController.postActivity = async (req, res, next) => {
  const activity = 'leetcode';
  const starttime = 900;
  const day = '06/10';
 
  try {
    const text = `
    INSERT INTO time_card (activity, starttime, day)
    VALUES ($1, $2, $3)
    `;
    const params = [activity, starttime, day];
    const result = await db.query(text, params);
    next();
  }
  catch(err) {
    next(err);
  }
};

module.exports = activityController;