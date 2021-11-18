import React, { useState, useEffect  } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from "react-router";
import { Container, Paper } from '@material-ui/core';
import Grid from '@mui/material/Grid';
import { positions } from '@mui/system';
import DogParkItem from '../DogParkItem/DogParkItem'



export default function DogParkList(props) {
  const history = useHistory();
  const dispatch = useDispatch();
  const DogParkList = useSelector((store) => store.soManyDogParks);
  const [heading, setHeading] = useState('Functional Component');

  useEffect(() => {
    dispatch({type: 'FETCH_ALL_DOG_PARKS'})
  }, [])

console.log(DogParkList)
  return (
    <Container>
                <h1>Dog Park List</h1>
                <Grid container justifyContent="center"
                    sx={{ flexGrow: 1 }} container spacing={4}>
                    {DogParkList.dogParks?.map(dogPark => {
                        return (
                            <Grid item key={dogPark.id} xs={12} sm={6} md={5} lg={4}>
                                <DogParkItem dogPark={dogPark}/>
                            </Grid>
                        )
                    })}
                </Grid>
            </Container>
  );
}
