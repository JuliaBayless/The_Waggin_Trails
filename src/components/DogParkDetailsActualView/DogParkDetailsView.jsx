import { HashRouter as Router, Route, Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux'
import { useHistory } from "react-router";
import { useEffect, useState } from 'react';
import { Container, Paper, Box, makeStyles } from '@material-ui/core';
import Grid from '@mui/material/Grid';
import { Typography, Chip, Stack } from '@mui/material';
import { styled } from '@mui/material/styles';
import { pink } from '@mui/material/colors';
import PetsOutlinedIcon from '@mui/icons-material/PetsOutlined';
import ModeEditIcon from '@mui/icons-material/ModeEdit';


const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
        width: '100%'
    },
    rowLayout: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center' // To be vertically aligned
    },
    iconLayout: {
        margin: '40px'
    },
    layout: {
        margin: '20px'
    }
}));



export default function DogParkDetailsView({ dogParkDetails }) {
    const { root, rowLayout, iconLayout, layout } = useStyles();
    const parkTags = useSelector((store) => store.tagReducer);
    const dispatch = useDispatch();

    //call the tags
    useEffect(() => {
        dispatch({
            type: 'FETCH_DOG_PARK_TAGS',
        })
    }, [])

    console.log(parkTags, dogParkDetails)
    //filter out specific tags to dog park
    let newTags = parkTags.specificTags.filter(tag => tag.dog_park_id === dogParkDetails.id)
 
    return (
        <>
            <Grid item xs={10}>
                <h1>{dogParkDetails.name}</h1>
            </Grid>
            <Grid item xs={2}>
                <PetsOutlinedIcon />
            </Grid>

            <Grid item xs={12}>

                <Typography
                    variant="h6"
                    gutterBottom
                    component="div">
                    {dogParkDetails.location}
                </Typography>


            </Grid>
            <Grid item xs={12}>
                {/* conditional to stop empty img tag from render */}
                {dogParkDetails.image_url === undefined ? "" : <img src={dogParkDetails.image_url} alt={dogParkDetails.name}
                />}
            </Grid>
            <Grid Item xs={12} className={layout}>
                <Typography variant="h5" gutterBottom component="div" >
                    {dogParkDetails.description}
                </Typography>
                <Stack direction="row" sx={{ display: 'flex', flexWrap: 'wrap', padding:'10px'}}>
            {newTags?.map(tag => {
                return (
                <Chip 
                key={tag.id}
                // sx={{margin: '10px'}} Not working!
                color="success" 
                label={tag.tag} />
            )
            })}
            </Stack>
            </Grid>
        </>
    )
} //end DogParkDetailsView