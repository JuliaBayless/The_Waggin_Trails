import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch, } from 'react-redux';
import { useHistory } from "react-router";

//styles
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { MenuItem, TextareaAutosize, Button, Input } from "@material-ui/core";
import TextField from '@mui/material/TextField';
import { Paper, Box, makeStyles, Typography } from '@material-ui/core';
import Grid from '@mui/material/Grid';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';

//components
import ParkTagsForm from '../ParkTagsForm/ParkTagsForm';
import useStyles from '../styles/styles';


//FORM to add a dog park. Calls Park Tag Form for dog tags associated with parks
export default function AddDogParkForm(props) {
  //hooks
  const history = useHistory();
  const dispatch = useDispatch();
  const classes = useStyles();

  //object for state to start out with
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
  const [dogParkError, setDogParkError] = useState(false);


  const handleSubmitNewPark = (event) => {
    //prevent page from refreshing
    event.preventDefault();
    // dispatch new information off to saga
    if (
      userSelectedTags.length > 0 &&
      dogPark.name !== '' &&
      dogPark.location !== '' &&
      dogPark.description !== '' &&
      dogPark.image_url !== ''
    ) {

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
      dispatch({ type: 'CLEAR_USER_SELECTED_TAGS_ON_FORM' })
      //send user to the list to see their dog park
      history.push('/DogParkList')
    } else {
      setDogParkError(true)
      alert('please fill out the whole form!')
    }
  }//end handSubmitNewPark

  //on add park click, fetch new dog park and push to dog park list
  const handleClick = () => {
    dispatch({ type: 'FETCH_ALL_DOG_PARKS' })
    { history.push('/DogParkList') }
  }


  // rename selected tags variable
  let userSelectedTags = userSelectedTagsReducer.addTagsToDogPark

  return (
    <>
      <Typography variant="h5" sx={{ mt: '10px', mb: '40px' }}>
        Add a New Dog Park Here</Typography>
      <Grid
        container spacing={2}
        direction="column"
        justify="space-evenly"
        alignItems="center">
        <Grid item xs={12}>
          <form onSubmit={handleSubmitNewPark}>
            <Grid item xs={12}>
              <TextField
                className={classes.inputs}
                required
                id="filled-required"
                type="text"
                placeholder="Name"
                multiline
                rows={2}
                value={dogPark.name}
                error={dogParkError}
                onChange={(event) =>
                  setDogPark({ ...dogPark, name: event.target.value })}
                sx={{

                }}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                className={classes.inputs}
                required
                id="filled-required"
                type="text"
                placeholder="location"
                multiline
                rows={2}
                value={dogPark.location}
                onChange={(event) =>
                  setDogPark({ ...dogPark, location: event.target.value })}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                className={classes.inputs}
                required
                id="filled-required"
                type="text"
                placeholder="description"
                multiline
                rows={4}
                value={dogPark.description}
                onChange={(event) =>
                  setDogPark({ ...dogPark, description: event.target.value })}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                className={classes.inputs}
                required
                id="filled-required"
                type="text"
                placeholder="image_url"
                multiline
                rows={2}
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
                onClick={() => { handleClick() }}>Cancel</Button>
            </Grid>
          </form>
        </Grid>
      </Grid>
    </>
  );
}
