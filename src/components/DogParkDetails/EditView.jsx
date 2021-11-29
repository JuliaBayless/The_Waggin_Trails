import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch, } from 'react-redux';
import { useHistory } from "react-router";

//styles
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { Button, Typography } from "@material-ui/core";
import TextField from '@mui/material/TextField';
import { Paper, Box, makeStyles } from '@material-ui/core';
import Grid from '@mui/material/Grid';

//components
import useStyles from '../styles/styles';



export default function DogParkDetailsEditView({ dogParkDetails }) {
    //local sate holding park info
    const [dogParkEdit, setDogParkEdit] = useState(dogParkDetails)

    //hooks
    const classes = useStyles();
    const dispatch = useDispatch();
    const history = useHistory();


    const handleEditSubmit = (event) => {
        event.preventDefault();
        //send this stuff to edit this park
        dispatch({
            type: 'EDIT_THIS_DOG_PARK',
            payload: dogParkEdit
        })
        //push the admin back to the list page *for now until details sticks*
        history.push('/DogParkList')
    }

    return (
        <>
            <Grid container spacing={2}
                direction="column"
                justify="space-evenly"
                alignItems="center">
                <form className={classes.iconLayout}>
                    <Grid item xs={12} sx={{ mt: '20px', ml: '10px', mb: '20px' }}>
                        <Typography variant="h5"
                            className={classes.subHeader}>
                            Edit Dog Park
                        </Typography>
                    </Grid>
                    <Grid item xs={12}
                        sx={{ display: 'flex', justifyContent: 'center', width: '90%' }}>
                        <InputLabel>Name</InputLabel>
                    </Grid>
                    <Grid item xs={12} sx={{ mt: '20px', ml: '10px' }}>
                        <TextField
                            className={classes.inputs}
                            required
                            id="standard-multiline-static"
                            label="Name"
                            multiline
                            rows={2}
                            type="text"
                            style={{ width: 300 }}
                            placeholder="Name"
                            value={dogParkEdit.name}
                            onChange={(event) =>
                                setDogParkEdit({ ...dogParkEdit, name: event.target.value })}
                            sx={{
                                "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
                                    borderColor: "green"
                                },
                            }}
                        />
                        {/* <Grid item xs={12} sx={{ mt: '20px', ml: '10px' }}> */}
                    </Grid>
                    <Grid item xs={12}
                        sx={{ 
                            display: 'flex', justifyContent: 'center', 
                            width: '90%', mt: '20px' 
                            }}>
                        <InputLabel>Location</InputLabel>
                    </Grid>
                    <Grid item xs={12} sx={{ mt: '20px', ml: '10px' }}>
                        <TextField
                            className={classes.inputs}
                            required
                            id="standard-multiline-static"
                            label="Location"
                            multiline
                            rows={4}
                            style={{ width: 300 }}
                            type="text"
                            value={dogParkEdit.location}
                            onChange={(event) =>
                                setDogParkEdit({ ...dogParkEdit, location: event.target.value })}
                            sx={{
                                "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
                                    borderColor: "green"
                                },
                            }}
                        />
                        {/* <Grid item xs={12} sx={{ mt: '20px', ml: '10px' }}> */}
                    </Grid>
                    <Grid item xs={12}
                        sx={{
                            display: 'flex', justifyContent: 'center',
                            width: '90%', mt: '20px'
                        }}>
                        <InputLabel>Image URL</InputLabel>
                    </Grid>
                    <Grid item xs={12} sx={{ mt: '20px', ml: '10px' }}>
                        <TextField
                            className={classes.inputs}
                            required
                            id="standard-multiline-static"
                            label="Image Url"
                            multiline
                            rows={4}
                            style={{ width: 300 }}
                            type="text"
                            placeholder="image Url"
                            value={dogParkEdit.image_url}
                            onChange={(event) =>
                                setDogParkEdit({ ...dogParkEdit, image_url: event.target.value })}
                            sx={{
                                "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
                                    borderColor: "green"
                                },
                            }}
                        />
                        {/* <Grid item xs={12} sx={{ mt: '20px', ml: '10px' }}> */}
                    </Grid>
                    <Grid item xs={12}
                        sx={{
                            display: 'flex', justifyContent: 'center',
                            width: '90%', mt: '20px'
                        }}>
                        <InputLabel>Park Description</InputLabel>
                    </Grid>
                    <Grid item xs={12} sx={{ mt: '20px', ml: '10px' }}>
                        <TextField
                            required
                            className={classes.inputs}
                            id="standard-multiline-static"
                            label="Description"
                            multiline
                            rows={4}
                            style={{ width: 300 }}
                            type="text"
                            placeholder="description"
                            value={dogParkEdit.description}
                            onChange={(event) =>
                                setDogParkEdit({ ...dogParkEdit, description: event.target.value })}
                            sx={{
                                "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
                                    borderColor: "green"
                                },
                            }}
                        />
                    </Grid>
                    <Grid item xs={12} sx={{ mt: '20px', ml: '10px' }}>
                        <Button
                            size="large"
                            color="secondary"
                            variant="contained"
                            onClick={handleEditSubmit}>Submit Edit</Button>
                    </Grid>

                </form>
            </Grid>
        </>
    )
} //end DogParkDetailsEditView
