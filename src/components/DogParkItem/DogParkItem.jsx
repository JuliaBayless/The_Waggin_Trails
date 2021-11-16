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
            action={<PetsIcon /> }/>
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



    // <Paper elevation={3} sx={{ flexGrow: 1 }} sx={{ height: 400, width: 250 }}>
    //   <Grid container spacing={2} sx={{ height: 400, width: 250 }}>
        
    //     <Grid item xs={6}>
    //       <Typography
    //         variant="h6"
    //         gutterBottom
    //         component="div"
    //       >
    //         {dogPark.name}
    //       </Typography>
    //     </Grid>
    //     <Grid item xs={6}>
    //     <PetsIcon />
    //     </Grid>
    //     <Grid item xs={12}>

    //       <img src={dogPark.image_url} alt={dogPark.name}
    //         className={image} />
    //     </Grid>

    //     <Typography variant="h6"
    //       gutterBottom component="div"
    //       className={dogPark.location}>
    //     </Typography>
    //     {/* <Typography variant="h5" gutterBottom component="div">
    //         {genres?.map(genre => genre.name).join(',  ')}
    //       </Typography> */}

    //   </Grid>
    // </Paper >




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

