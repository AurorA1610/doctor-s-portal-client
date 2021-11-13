import { Alert, Button, CircularProgress, Container, Grid, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import { NavLink, useLocation, useHistory } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';


const Login = () => {

    const [loginData, setLoginData] = useState({});
    const { user, loginUser, isLoading, authError, signInWithGoogle } = useAuth();

    const location = useLocation();
    const history = useHistory();


    const handleOnChange = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        setLoginData(newLoginData);
    }

    const handleLoginSubmit = e => {
        loginUser(loginData.email, loginData.password, location, history);
        e.preventDefault();
    }

    const handleGoogleSignIn = () => {
        signInWithGoogle(location, history);
    }

    return (
        <Container>
            <Grid container spacing={2}>
                <Grid item xs={ 12 } md={ 6 }>
                    <Typography variant="body1" gutterBottom>
                        Login
                    </Typography>
                    <form onSubmit={ handleLoginSubmit }>
                        <TextField
                            sx={ { width:"75%", m:1 } }
                            id="standard-basic"
                            label="Your Email"
                            name="email"
                            onChange={ handleOnChange }
                            variant="standard" />

                        <TextField
                            sx={ { width:"75%", m:1 } }
                            id="standard-basic"
                            label="Your Password"
                            name="password"
                            onChange={ handleOnChange }
                            type="password"
                            variant="standard" />

                        <Button
                            sx={ { width:"75%", m:1 } }
                            type="submit"
                            variant="contained"
                        >Login</Button>
                        
                        <NavLink
                            style={ { textDecoration: "none" } }
                            to="/register">
                            <Button variant="text">New User? Please Register</Button>
                        </NavLink>
                        {
                            isLoading && <CircularProgress sx={ { m: 3 } } />
                        }
                        {
                            user?.email && <Alert severity="success">Logged in Successfully</Alert>
                        }
                        {
                            authError && <Alert severity="error">{ authError }</Alert>
                        }
                    </form>
                    <p>-------------------------------------</p>
                    <Button variant="contained" onClick={ handleGoogleSignIn }>Google Sign In</Button>
                </Grid>
                <Grid item xs={ 12 } md={ 6 }>
                    <img style={ { width: '100%' } } src="https://i.ibb.co/rF98nDP/login.png" alt="" />
                </Grid>
            </Grid>
        </Container>
    );
};

export default Login;