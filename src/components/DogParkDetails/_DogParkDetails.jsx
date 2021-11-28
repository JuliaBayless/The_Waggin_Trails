import { HashRouter as Router, Route, Link, useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux'
import { useHistory } from "react-router";
import { useEffect, useState } from 'react';

//styles
import { Container, Paper, Box, makeStyles } from '@material-ui/core';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import { CardActionArea, ButtonGroup } from '@mui/material';
import { pink } from '@mui/material/colors';
import PetsOutlinedIcon from '@mui/icons-material/PetsOutlined';
import DeleteForeverRoundedIcon from '@mui/icons-material/DeleteForeverRounded';
import ModeEditIcon from '@mui/icons-material/ModeEdit';

//component
import DogParkDetailsView from './DetailsView';
import DogParkDetailsEditView from './EditView';
import ParkTagEditForm from "../ParkTagEditForm/ParkTagEditForm";
import useStyles from '../styles/styles';





//view of specific dog park with edit and delete admin views
export default function dogParkDetails() {
    //hooks and state
    const dispatch = useDispatch();
    const history = useHistory();
    const { dp_id } = useParams();
    const classes = useStyles();

    //grabbing the stores
    const parkReducer = useSelector((store) => store.parkReducer);
    const userId = useSelector((store) => store.user);

    //local state for edit mode
    const [toggleViewEdit, setToggleViewEdit] = useState(true)



    useEffect(() => {

        dispatch({
            type: 'FETCH_DOG_PARK_DETAIL_VIEW', payload: dp_id
        })
        dispatch({ type: 'FETCH_ALL_TAGS' })
        dispatch({ type: 'FETCH_AVERAGE_RATING', payload: dp_id })
    }, [])


    //delete dog park
    const deleteDogPark = () => {
        dispatch({
            type: 'DELETE_THIS_DOG_PARK',
            payload: dp_id
        })
        history.push(`/DogParkList`)
    } //end deleteDogPark

    //function to edit toggle view between detail and edit
    const editPageMode = () => {
        setToggleViewEdit(!toggleViewEdit)
    } //end editPageMode


    // let dogParkDetails = parkReducer.allDogParksInDB.filter(park => park.id === dp_id)
    // console.log(dogParkDetails)
    let dogParkDetails = parkReducer.dogParkDetails

    return (

            <Container justifyContent="center"
            sx={{ flexGrow: 1 }} 
            container spacing={4}
            className={classes.listContainer}>

                {/* toggle the edit view */}
                {toggleViewEdit ?
                    <DogParkDetailsView dogParkDetails={dogParkDetails} /> :
                    <DogParkDetailsEditView dogParkDetails={dogParkDetails} />}


                {/* buttons appear for administrators */}
                {userId.access_level > 0 &&
                      <Paper 
                      elevation={6} 
                      className={classes.paper}
                      sx={{ border: 1 }}>
                    <ButtonGroup
                        sx={{ display: 'flex', justifyContent: 'center', mt: '20px', marginLeft: '40px' }}>
                        <Grid item xs={12}>
                            <ModeEditIcon
                                onClick={editPageMode} />
                            <DeleteForeverRoundedIcon
                                sx={{ marginLeft: '30px' }}
                                onClick={deleteDogPark} />
                        </Grid>
                    </ButtonGroup>
                </Paper>
                }
            </Container>
    )

}//end dogPark Details