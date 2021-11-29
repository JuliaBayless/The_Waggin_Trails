import React from 'react';

//style
import { Container, Typography } from '@material-ui/core';
import Grid from '@mui/material/Grid'
//component
import useStyles from '../styles/styles';



function AboutPage() {
  //hooks
  const classes = useStyles();


  return (

    <Container
      sx={{ mt: '30px', display: 'flex', justifyContent: 'center' }}>
      <div className={classes.paper}>
        <Grid container
          spacing={2}
          direction="column"
          justify="space-evenly"
          component="paper"
          alignItems="center">
          <Grid item sx={12}
            sx={{
              display: 'flex', justifyContent: 'center', width: '90%'
            }}>
            <Typography
              variant='h4'
              className={classes.subHeader}>
              About this App
            </Typography>
          </Grid>
          <Grid item sx={12}
            sx={{
              display: 'flex', justifyContent: 'center', width: '90%'
            }}>
            <Typography variant="subtitle1" gutterBottom component="div" >
              Imagine a small dog who hates mixing with the big boys at the dog park.
              Or a big open dog park with an owner whose dog just keeps running away from him.
              This application is to help dog lovers find suitable dog parks nearby and see all
              their amenities in one quick snapshot. Need a small dog area or a fenced in park?
              No problem! Users will be able to save favorites to their home page, as well as add,
              rate, search and comment on dog parks. This will help avoid those messy park
              visits where the dogs loved their time in the mud, but your car sure didn’t!
              All dog parks will have tags associated with them like ‘fence’ or ‘pond’,
              so the user can easily see what they are getting into. This tool will help make
              all park visits easier and seamless.

            </Typography>
          </Grid>
        </Grid>
      </div>
    </Container >
  );
}

export default AboutPage;
