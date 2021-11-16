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
  // const store = useSelector((store) => store);
  const [heading, setHeading] = useState('Functional Component');

  //   useEffect(() => {
  //     dispatch({
  //         type: 'FETCH_DOG_PARK_TAGS',
  //         payload: dogPark.id
  //     })
  // }, [])


  const handleSubmitDetails = () => {
    console.log(dogPark);

  }



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
          Tags here
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

