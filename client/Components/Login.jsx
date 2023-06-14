import React, { useEffect } from 'react';
import { Grid, Paper, FormGroup, Avatar, TextField, Button, FormControlLabel, Checkbox } from '@mui/material';
import{ LockOutlined } from '@mui/icons-material'
import FormControlContext from '@mui/material/FormControl/FormControlContext';
import { useNavigate } from "react-router-dom"
// import Grid from '@mui/material/Grid';
// import Paper from '@mui/material/Paper';
// import Avatar from '@mui/material/Avatar';
// import TextField from '@mui/material/TextField';


const Login = () => {
    const navigate = useNavigate();
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
            {theme: 'outline', size: 'auto'}
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
                    <FormGroup>
                        <TextField label='Username' placeholder='Enter Username' style={{margin: '10px'}}></TextField>
                        <TextField label='Password' placeholder='Enter Password' required style={{margin: '10px'}}></TextField>
                        <FormControlLabel 
                        control={
                        <Checkbox 
                            name="checked" 
                            color="primary"
                            />
                            }
                            label="Remember me"
                        />
                        <Button type="submit" color="primary" variant="contained" fullWidth onClick={() => navigate('/home')}>Sign in</Button>
                    </FormGroup>
                    <FormGroup>
                        <div className='App' style={{margin: '10px'}}>
                            <div id='login-div' > </div>
                        </div>
                        <p 
                        style={{ fontFamily:'sans-serif', textAlign: 'center', margin: '10px' }}
                        >Already have an account?</p>
                        <Button onClick={() => navigate('/signup')}>Sign Up</Button>
                    </FormGroup>
                </Paper>
            </Grid>

        </>
    )
}

export default Login;