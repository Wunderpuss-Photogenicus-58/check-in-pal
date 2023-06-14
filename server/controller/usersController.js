const db = require('../models/usersModel');

const userController = {};

usersController.newUser = async (req, res, next) => {
  const { username, password } = req.body;
  const text = `INSERT INTO public.users VALUES (DEFAULT, ${username}, ${password})`
  try {
    await db.query(text);
    console.log('New user created!')
    return next();
  } catch (err) {
    console.error(err)
    return next({
        log: "Express error handler caught an error in the saveController.saveImage middleware",
        status: 500,
        message: {err: "An error occurred in the saveController.saveImage middleware"}
    })
  }
}

usersController.verifyUser = async (req, res, next) => {
  const { username, password } = req.body;
  const text = 'SELECT * FROM public.users WHERE username = $1 and password = $2';
  try {
    const result = await db.query(text, [username, password]);
    if (result.rows.length > 0) {
      console.log('User verified!');
      return next();
    } else {
      return next({
        log: 'Invalid credentials',
        status: 401,
        message: {error: 'Invalid username or password'}
      })
    }
  } catch (err) {
    console.error(err);
    return next({
      log: "Express error handler caught an error in the userController.verifyUser middleware",
      status: 500,
      message: { error: "An error occurred in the userController.verifyUser middleware" }
    });
  }
}