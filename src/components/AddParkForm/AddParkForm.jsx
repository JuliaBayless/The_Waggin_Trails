import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch, } from 'react-redux';
import { useHistory } from "react-router";

//styles
import InputLabel from '@mui/material/InputLabel';
import { Button } from "@material-ui/core";
import TextField from '@mui/material/TextField';
import { Typography, Container } from '@material-ui/core';
import Grid from '@mui/material/Grid';


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
    <Container sx={{ mt: '30px', display: 'flex', justifyContent: 'center' }}>
      <div className={classes.paper}>
        <form onSubmit={handleSubmitNewPark}>
          <Grid container
            spacing={2}
            direction="column"
            justify="space-evenly"
            component="paper"
            alignItems="center">
            <Grid item xs={12} sx={{ mt: '10px', mb: '10px' }}>
              <Typography variant="h5" >
                Add a New Dog Park Here</Typography>

            </Grid>

            <Grid item xs={12}
              sx={{ display: 'flex', justifyContent: 'center', width: '90%' }}>
              <InputLabel>Name</InputLabel>
            </Grid>

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
                  "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
                    borderColor: "green"
                  },
                }}
              />
            </Grid>

            <Grid item xs={12}
              sx={{
                display: 'flex', justifyContent: 'center',
                width: '90%', mt: '20px'
              }}>
              <InputLabel>Location</InputLabel>
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
                sx={{
                  "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
                    borderColor: "green"
                  },
                }}
              />
            </Grid>

            <Grid item xs={12}
              sx={{
                display: 'flex', justifyContent: 'center',
                width: '90%', mt: '20px'
              }}>
              <InputLabel>Park Description</InputLabel>
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
                sx={{
                  "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
                    borderColor: "green"
                  },
                }}
              />
            </Grid>

            <Grid item xs={12}
              sx={{
                display: 'flex', justifyContent: 'center',
                width: '90%', mt: '20px'
              }}>
              <InputLabel>Image URL</InputLabel>
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
                sx={{
                  "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
                    borderColor: "green"
                  },
                }}
              />
            </Grid>
            <ParkTagsForm />

            <Grid item xs={12}>
              <Button
                color="secondary"
                variant="contained"
                size="large"
                type="submit"
                className={classes.addParkBtn}>
                Add Park</Button>
              <Button
                variant="outlined"
                size="large"
                onClick={() => { handleClick() }}>Cancel</Button>
            </Grid>

          </Grid>
        </form>
      </div>
    </Container >
  );
}
