import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import { Container, Box } from '@material-ui/core';
import {
  CardActionArea, CardContent, CardMedia,
  CardHeader, Card, Chip, Stack, IconButton
} from '@mui/material';
import { pink } from '@mui/material/colors';
import PetsIcon from '@mui/icons-material/Pets';
import Typography from '@mui/material/Typography';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ModeEditIcon from '@mui/icons-material/ModeEdit';
import HeartIcon from '../HeartIcon/HeartIcon';
// const useStyles = makeStyles(() => ({
//   image:{
//       height: "150px",
//   },
// }))

export default function DogParkItem({ dogPark }) {
 //stores and hooks
  const user = useSelector(store => store.user);
  const favorites = useSelector(store => store.favoritesReducer)
  const dogParkTags = useSelector((store) => store.tagReducer);
  const dispatch = useDispatch();
  const history = useHistory();


  //fetch all dog park ids
  useEffect(() => {
    console.log();
    dispatch({
      type: 'FETCH_DOG_PARK_TAGS',
    })
  }, [])

  //send user to details page with useParams
  const handleSubmitDetails = () => {
    history.push(`/dogParkDetails/${dogPark.id}`)
  }

  //pass this variable to favorites to recognize
  let dogParkId = dogPark.id
  //filter the specific tags to this dog park
  let newTags = dogParkTags.specificTags.filter(tag => tag.dog_park_id === dogPark.id)
  return (

    <Card sx={{ maxWidth: 400 }}
      elevation={6}
      sx={{ height: 500, width: 300 }}>
      <CardActionArea
        onClick={() => { handleSubmitDetails(dogPark) }}>
        <CardHeader
          // onClick={() => { handleSubmitDetails(dogPark) }}

          action={
            <IconButton
              aria-label="settings"
              onMouseDown={event => event.stopPropagation()}
              onClick={event => {
                event.stopPropagation();
                event.preventDefault();
              }}>
              {/* call favorites component */}

              <HeartIcon
                dogParkId={dogParkId}
                favArray={favorites.favorites}
                user={user.id}
              />

            </IconButton>}

          title={dogPark.name}
          subheader={dogPark.location}
        />
        <Box display='flex' flexGrow={1}>
        </Box>
        <CardMedia
          // onClick={() => { handleSubmitDetails(dogPark) }}
          component="img"
          sx={{ height: 150, width: 300 }}
          image={dogPark.image_url}
          alt={dogPark.name} />
        <CardContent>
          <Box sx={{ margin: '10px' }}>
            <Stack direction="row" sx={{ display: 'flex', flexWrap: 'wrap' }}>
              {newTags?.map(tag => {
                return (
                  <Chip key={tag.id} color="success" label={tag.tag} />
                )
              })}
            </Stack>
          </Box>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

