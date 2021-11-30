import { useSelector, useDispatch } from 'react-redux'
import { useEffect, useState } from 'react';

//styles
import { Button } from '@material-ui/core';
import Grid from '@mui/material/Grid';
import { Typography, Chip, Stack } from '@mui/material';
import ModeEditIcon from '@mui/icons-material/ModeEdit';
import LocationOnIcon from '@mui/icons-material/LocationOn';

// components
import ParkTagEditForm from '../ParkTagEditForm/ParkTagEditForm';
import HeartIcon from '../HeartIcon/HeartIcon'
import useStyles from '../styles/styles'




export default function DogParkDetailsView({ dogParkDetails }) {

    //grab park tags from the store
    const parkTags = useSelector((store) => store.tagReducer);
    const user = useSelector(store => store.user);
    const favorites = useSelector(store => store.favoritesReducer)

    //grab hooks
    const dispatch = useDispatch();
    const classes = useStyles();

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


    //change dog park id into var for props to pass to Fav component
    let dogParkId = dogParkDetails.dog_park_id

    //filter out specific tags to dog park
    let newTags = parkTags.specificTags.filter(tag => tag.dog_park_id === dogParkDetails.dog_park_id)

    return (
        <>
            <Grid item xs={10}>
                <h1
                    className={classes.detailsHeader}>
                    {dogParkDetails.name}
                </h1>
            </Grid>

            <Grid item xs={12}>
                {/* conditional to stop empty img tag from render */}
                {dogParkDetails.image_url === undefined ? "" : <img src={dogParkDetails.image_url} alt={dogParkDetails.name}
                />}
            </Grid>
            <Grid item xs={12}
                sx={{ display: 'flex', justifyContent: 'right', width: '90%' }}>

                <LocationOnIcon />
                <Typography
                    variant="body2"
                    gutterBottom
                    component="div">
                    {dogParkDetails.location}
                </Typography>

                <HeartIcon dogParkId={dogParkId}
                    favArray={favorites.favorites}
                    user={user.id} />
            </Grid>
            <Grid item xs={12}
                sx={{
                    display: 'flex', justifyContent: 'center',
                    textAlign: 'center', width: '70%'
                }}>
                <Typography variant="h5" 
                className={classes.subHeader}>
                    Description
                </Typography>
            </Grid>

            <Grid item xs={12}
                sx={{
                    display: 'flex', justifyContent: 'center', width: '90%'
                }}>
                <Typography variant="subtitle1" gutterBottom component="div" >
                    {dogParkDetails.description}
                </Typography>
            </Grid>
            {/* toggle for edit chip view */}

            {toggleViewEdit ?
                <>
                    <Grid item xs={12}
                        sx={{
                            display: 'flex', justifyContent: 'center',
                            width: '90%', gap: '10px', mr: '30px'
                        }}>
                        <ModeEditIcon
                            onClick={() => handleToggleChange()} />
                        <Typography variant="h5"
                        className={classes.subHeader}>
                            Edit Tags
                        </Typography>
                    </Grid>
                    <Grid item xs={12}
                        sx={{
                            display: 'flex', justifyContent: 'center',
                            width: '90%', mt: '-15px'
                        }}>
                        <Typography variant="body2">
                            Help keep the parks up to date
                        </Typography>
                    </Grid>
                    <Grid item xs={12}>
                        <Stack direction="row"
                            sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '10px', mb: '10px' }}>
                            {newTags?.map(tag => {
                                return (
                                    <Chip
                                        key={tag.id}
                                        color="success"
                                        className={classes.chipsLayout}
                                        label={tag.tag} />
                                )
                            })}
                        </Stack>
                    </Grid>
                </>
                :
                <>
                    <Grid item xs={12}>
                        <ParkTagEditForm
                            newTags={newTags}
                            parkTags={parkTags}
                            dogParkDetails={dogParkDetails.dog_park_id} />
                    </Grid>
                    <Grid item xs={12}
                    sx={{ 
                        display: 'flex', flexWrap: 'wrap', 
                        justifyContent: 'left', width: '90%', m: '15px'
                        }}>
                        <Button
                            size="large"
                            variant="contained"
                            color="secondary"
                            onClick={() => handleToggleChange()}>
                            Return
                        </Button>
                    </Grid>
                </>
            }

        </>
    )
} //end DogParkDetailsView