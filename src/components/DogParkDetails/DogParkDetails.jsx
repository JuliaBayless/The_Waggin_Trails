import { HashRouter as Router, Route, Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux'
import { useHistory } from "react-router";
import { useEffect, useState } from 'react';
import { Container, Paper, Box, makeStyles } from '@material-ui/core';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import { CardActionArea } from '@mui/material';
import { pink } from '@mui/material/colors';
import PetsOutlinedIcon from '@mui/icons-material/PetsOutlined';
import DeleteForeverRoundedIcon from '@mui/icons-material/DeleteForeverRounded';
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
        margin : '20px'
    }
}));



//view of specific dog park with edit and delete admin views
export default function dogParkDetails() {
    //grabbing the specific dog park in the store
    const dogParkDetailsArray = useSelector((store) => store.soManyDogParks);
    const dispatch = useDispatch();
    const history = useHistory();
    const { root, rowLayout, iconLayout, layout } = useStyles();
    //making the variable easier to drill in to.
    let dogParkDetails = dogParkDetailsArray.dogParkDetails

//delete dog park
// delete dog park is not rendering right away on dog list page -> need to look closer
const deleteDogPark = () => {
    console.log('In delete dog park', dogParkDetails.id);

    dispatch({
        type: 'DELETE_THIS_DOG_PARK',
        payload: dogParkDetails.id
    })
    history.push('/DogParkList')
} //end deleteDogPark


const editPageMode = () => {
    console.log('edit dog park')
    dispatch({
        type: 'THIS_DOG_PARK_TO_EDIT_PAGE',
        payload: dogParkDetails
    })
}



    console.log('These are dogParkDetails', dogParkDetails);
    return (
        <>
            <Grid container spacing={2} className={root, rowLayout}>
                <Grid item xs={10}>
                    {/*conditional render to send user back to home page if 
            no movie has been chosen */}
                    {dogParkDetails.name === undefined ? <p> No dog park has been selected,
                        please go back to <Link to="/FavoriteHomePage">home</Link> page.
                    </p> : <h1>{dogParkDetails.name}</h1>}
                </Grid>
                <Grid item xs={2}>
                    <PetsOutlinedIcon />
                </Grid>

                <Grid item xs={12}>

                    <Typography
                        variant="h6"
                        gutterBottom
                        component="div"
                    >
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
                    <Box>
                        <Grid item xs={5} className={layout}>
                            <DeleteForeverRoundedIcon  
                            onClick={deleteDogPark}/>
                                <ModeEditIcon 
                                onClick={editPageMode}/>
                        </Grid>
                    </Box>

                </Grid>
                {/* close grid container */}
            </Grid>
        </>
    )

}//end dogPark Details