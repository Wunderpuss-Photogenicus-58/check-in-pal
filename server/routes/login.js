const express = require('express');
const userController = require('../controller/userController.js')
const router = express.Router();


router.post('/', userController.verifyUser, (req, res) => {
  res.sendStatus(200);
});

//export module
module.exports = router;