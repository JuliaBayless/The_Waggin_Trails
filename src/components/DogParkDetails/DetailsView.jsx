import { HashRouter as Router, Route, Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux'
import { useHistory } from "react-router";
import { useEffect, useState } from 'react';
import { Container, Paper, Box, makeStyles, Button } from '@material-ui/core';
import Grid from '@mui/material/Grid';
import { Typography, Chip, Stack } from '@mui/material';
import { styled } from '@mui/material/styles';
import { pink } from '@mui/material/colors';
import PetsOutlinedIcon from '@mui/icons-material/PetsOutlined';
import ModeEditIcon from '@mui/icons-material/ModeEdit';
import ParkTagEditForm from '../ParkTagEditForm/ParkTagEditForm';
import HeartIcon from '../HeartIcon/HeartIcon'
import useStyles from '../styles/styles'




export default function DogParkDetailsView({ dogParkDetails }) {
    const classes = useStyles();
    //grab park tags from the store
    const parkTags = useSelector((store) => store.tagReducer);
    const user = useSelector(store => store.user);
    const favorites = useSelector(store => store.favoritesReducer)
    //grab hooks
    const dispatch = useDispatch();
    //set useState for toggle
    const [toggleViewEdit, setToggleViewEdit] = useState(true)
    

    //call the tags and favorites
    useEffect(() => {
        dispatch({
            type: 'FETCH_DOG_PARK_TAGS',
        })
            dispatch({
                type: 'FETCH_ALL_FROM_FAVORITES_TABLE'
            })
    }, [])

    //handle toggle to edit view for dog tag categories
    const handleToggleChange = () => {
        dispatch({
            type: 'FETCH_DOG_PARK_TAGS',
        })
        setToggleViewEdit(!toggleViewEdit)
    }


    // //function to toggle fav boolean value
    // const toggleFavBoolean = () => {
    //     dispatch({
    //         type: 'INSERT_INTO_FAV_TABLE',
    //         payload: dogParkDetails.id
    //     })

    // } //end toggleFavBoolean
    
    //change dog park id into var for props to pass to Fav component
    let dogParkId = dogParkDetails.dog_park_id
    
    //filter out specific tags to dog park
    let newTags = parkTags.specificTags.filter(tag => tag.dog_park_id === dogParkDetails.dog_park_id)
    
    return (
        <>
            <Grid item xs={10}>
                <h1>{dogParkDetails.name}</h1>
            </Grid>
            <Grid item xs={2}>

               <HeartIcon dogParkId={dogParkId} 
               favArray={favorites.favorites} 
               user={user.id} />
               
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
            <Grid Item xs={12} className={classes.layout}>
                <Typography variant="h5" gutterBottom component="div" >
                    {dogParkDetails.description}
                </Typography>
                {/* toggle for edit chip view */}
                {toggleViewEdit ?
                <>
                <ModeEditIcon 
                onClick={() => handleToggleChange()}/>
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
                </>
                    :
                    <>
                <ParkTagEditForm 
                newTags={newTags} 
                parkTags={parkTags} 
                dogParkDetails={dogParkDetails.dog_park_id} />
                
                <Button
                variant="contained"
                color="error"
                onClick={() => handleToggleChange()}
                >
                Return
            </Button>
            </>
                }
            </Grid>
        </>
    )
} //end DogParkDetailsView