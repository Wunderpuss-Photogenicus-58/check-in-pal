import React, { useEffect } from 'react';
import { Grid, Paper, Avatar, TextField, } from '@mui/material';
import{ LockOutlined } from '@mui/icons-material'
// import Grid from '@mui/material/Grid';
// import Paper from '@mui/material/Paper';
// import Avatar from '@mui/material/Avatar';
// import TextField from '@mui/material/TextField';


const Login = () => {
    const paperStyle = {padding: 20, height: '70vh', width: 280, margin: '20px auto'};
    const avatarStyle = {backgroundColor: "1bbd7e"}
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
            {theme: 'outline', size: 'large'}
        )
    }, [])

    return (
        <>
            <Grid>
                <Paper elevation={10} style={paperStyle}>
                    <Grid>
                        <Avatar><LockOutlined/></Avatar>
                        <h2>Sign In</h2>
                    </Grid>
                    <TextField label='Username' placeholder='Enter Username'></TextField>
                </Paper>
            </Grid>
            <div className='App'>
                <div id='login-div'> </div>
            </div>
        </>
    )
}





export default Login;