const express = require('express');
const userController = require('../controller/usersController.js');
const router = express.Router();

router.post('/signup', usersController.newUser, (req, res) => {
  res.sendStatus(200);
});

router.post('/login', usersController.verifyUser, (req, res) => {
  res.sendStatus(200);
});

//export module
module.exports = router;