const express = require('express');

const checkoutController = require('../controller/checkoutController');

const router = express.Router();

router.get('/', checkoutController.postTotals, checkoutController.getTimecard, (req, res) => {
  res.status(200).json(res.locals.timecard);
});

module.exports = router;