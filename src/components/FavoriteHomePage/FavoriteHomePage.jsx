import React, { useState, useEffect  } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from "react-router";
import { Container, Paper } from '@material-ui/core';
import Grid from '@mui/material/Grid';
import LogOutButton from '../LogOutButton/LogOutButton'
import FavoritesItem from '../FavoritesItems/FavoritesItems'



//this component returns only favorites
function FavoriteHomePage() {
  // this component doesn't do much to start, just renders some user reducer info to the DOM
  const user = useSelector((store) => store.user);
  const history = useHistory();
  const dispatch = useDispatch();
  const DogParkList = useSelector((store) => store.soManyDogParks);


  useEffect(() => {
    dispatch({type: 'FETCH_ALL_DOG_PARKS'})
  }, [])

  //filtering out the fav dog parks by the isFav boolean value
  let favDogParks = DogParkList.dogParks.filter(park => park.isFav === true)
 
  return (
    <div className="container">
      <h2>Welcome, {user.username}!</h2>
      <p>Your ID is: {user.id}</p>
      <LogOutButton className="btn" />
      <Container>
                <h1>Your Favorite Dog Parks</h1>
                <Grid container justifyContent="center"
                    sx={{ flexGrow: 1 }} container spacing={4}>
                    {favDogParks.map(favPark => {
                        return (
                            <Grid item key={favPark.id} xs={12} sm={6} md={5} lg={4}>
                                <FavoritesItem favPark={favPark}/>
                            </Grid>
                        )
                    })}
                </Grid>
            </Container>
    </div>
  );
}

// this allows us to use <App /> in index.js
export default FavoriteHomePage;
