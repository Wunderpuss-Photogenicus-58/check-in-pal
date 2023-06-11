const express = require('express');

const switchController = require('../controller/switchController');

const router = express.Router();


router.patch('/', switchController.updateEndtime, (req, res) => {
  res.sendStatus(200);
});

module.exports = router;