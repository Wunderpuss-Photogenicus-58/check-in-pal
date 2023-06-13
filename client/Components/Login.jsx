import React from 'react';
import { Grid, Paper, Avatar, TextField } from 'material-ui/core';
import LockOutlinedIcon from 'material-ui/icons/LockOutlined'
const Login = () => {
    const paperStyle = {padding: 20, height: '70vh', width: 280, margin: '20px auto'};
    const avatarStyle = {backgroundColor: "1bbd7e"}
    return (
        <Grid>
            <Paper elevation={10} style={paperStyle}>
                <Grid>
                    <Avatar><LockedOutlinedIcon /></Avatar>
                    <h2>Sign In</h2>
                </Grid>
                <TextField label='Username' placeholder='Enter Username'></TextField>
            </Paper>
        </Grid>
    )
}

export default Login;