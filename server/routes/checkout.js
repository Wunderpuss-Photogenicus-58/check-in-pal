const express = require('express');

const checkoutController = require('../controller/checkoutController');

const router = express.Router();

// Route that handles get request to the DB for all the data in the time_card table
router.get('/', checkoutController.getAllTableData, (req, res) => {
  // Send the data retrieved from the get request as json to the frontend/client
  res.status(200).json(res.locals.timecard);
});

module.exports = router;