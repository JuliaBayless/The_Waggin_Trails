import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from "react-router";

//styles
import { Container, Paper, Typography } from '@material-ui/core';
import Grid from '@mui/material/Grid';
import { positions } from '@mui/system';

//components
import DogParkItem from './DogParkItem';
import useStyles from '../styles/styles';
import SearchBar from '../searchBar/searchBar';
import { Search } from '@mui/icons-material';

//component that parents the main dog list
export default function DogParkList(props) {

  //hooks
  const history = useHistory();
  const dispatch = useDispatch();
  const classes = useStyles();

  //stores
  const DogParkList = useSelector((store) => store.parkReducer);
  const favorites = useSelector(store => store.favoritesReducer)
  const dogParkTags = useSelector((store) => store.tagReducer);
  const [heading, setHeading] = useState('Functional Component');



  useEffect(() => {
    dispatch({ type: 'FETCH_ALL_DOG_PARKS' })
    dispatch({ type: 'FETCH_ALL_FROM_FAVORITES_TABLE' })
    dispatch({ type: 'FETCH_DOG_PARK_TAGS' })
  }, [])

  return (



    <Container>

      <SearchBar />

      <Typography variant='h1' 
      className={classes.headerFav}>
        Dog Park List
        </Typography>
      <Grid container 
      justifyContent="center"
        sx={{ flexGrow: 1 }} 
        container spacing={4}
        className={classes.listContainer}>
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
