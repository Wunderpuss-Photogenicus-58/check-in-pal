const express = require('express');
const path = require ('path');
const cors = require ('cors');

const PORT= 3000

const app = express();

// Handles cors, originally used no cors on front end, then took no cors off and added this to work
app.use(cors());
//handles parsing 
app.use(express.json());
// What this do tho?
app.use(express.urlencoded({ extended: true }));


// Require in all our routers
const usersRouter = require('./routes/users');
const activityRouter = require('./routes/activity');
const checkoutRouter = require ('./routes/checkout');


// Route handlers
app.use('/login', usersRouter);
app.use('/signup', usersRouter);
app.use('/activity', activityRouter);
app.use('/checkout', checkoutRouter);



// Catch-all route error handler
app.use((req,res) => res.status(404).send('this is not the page you are looking for'))


// Global error handler
app.use((err, req, res, next) => {
  const defaultErr = {
    log: 'Express error handler caught unkown middleware error',
    status: 400,
    message: { err: 'An error occurred' }
  };

  const errorObj = Object.assign(defaultErr, err);
  console.log(errorObj.log);
  return res.status(errorObj.status).json(errorObj.message);
});

//server is listening on port 3000
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}...`)
});

//export module
module.exports = app;