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
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ParkTagEditForm from '../ParkTagEditForm/ParkTagEditForm';

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
    //grab park tags from the store
    const parkTags = useSelector((store) => store.tagReducer);
    //grab hooks
    const dispatch = useDispatch();
    //set useState for toggle
    const [toggleViewEdit, setToggleViewEdit] = useState(true)

    //call the tags
    useEffect(() => {
        dispatch({
            type: 'FETCH_DOG_PARK_TAGS',
        })
    }, [])

    const handleToggleChange = () => {
        dispatch({
            type: 'FETCH_DOG_PARK_TAGS',
        })
        setToggleViewEdit(!toggleViewEdit)
    }


    //function to toggle fav boolean value
    const toggleFavBoolean = () => {
        dispatch({
            type: 'TOGGLE_ISFAV_BOOLEAN_VALUE',
            payload: dogParkDetails.id
        })

    } //end toggleFavBoolean
    
    
    //filter out specific tags to dog park
    let newTags = parkTags.specificTags.filter(tag => tag.dog_park_id === dogParkDetails.dog_park_id)
   
    return (
        <>
            <Grid item xs={10}>
                <h1>{dogParkDetails.name}</h1>
            </Grid>
            <Grid item xs={2}>

                {}
                <FavoriteIcon
                sx={{ color: pink[300] }}
                onClick={toggleFavBoolean}
                        />
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
                <ModeEditIcon 
                onClick={() => handleToggleChange()}/>
                {/* toggle for edit chip view */}
                {toggleViewEdit ?
                <Stack direction="row" sx={{ display: 'flex', flexWrap: 'wrap', padding: '10px' }}>
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
                    :
                <ParkTagEditForm newTags={newTags} parkTags={parkTags} dogParkDetails={dogParkDetails.dog_park_id}/>
                }
            </Grid>
        </>
    )
} //end DogParkDetailsView