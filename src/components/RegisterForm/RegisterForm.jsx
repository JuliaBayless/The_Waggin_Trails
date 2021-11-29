import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

//styles
import { Button, TextField } from '@material-ui/core';
import { Typography } from '@mui/material';

//components
import useStyles from '../styles/styles';

function RegisterForm() {
  //local state
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  //stores
  const errors = useSelector((store) => store.errors);

  //hooks
  const dispatch = useDispatch();
  const classes = useStyles();

  const registerUser = (event) => {
    event.preventDefault();

    dispatch({
      type: 'REGISTER',
      payload: {
        username: username,
        password: password,
      },
    });
  }; // end registerUser


  return (
    <form onSubmit={registerUser}>
      <h2 className={classes.LoginHeader}>
        Register User
      </h2>
      {errors.registrationMessage && (
        <h3 className="alert" role="alert">
          {errors.registrationMessage}
        </h3>
      )}
      <div>
        <TextField
          className={classes.LogInput}
          type="text"
          placeholder="username"
          variant="outlined"
          value={username}
          required
          onChange={(event) => setUsername(event.target.value)}
        />
      </div>
      <div>
        <TextField
          className={classes.LogInput}
          type="password"
          placeholder="password"
          variant="outlined"
          value={password}
          required
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

export default RegisterForm;
