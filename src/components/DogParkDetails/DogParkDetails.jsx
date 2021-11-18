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
import DogParkDetailsView from '../DogParkDetailsActualView/DogParkDetailsView';
import DogParkDetailsEditView from '../DogParkDetailsEditView/DogParkDetailsEditView';



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



//view of specific dog park with edit and delete admin views
export default function dogParkDetails() {
    //grabbing the specific dog park in the store
    const dogParkDetailsArray = useSelector((store) => store.soManyDogParks);
    const userId = useSelector((store) => store.user);
    const dispatch = useDispatch();
    const history = useHistory();
    const [toggleViewEdit, setToggleViewEdit] = useState(true)

    //styles
    const { root, rowLayout, iconLayout, layout } = useStyles();

    //making the variable easier to drill in to.
    let dogParkDetails = dogParkDetailsArray.dogParkDetails

    //delete dog park
    const deleteDogPark = () => {
        dispatch({
            type: 'DELETE_THIS_DOG_PARK',
            payload: dogParkDetails.id
        })
        history.push(`/DogParkList`)
    } //end deleteDogPark


    const editPageMode = () => {

        setToggleViewEdit(!toggleViewEdit)

        // console.log('edit dog park')
        // dispatch({
        //     type: 'THIS_DOG_PARK_TO_EDIT_PAGE',
        //     payload: dogParkDetails
        // })
    }


    console.log('This is user', userId.access_level)
    console.log('These are dogParkDetails', dogParkDetails);
    return (
        <>
            <Grid container spacing={2} >

                {/* toggle the edit view */}
                {toggleViewEdit ?
                    <DogParkDetailsView dogParkDetails={dogParkDetails} /> :
                    <DogParkDetailsEditView dogParkDetails={dogParkDetails} />}


                {/* buttons appear for administrators */}
                {userId.access_level > 0 &&
                <Box className={iconLayout}>
                    <Grid item xs={12} className={iconLayout}>
                        <DeleteForeverRoundedIcon
                            onClick={deleteDogPark} />
                        <ModeEditIcon

                            onClick={editPageMode} />
                    </Grid>
                </Box>}
            </Grid>
        </>
    )

}//end dogPark Details