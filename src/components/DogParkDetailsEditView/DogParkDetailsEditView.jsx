import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch, } from 'react-redux';
import { useHistory } from "react-router";
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { MenuItem, TextareaAutosize, Button, Input} from "@material-ui/core";
import TextField from '@mui/material/TextField';
import { Paper, Box, makeStyles } from '@material-ui/core';
import Grid from '@mui/material/Grid';

const useStyles = makeStyles(theme => ({
    iconLayout: {
        margin: '40px'
    },
    layout: {
        margin: '20px'
    }
}));




export default function DogParkDetailsEditView({ dogParkDetails }) {
    const [dogParkEdit, setDogParkEdit] = useState(dogParkDetails)
    const {  iconLayout, layout } = useStyles();
    const handleEditSubmit = () => {

        event.preventDefault();

        // console.log('edit dog park')
        // dispatch({
        //     type: 'THIS_DOG_PARK_TO_EDIT_PAGE',
        //     payload: dogParkDetails
        // })

    }

    console.log(dogParkDetails)
    return (
        <>
            <Grid container spacing={2}>
                <form className={iconLayout}>
                    <Grid item xs={12}>
                        <TextField
                            required
                            id="standard-multiline-static"
                            label="Name"
                            multiline
                            rows={2}
                            type="text"
                            style = {{width: 300}}
                            placeholder="Name"
                            value={dogParkEdit.name}
                            onChange={(event) =>
                                setDogPark({ ...dogParkEdit, name: event.target.value })}
                        />
                        <Grid item xs={12}>
                        </Grid>
                        <TextField
                            required
                            id="standard-multiline-static"
                            label="Location"
                            multiline
                            rows={4}
                            style = {{width: 300}}
                            type="text"
                            value={dogParkEdit.location}
                            onChange={(event) =>
                                setDogPark({ ...dogParkEdit, location: event.target.value })}
                        />
                        <Grid item xs={12}>
                        </Grid>
                        <TextField
                            required
                            id="standard-multiline-static"
                            label="Image Url"
                            multiline
                            rows={4}
                            style = {{width: 300}}
                            type="text"
                            placeholder="image Url"
                            value={dogParkEdit.image_url}
                            onChange={(event) =>
                                setDogPark({ ...dogParkEdit, image_url: event.target.value })}
                        />
                        <Grid item xs={12}>
                        </Grid>
                        <TextField
                            required
                            id="standard-multiline-static"
                            label="Description"
                            multiline
                            rows={4}
                            style = {{width: 300}}
                            type="text"
                            placeholder="description"
                            value={dogParkEdit.description}
                            onChange={(event) =>
                                setDogPark({ ...dogParkEdit, description: event.target.value })}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <Button
                            variant="outlined"
                            type="submit">Submit Edit</Button>
                    </Grid>

                </form>
            </Grid>
        </>
    )
} //end DogParkDetailsEditView
