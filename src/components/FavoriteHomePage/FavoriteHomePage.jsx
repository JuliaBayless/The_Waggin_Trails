import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from "react-router";

//styles
import {
  Container,
  Paper,
  Typography
} from '@material-ui/core';
import Grid from '@mui/material/Grid';

//components
import FavoritesItem from './FavoritesItems'



//this component returns only favorites
function FavoriteHomePage() {

  //hooks
  const history = useHistory();
  const dispatch = useDispatch();

  //stores
  const DogParkList = useSelector((store) => store.parkReducer);
  const dogParkTags = useSelector((store) => store.tagReducer);
  const user = useSelector((store) => store.user);
  const favorites = useSelector(store => store.favoritesReducer)

  //fetch this tags and fav parks
  useEffect(() => {
    dispatch({ type: 'FETCH_FAV_DOG_PARKS' })
    dispatch({ type: 'FETCH_DOG_PARK_TAGS' })
  }, [])

  //filtering out the fav dog parks by the isFav boolean value
  let favDogParks = DogParkList.allDogParksInDB

  return (
    <>
      <Paper className="container">
        <Typography>Welcome, {user.username}!</Typography>
      </Paper>
      <Container>
        <h1>Favorite Dog Parks</h1>
        <Grid container justifyContent="center"
          sx={{ flexGrow: 1 }} spacing={4}>
          {favDogParks.map(favPark => {
            return (
              <Grid item key={favPark.id} xs={12} sm={6} md={5} lg={4}>
                <FavoritesItem
                  favPark={favPark}
                  dogParkTags={dogParkTags}
                  user={user}
                  favorites={favorites} />
              </Grid>
            )
          })}
        </Grid>
      </Container>
    </>
  );
}

// this allows us to use <App /> in index.js
export default FavoriteHomePage;
