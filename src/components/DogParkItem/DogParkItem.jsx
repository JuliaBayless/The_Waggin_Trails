import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import { Container, Box } from '@material-ui/core';
import { CardActionArea } from '@mui/material';
import { pink } from '@mui/material/colors';
import PetsIcon from '@mui/icons-material/Pets';
import Typography from '@mui/material/Typography';


// const useStyles = makeStyles(() => ({
//   image:{
//       height: "150px",
//   },
// }))

export default function DogParkItem({ dogPark }) {
  // const { image } = useStyles();
  const dogParkTags = useSelector((store) => store.tags);
  const dispatch = useDispatch();
  const [tags, setTags] = useState('Functional Component');


  //fetch all dog park ids
    useEffect(() => {
      console.log();
      dispatch({
          type: 'FETCH_DOG_PARK_TAGS',
      })
  }, [])


  const handleSubmitDetails = () => {
    console.log(dogPark);
  }

  // const filterTags = () => {
  //  let newTags =  dogParkTags.specificTags.filter(tag => tag.dog_park_id === dogPark.id)
  //     console.log('This is newTags', newTags)

  //   newTags?.map(tag => {
  //     return(
  //       <Box key={tag.id}>{tag.tag}</Box>
  //     )
  //   })//end map
  // } //end filterTags

  let newTags =  dogParkTags.specificTags.filter(tag => tag.dog_park_id === dogPark.id)
      console.log('This is newTags', newTags)

  return (

    <Card sx={{ maxWidth: 400 }}
      elevation={6}
      onClick={() => { handleSubmitDetails(dogPark) }}
      sx={{ height: 400, width: 300 }}>
      <CardActionArea>
        <CardHeader
          title={dogPark.name}
          subheader={dogPark.location}
          action={<PetsIcon />} />
        <Box display='flex' flexGrow={1}>
        </Box>
        <CardMedia
          component="img"
          sx={{ height: 150, width: 300 }}
          image={dogPark.image_url}
          alt={dogPark.name} />
        <CardContent>
        {newTags?.map(tag => {
          return(
            <div key={tag.id}><p>{tag.tag}</p></div>
          )
        })}
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

