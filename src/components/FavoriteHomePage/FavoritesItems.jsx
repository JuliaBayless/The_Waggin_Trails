import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";

//styling
import { Container, Box } from '@material-ui/core';
import {
  CardActionArea, CardContent, IconButton,
  CardMedia, CardHeader, Card, Chip, Stack
} from '@mui/material';
import { pink } from '@mui/material/colors';
import PetsIcon from '@mui/icons-material/Pets';
import Typography from '@mui/material/Typography';
import LocationOnIcon from '@mui/icons-material/LocationOn';

//components
import HeartIcon from '../HeartIcon/HeartIcon';
import useStyles from "../styles/styles";


//component for each card on the favorites page
export default function FavoritesItem({ favPark, dogParkTags, user, favorites }) {

  //hooks
  const dispatch = useDispatch();
  const history = useHistory();
  const classes = useStyles();


  //send users to details view with a useParams hook
  const handleSubmitDetails = () => {
    history.push(`/dogParkDetails/${favPark.id}`)
  } //end handleSubmit

  //pass this variable to favorites to recognize
  let dogParkId = favPark.id

  //filter the specific tags to this dog park
  let newTags = dogParkTags.specificTags.filter(tag => tag.dog_park_id === favPark.id)
  return (
    <Card
      className={classes.cardLayout}
      elevation={6} >
      <CardActionArea
        onClick={handleSubmitDetails}>
        <CardHeader
          title={favPark.name}
          subheader={favPark.location}
          avatar={
            <LocationOnIcon />
          }
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
          // inline style
          sx={{
            "& .MuiCardHeader-title": {
              fontFamily: "poppins, sans-serif",
              fontSize: "20px",
              color: "#OOOOOO",
              textAlign: "center",
              marginRight: "10px",
            },
            "& .MuiCardHeader-subheader": {
              fontFamily: "luckiest-guy, sans-serif",
              fontSize: "12px",
              textAlign: "center",
              marginRight: "20px",
            }

          }}
        />  {/*Header ends here*/}
        <CardMedia
          component="img"
          sx={{ height: 150, width: 400 }}
          image={favPark.image_url}
          alt={favPark.name} />
        <CardContent>
        <Box sx={{ margin: '10px' }}>
          <Typography>
            Park Status & Offerings:
          </Typography>
          <Stack direction="row" sx={{ display: 'flex', flexWrap: 'wrap' }}>
            {newTags?.map(tag => {
              return (
                <Chip
                  key={tag.id}
                  color="success"
                  className={classes.chipsLayout}
                  label={tag.tag}
                />
              )
            })}
          </Stack>
          </Box>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
