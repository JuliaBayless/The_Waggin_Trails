import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from "react-router";
import { Container, Paper } from '@material-ui/core';
import Grid from '@mui/material/Grid';
import { positions } from '@mui/system';
import DogParkItem from './DogParkItem'


//component that parents the main dog list
export default function DogParkList(props) {

  //hooks
  const history = useHistory();
  const dispatch = useDispatch();

  //stores
  const DogParkList = useSelector((store) => store.parkReducer);
  const favorites = useSelector(store => store.favoritesReducer)
  const dogParkTags = useSelector((store) => store.tagReducer);
  const [heading, setHeading] = useState('Functional Component');



  useEffect(() => {
    dispatch({ type: 'FETCH_ALL_DOG_PARKS' })
    dispatch({
      type: 'FETCH_ALL_FROM_FAVORITES_TABLE'
    })
    dispatch({
      type: 'FETCH_DOG_PARK_TAGS',
    })
  }, [])

  return (
    <Container>
      <h1>Dog Park List</h1>
      <Grid container justifyContent="center"
        sx={{ flexGrow: 1 }} container spacing={4}>
        {DogParkList.allDogParksInDB?.map(dogPark => {
          return (
            <Grid item key={dogPark.id} xs={12} sm={6} md={5} lg={4}>
              <DogParkItem
                dogPark={dogPark}
                favArray={favorites.favorites}
                dogParkTags={dogParkTags}
              />
            </Grid>
          )
        })}
      </Grid>
    </Container>
  );
}
