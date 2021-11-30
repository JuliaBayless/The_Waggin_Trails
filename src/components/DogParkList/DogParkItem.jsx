import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";

//styles
import { Box } from '@material-ui/core';
import {
  CardActionArea, CardContent, CardMedia,
  CardHeader, Card, Chip, Stack, IconButton, Typography
} from '@mui/material';
import LocationOnIcon from '@mui/icons-material/LocationOn';

//components
import HeartIcon from '../HeartIcon/HeartIcon';
import useStyles from "../styles/styles";


export default function DogParkItem({ dogPark, favArray, dogParkTags }) {
  //stores 
  const user = useSelector(store => store.user);

  //hooks
  const dispatch = useDispatch();
  const history = useHistory();
  const classes = useStyles();


  //send user to details page with useParams
  const handleSubmitDetails = () => {
    history.push(`/dogParkDetails/${dogPark.id}`)
  }

  //pass this variable to favorites to recognize
  let dogParkId = dogPark.id
  //filter the specific tags to this dog park
  let newTags = dogParkTags.specificTags.filter(tag => tag.dog_park_id === dogPark.id)
  return (

    <Card
      className={classes.cardLayout}
      elevation={6}
    >
      <CardActionArea
        onClick={() => { handleSubmitDetails(dogPark) }}>
        <CardHeader
          title={dogPark.name}
          subheader={dogPark.location}
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
                // favArray={favorites.favorites}
                favArray={favArray}
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
        />
        <CardMedia
          component="img"
          sx={{ height: 150, width: 400 }}
          image={dogPark.image_url}
          alt={dogPark.name} />
        <CardContent>
          <Box sx={{ margin: '10px' }}>
          <Typography>
            Park Status & Offerings:
          </Typography>
            <Stack direction="row" sx={{ display: 'flex',  flexWrap: 'wrap' }}>
              {newTags?.map(tag => {
                if (tag.tag_id > 17) {
                  return (
                    <Chip
                      key={tag.id}
                      color='error'
                      className={classes.chipsLayout}
                      label={tag.tag}
                    />)
                } else {
                  return (
                    <Chip
                      key={tag.id}
                      color="success"
                      className={classes.chipsLayout}
                      label={tag.tag}
                    />)
                }
              })}
            </Stack>
          </Box>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

