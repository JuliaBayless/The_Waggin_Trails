import React from 'react';
import { useHistory } from 'react-router-dom';
import { Paper, Container, Button } from '@material-ui/core';

//component
import Image from './ben-collins.jpg';
import LoginForm from '../LoginForm/LoginForm';
import './LoginPage.css';
import useStyles from '../styles/styles';


const styles = {
  paperContainer: {
    backgroundImage: `url(${Image})`,
    backgroundPosition: 'center', 
    backgroundSize: 'cover', 
    backgroundRepeat: 'no-repeat',
    margin: 'auto',
    height: '100vh',
    width: 'calc(20vw * 0.54 - 2%)',
    borderRadius: 8,
    display: 'flex',
    marginLeft: '10px',
   paddingTop: '25px'
  }
};


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
