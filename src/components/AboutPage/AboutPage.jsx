import React from 'react';

//style
import { Container, Typography  } from '@material-ui/core';

//component
import useStyles from '../styles/styles';



function AboutPage() {
  //hooks
  const classes = useStyles();


  return (
    <Container
      sx={{ mt: '30px', display: 'flex', justifyContent: 'center' }}>
      <div className={classes.paper}>

        <p>This about page is for anyone to read!</p>

      </div>
    </Container>
  );
}

export default AboutPage;
