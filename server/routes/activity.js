const express = require('express');

const activityController = require('../controller/activityController');

const router = express.Router();
//handles post request with middleware
router.post('/', activityController.postActivity, (req, res) => {
  res.sendStatus(200);
});

//export module
module.exports = router;