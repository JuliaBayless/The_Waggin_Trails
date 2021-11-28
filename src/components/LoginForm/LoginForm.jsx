import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { Paper, Container, Button, TextField } from '@material-ui/core';
import { Typography } from '@mui/material';

//components
import useStyles from '../styles/styles';

function LoginForm() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  //stores
  const errors = useSelector(store => store.errors);

  //hooks
  const dispatch = useDispatch();
  const classes = useStyles();


  const login = (event) => {
    event.preventDefault();

    if (username && password) {
      dispatch({
        type: 'LOGIN',
        payload: {
          username: username,
          password: password,
        },
      });
      dispatch({ type: 'FETCH_FAV_DOG_PARKS' })
      dispatch({
        type: 'FETCH_DOG_PARK_TAGS',
      })
    } else {
      dispatch({ type: 'LOGIN_INPUT_ERROR' });
    }
  }; // end login

  return (
    <form onSubmit={login}>
      <h1
        className={classes.LoginHeader}>
        Login
      </h1>
      {errors.loginMessage && (
        <h3 className="alert" role="alert">
          {errors.loginMessage}
        </h3>
      )}
      <div>
        <TextField
          className={classes.LogInput}
          type="text"
          placeholder="username"
          variant="outlined"
          required
          value={username}
          onChange={(event) => setUsername(event.target.value)}
        />
      </div>
      <div>
        <TextField
          className={classes.LogInput}
          type="password"
          placeholder="password"
          variant="outlined"
          required
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />

      </div>
      <div>
        <Button
          color="primary"
          variant="contained"
          size="large"
          type="submit"
          className={classes.redBtn}>
          Submit
          </Button>
      </div>
    </form>
  );
}

export default LoginForm;
