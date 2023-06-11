const express = require('express');

const switchController = require('../controller/switchController');

const router = express.Router();


// Route that handles patch request to the SQL database, updating the end time of an activity before switching to a new one
router.patch('/', switchController.updateEndtime, (req, res) => {
  res.sendStatus(200);
});

module.exports = router;