import React from 'react';
import { useHistory } from 'react-router-dom';

//styles
import { Button } from '@material-ui/core';

//component
import RegisterForm from '../RegisterForm/RegisterForm';
import useStyles from '../styles/styles';


function RegisterPage() {
   //hooks
   const history = useHistory();
   const classes = useStyles();



  return (
    <div>
      <RegisterForm />

      <center>
         <Button
          color="secondary"
          variant="contained"
          size="large"
          type="submit"
          className={classes.redBtnRegister}
          onClick={() => {
            history.push('/login');
          }}
        >
          Login
        </Button>
      </center>
    </div>
  );
}

export default RegisterPage;
