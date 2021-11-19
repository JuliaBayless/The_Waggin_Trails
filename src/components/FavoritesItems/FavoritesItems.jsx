import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import { Container, Box } from '@material-ui/core';
import {
  CardActionArea, CardContent,
  CardMedia, CardHeader, Card, Chip, Stack
} from '@mui/material';
import { pink } from '@mui/material/colors';
import PetsIcon from '@mui/icons-material/Pets';
import Typography from '@mui/material/Typography';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';


//component for each card on the favorites page
export default function FavoritesItem({ favPark }) {
    // const { image } = useStyles();
    const dogParkTags = useSelector((store) => store.tagReducer);
    const dispatch = useDispatch();
    const history = useHistory();
  
  
    //fetch all dog park tags
    useEffect(() => {
      dispatch({
        type: 'FETCH_DOG_PARK_TAGS',
      })
    }, [])
  
  
    const handleSubmitDetails = () => {  
      history.push(`/dogParkDetails/${favPark.id}`)
    } //end handleSubmit
  
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
            action={<FavoriteIcon
                sx={{ color: pink[300] }}
                onClick={toggleFavBoolean}
                        />} />
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
  