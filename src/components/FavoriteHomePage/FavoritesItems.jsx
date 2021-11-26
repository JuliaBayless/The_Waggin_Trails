import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import { Container, Box } from '@material-ui/core';
import {
  CardActionArea, CardContent, IconButton,
  CardMedia, CardHeader, Card, Chip, Stack
} from '@mui/material';
import { pink } from '@mui/material/colors';
import PetsIcon from '@mui/icons-material/Pets';
import Typography from '@mui/material/Typography';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import HeartIcon from '../HeartIcon/HeartIcon';

//component for each card on the favorites page
export default function FavoritesItem({ favPark }) {
 //stores and hooks
  const user = useSelector(store => store.user);
  const favorites = useSelector(store => store.favoritesReducer)
  const dogParkTags = useSelector((store) => store.tagReducer);
  const dispatch = useDispatch();
  const history = useHistory();


  //fetch all dog park tags
  useEffect(() => {
    dispatch({
      type: 'FETCH_DOG_PARK_TAGS',
    })
  }, [])


  //send users to details view with a useParams hook
  const handleSubmitDetails = () => {
    history.push(`/dogParkDetails/${favPark.id}`)
  } //end handleSubmit

  //pass this variable to favorites to recognize
  let dogParkId = favPark.id

  //filter the specific tags to this dog park
  let newTags = dogParkTags.specificTags.filter(tag => tag.dog_park_id === favPark.id)
  return (
    <Card sx={{ maxWidth: 400 }}
      elevation={6}
      onClick={handleSubmitDetails}
      sx={{ height: 400, width: 300 }}>
      <CardActionArea>
        <CardHeader
          title={favPark.name}
          subheader={favPark.location}
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
           />
        <Box display='flex' flexGrow={1}>
        </Box>
        <CardMedia
          component="img"
          sx={{ height: 150, width: 300 }}
          image={favPark.image_url}
          alt={favPark.name} />
        <CardContent>
          <Stack direction="row" sx={{ display: 'flex', flexWrap: 'wrap' }}>
            {newTags?.map(tag => {
              return (
                <Chip key={tag.id} color="success" label={tag.tag} />
              )
            })}
          </Stack>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
