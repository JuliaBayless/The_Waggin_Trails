import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux'
import { useHistory } from "react-router";
import { useEffect, useState } from 'react';

//styles
import { Container, Typography } from '@material-ui/core';
import { ButtonGroup, Grid } from '@mui/material';
import DeleteForeverRoundedIcon from '@mui/icons-material/DeleteForeverRounded';
import ModeEditIcon from '@mui/icons-material/ModeEdit';

//component
import DogParkDetailsView from './DetailsView';
import DogParkDetailsEditView from './EditView';
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
        // dispatch({ type: 'FETCH_AVERAGE_RATING', payload: dp_id })
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
        <Container 
        sx={{ mt: '30px', display: 'flex', justifyContent: 'center' }}>
            <div className={classes.paper}>
            <Grid container
                spacing={2}
                direction="column"
                justify="space-evenly"
                component="paper"
                alignItems="center">

                {/* toggle the edit view */}
                {toggleViewEdit ?
                    <DogParkDetailsView dogParkDetails={dogParkDetails} /> :
                    <DogParkDetailsEditView dogParkDetails={dogParkDetails} />}


                {/* buttons appear for administrators */}
                {userId.access_level > 0 &&
                <>
                <Grid item xs={12}
                 sx={{ 
                     display: 'flex', justifyContent: 'right', 
                     width: '90%', mt: '10px' 
                     }}>
                <Typography className={classes.subHeader}>
                     Admin Use Only*
                </Typography>
                </Grid>
                <Grid item xs={12}
                 sx={{ 
                     display: 'flex', justifyContent: 'right', 
                     width: '90%',
                     }}>
                        <ButtonGroup
                            sx={{ display: 'flex', justifyContent: 'center', mb: "30px" }}>
                                <ModeEditIcon
                                    onClick={editPageMode} />
                                <DeleteForeverRoundedIcon
                                    sx={{ marginLeft: '30px' }}
                                    onClick={deleteDogPark} />
                        </ButtonGroup>
                    </Grid>
                    </>
                }
            </Grid>
        </div>
    </Container >
    )

}//end dogPark Details