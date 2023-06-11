const express = require('express');

const activityController = require('../controller/activityController');

const router = express.Router();

router.post('/', activityController.postActivity, (req, res) => {
  res.sendStatus(200);
});

// router.update('/', switchController.)


module.exports = router;