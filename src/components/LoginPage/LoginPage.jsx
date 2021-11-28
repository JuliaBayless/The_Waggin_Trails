import React from 'react';
import { useHistory } from 'react-router-dom';

//styles
import { Button } from '@material-ui/core';

//component
import LoginForm from '../LoginForm/LoginForm';
import './LoginPage.css';
import useStyles from '../styles/styles';



function LoginPage() {
  //hooks
  const history = useHistory();
  const classes = useStyles();


  return (
    <div>
      <LoginForm />

      <center>
        <Button
          color="secondary"
          variant="contained"
          size="large"
          type="submit"
          className={classes.blackBtn}
          onClick={() => {
            history.push('/registration');
          }}
        >
          Register
        </Button>
      </center>
    </div>
  );
}

export default LoginPage;
