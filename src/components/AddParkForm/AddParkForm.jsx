import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch, } from 'react-redux';
import { useHistory } from "react-router";
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { MenuItem, TextareaAutosize, Button, Input } from "@material-ui/core";
import TextField from '@mui/material/TextField';
import { Paper, Box, makeStyles, Typography } from '@material-ui/core';
import Grid from '@mui/material/Grid';
import ParkTagsForm from '../ParkTagsForm/ParkTagsForm';



//FORM to add a dog park. Calls Park Tag Form for dog tags associated with parks
export default function AddDogParkForm(props) {
  //object for state to start out with
  //hooks
  const history = useHistory();
  const dispatch = useDispatch();
  const dogParkDummyData = {
    name: '',
    location: '',
    description: '',
    image_url: '',
    tag_id: ''
  }

  //fetch tags on page load
  useEffect(() => {
    dispatch({ type: 'FETCH_ALL_TAGS' })
  }, [])


  //store
  let userSelectedTagsReducer = useSelector((store) => store.parkReducer)
  const [dogPark, setDogPark] = useState(dogParkDummyData);


  const handleSubmitNewPark = (event) => {
    //prevent page from refreshing
    event.preventDefault();
    // dispatch new information off to saga
    dispatch({
      type: 'ADD_NEW_DOG_PARK',
      payload: {
        name: dogPark.name,
        location: dogPark.location,
        description: dogPark.description,
        image_url: dogPark.image_url,
        tag_id: userSelectedTags
      }
    })
    //clear reducer holding dog tags selected by user
    dispatch({ type: 'CLEAR_USER_SELECTED_TAGS_ON_FORM'})
    //send user to the list to see their dog park
    history.push('/DogParkList')
  }//end handSubmitNewPark

// rename selected tags variable
let userSelectedTags = userSelectedTagsReducer.addTagsToDogPark

  return (
    <>
      <Typography variant="h5" sx={{ mt: '10px', mb: '40px' }}>
        Add a New Dog Park Here</Typography>
      <Grid container spacing={2} >
        <Grid item xs={12}>
          <form onSubmit={handleSubmitNewPark}>
            <Grid item xs={12}>
              <TextField
                required
                id="filled-required"
                type="text"
                placeholder="Name"
                value={dogPark.name}
                onChange={(event) =>
                  setDogPark({ ...dogPark, name: event.target.value })}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                id="filled-required"
                type="text"
                placeholder="location"
                value={dogPark.location}
                onChange={(event) =>
                  setDogPark({ ...dogPark, location: event.target.value })}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                id="filled-required"
                type="text"
                placeholder="description"
                value={dogPark.description}
                onChange={(event) =>
                  setDogPark({ ...dogPark, description: event.target.value })}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                id="filled-required"
                type="text"
                placeholder="image_url"
                value={dogPark.image_url}
                onChange={(event) =>
                  setDogPark({ ...dogPark, image_url: event.target.value })}
              />
            </Grid>
            <ParkTagsForm />

            <Grid item xs={12}>
              <Button
                variant="outlined"
                type="submit">Add Park</Button>
              <Button
                variant="outlined"
                onClick={() => { history.push('/FavoriteHomePage') }}>Cancel</Button>
            </Grid>
          </form>
        </Grid>
      </Grid>
    </>
  );
}
