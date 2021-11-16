import { useSelector, useDispatch } from 'react-redux'
import { useHistory } from "react-router";
import { useEffect, useState } from 'react';
import { Container, Paper, Box, makeStyles } from '@material-ui/core';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';
import PetsIcon from '@mui/icons-material/Pets';







export default function DogParkItem({ dogPark }) {

  // const store = useSelector((store) => store);
  const [heading, setHeading] = useState('Functional Component');


  const handleSubmitDetails = () => {
    console.log(dogPark);

  }



  return (

    <Paper elevation={3} sx={{ flexGrow: 1 }} sx={{ height: 400, width: 250 }}>
      <Grid container spacing={2} sx={{ height: 400, width: 250 }}>
        
        <Grid item xs={6}>
          <Typography
            variant="h6"
            gutterBottom
            component="div"
          >
            {dogPark.name}
          </Typography>
        </Grid>
        <Grid item xs={6}>
        <PetsIcon />
        </Grid>
        <Grid item xs={12}>

          <img src={dogPark.image_url} alt={dogPark.name}
            sx={{ width: 250, maxheight: 200 }} />
        </Grid>

        <Typography variant="h6"
          gutterBottom component="div"
          className={dogPark.location}>
        </Typography>
        {/* <Typography variant="h5" gutterBottom component="div">
            {genres?.map(genre => genre.name).join(',  ')}
          </Typography> */}

      </Grid>
    </Paper >




    // <Container>
    //   <Card sx={{ maxWidth: 400 }}
    //     elevation={6}
    //     onClick={() => { handleSubmitDetails(dogPark) }}
    //     sx={{ height: 400, width: 250 }}>
    //     <CardActionArea>
    //     <CardHeader
    //         title={dogPark.name} />
    //         <PetsIcon sx={{ color: pink[100] }} /> 
    //     <Box display='flex' flexGrow={1}>
    //       </Box>
    //       <CardMedia
    //         component="img"
    //         sx={{ height: 150, width: 250 }}
    //         image={dogPark.image_url}
    //         alt={dogPark.name} />
    //       <CardContent>
    //     <Typography variant="body2" color="text.secondary">
    //       {dogPark.location}
    //     </Typography>
    //   </CardContent>
    //     </CardActionArea>
    //   </Card>
    // </Container>
  );
}

