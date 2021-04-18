import { Button, Container, Divider, Grid, makeStyles, TextField, Typography } from '@material-ui/core';
import React, { useContext, useState } from 'react';
import { signInWithProviderFirebase, createUserWithEmailPassword, signInWithEmailAndPassword } from './loginManager';
import { UserContext } from '../../App';
import { useForm, Controller } from "react-hook-form";
import { useHistory, useLocation } from 'react-router';


const useStyles = makeStyles((theme) => ({
    root: {
        marginTop: '1.5rem',
        borderRadius: '5px',
        padding: '2rem',
        border: '1px solid #aaa',
        '& form > *': {
            margin: theme.spacing(2),
        },
        '& input[type="submit"]': {
            background: '#444644',
            color: '#fff',
            cursor: 'pointer'
        },
        '& span': {
            color: 'blue',
            cursor: 'pointer'
        }
    },
    divider: {
        background: '#aaa',
        minWidth: '200px'
    }
}));

const Login = () => {
    const classes = useStyles();
    const [newUser, setNewUser] = useState(false);
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);

    const { handleSubmit, control, errors, watch } = useForm();

    const history = useHistory();
    const location = useLocation();
    const { from } = location.state || { from: { pathname: "/" } };

    const handleSignIn = () => {
        signInWithProviderFirebase()
            .then(res => {
                if (res.email) {
                    const { displayName, email } = res;
                    setLoggedInUser({ name: displayName, email: email });
                    history.replace(from);
                } else {
                    setLoggedInUser({ error: res });
                }
            })
    }

    const onSubmit = data => {
        const { name, email, password } = data;
        if (newUser && name && email && password) {
            createUserWithEmailPassword(name, email, password)
                .then(res => {
                    if (res.email) {
                        const { displayName, email } = res;
                        setLoggedInUser({ name: displayName || name, email: email });
                        history.replace(from);
                    } else {
                        setLoggedInUser({ error: res });
                    }
                })
        }
        if (!newUser && email && password) {
            signInWithEmailAndPassword(email, password)
                .then(res => {
                    if (res.email) {
                        const { displayName, email } = res;
                        setLoggedInUser({ name: displayName || name, email });
                        history.replace(from);
                    } else {
                        setLoggedInUser({ userError: res });
                    }
                })
        }
    };

    return (
        <Container maxWidth="lg" >
            <Grid container justify="center">
                <Grid item sm={12} md={6} >
                    {loggedInUser.userError && <Typography style={{ marginTop: '1rem' }} color="error" align="center">{loggedInUser.userError}</Typography>}
                    <div className={classes.root}>
                        <Typography variant="h5" variantMapping={{ h5: 'h1' }}>
                            {newUser ? "Create an account" : "Login"}
                        </Typography>
                        <form noValidate autoComplete="off" onSubmit={handleSubmit(onSubmit)}>
                            {newUser && <Controller as={TextField} required fullWidth type="text" name="name" control={control} id="outlined-basic" label="Name" defaultValue="" variant="outlined"
                                error={errors.name}
                                helperText={errors.name ? errors.name.message : null}
                                rules={{
                                    required: {
                                        value: true,
                                        message: 'You must specify a name'
                                    }
                                }}
                            />}


                            <Controller as={TextField} required fullWidth type="email" name="email" control={control} id="outlined-basic" label="Email" defaultValue="" variant="outlined"
                                error={errors.email}
                                helperText={errors.email ? errors.email.message : null}
                                rules={{
                                    required: {
                                        value: true,
                                        message: 'You must specify a email'
                                    },
                                    pattern: {
                                        value: /\S+@\S+\.\S+/,
                                        message: 'Enter correct email address'
                                    }
                                }}
                            />

                            <Controller as={TextField} required fullWidth type="password" name="password" control={control} id="outlined-basic" label="Password" defaultValue="" variant="outlined"
                                error={errors.password}
                                helperText={errors.password ? errors.password.message : null}
                                rules={{
                                    required: {
                                        value: true,
                                        message: 'You must specify a password'
                                    },
                                    minLength: {
                                        value: 6,
                                        message: "Password must have at least 6 characters"
                                    },
                                }}
                            />


                            {newUser && <Controller as={TextField} fullWidth required type="password" name="confirmPassword" control={control} id="outlined-basic" label="Confirm Password" defaultValue="" variant="outlined"
                                error={errors.confirmPassword}
                                helperText={errors.confirmPassword ? errors.confirmPassword.message : null}
                                rules={{
                                    required: {
                                        value: true,
                                        message: 'You must Confirmed password'
                                    },
                                    validate: (value) => {
                                        return value === watch('password') || "Password Not Matched";
                                    }
                                }}
                            />}

                            <TextField style={{ background: 'red', cursor: 'pointer !important' }} type="submit" value={newUser ? "Create an account" : "Login"} fullWidth color="primary" variant="outlined" />
                        </form>
                        <Typography align="center">
                            {newUser ? 'Already' : "Don't"} have an account? <span onClick={() => setNewUser(!newUser)} >{newUser ? 'Login' : 'Create an account'}</span>
                        </Typography>
                    </div>
                    <Grid container justify="center" style={{ alignItems: 'center', margin: '2rem 0' }}>
                        <Divider className={classes.divider} variant="middle" />
                        <Typography>Or</Typography>
                        <Divider className={classes.divider} variant="middle" />
                    </Grid>

                    <Grid container justify='center' style={{ alignItems: 'center', flexDirection: 'column' }}>
                        <Button variant="outlined" onClick={() => handleSignIn()} style={{ marginBottom: '1rem' }}>Continue with Google</Button>
                    </Grid>
                    <Typography align='center' color="error">
                        {loggedInUser.error}
                    </Typography>
                </Grid>
            </Grid>
        </Container >
    );
};

export default Login;