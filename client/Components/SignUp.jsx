import React, { useEffect, useRef } from "react";
import { useNavigate } from "react-router";
import { Grid, Paper, TextField, Button, FormGroup } from "@mui/material";


const SignUp = () => {

  const navigate = useNavigate();

  const usernameRef = useRef();
  const passRef = useRef();

  const handleSubmit = (e) => {

    e.preventDefault();

    const username = usernameRef.current.value;
    const password = passRef.current.value;

    console.log('username: ', username)
    console.log('password: ', password)

    fetch('/signup', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ username, password })
    })
      .then((response) => {
        if (response.status === 200) {
          navigate('/home')
        } else {
          window.alert('Username already exists!')
        }
      })
      .catch(err => console.log('error', err))

  }

  const google = window.google;

  const handleCallbackResponse = (response) => {
    console.log('Encoded JWT ID toke: ' + response.credential);
    console.log('Successful login')
  }

  useEffect(() => {
    google.accounts.id.initialize({
      client_id: "576171905862-t7hliksofs5f4jubldf5rq89bcmidbk7.apps.googleusercontent.com",
      callback: handleCallbackResponse
    })

    google.accounts.id.renderButton(
      document.getElementById("login-div"),
      { theme: 'outline', size: 'large' }
    )
  }, [])

  function switchTabs() {
    navigate('/checkin');
  }

  const paperStyle = { padding: 20, height: '70vh', width: 280, margin: '20px auto' };

  return (
    <div className="sign-up">

      <form onSubmit={handleSubmit}>
        {/* <Grid> */}
        <Paper elevation={10} style={paperStyle}>
          <h2>Sign Up</h2>
          <FormGroup>
            <TextField
              required
              inputRef={usernameRef}
              label='Username'
              style={{ margin: '10px' }}
            />
          </FormGroup>
          <FormGroup>
            <TextField
              required
              inputRef={passRef}
              label='Password'
              type='Password'
              style={{ margin: '10px' }}
            />
            <Button type="submit" variant="contained" style={{ margin: '10px' }} onClick={handleSubmit}>
              Sign Up
            </Button>
          </FormGroup>
          <FormGroup>
            <div className='App' style={{ margin: '10px' }}>
              <div id='login-div'> </div>
            </div>
            <Button onClick={() => navigate('/login')}>Back to login</Button>
          </FormGroup>
        </Paper>
        {/* </Grid> */}
      </form>
    </div>
  )


  //  <form onSubmit = {handleSubmit}>
  //     <FormControl>
  //       <FormLabel>Enter UserName or Email</FormLabel>
  //       <TextField
  // required
  // label='UserName'
  // variant='Outlined'
  //       />
  //     </FormControl>
  //     <FormControl>
  //       <FormLabel>Enter Password</FormLabel>
  //       <TextField
  //         required
  //         label='Password'
  //         type='Password' 
  //         variant='Filled'
  //       />
  //       <Button type="submit" variant="contained">
  //         Submit
  //       </Button>
  //     </FormControl>
  //   </form>
}

export default SignUp;