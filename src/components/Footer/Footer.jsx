import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';
import { useHistory } from "react-router";

//MUI
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ListIcon from '@mui/icons-material/List';

//components
import useStyles from '../styles/styles'




export default function FixedBottomNavigation() {
  //hooks
  const history = useHistory();
  const classes = useStyles();

  const [value, setValue] = React.useState(0);
  const ref = React.useRef(null);





  return (
    <BottomNavigation
      showLabels
      value={value}
      onChange={(event, newValue) => {
        setValue(newValue);
      }}
      className={classes.stickToBottom}
    >
      <BottomNavigationAction
        label="Add Park"
        icon={<AddCircleOutlineIcon />}
        onClick={() => history.push('/addParkForm')} />
      <BottomNavigationAction
        label="Favorites"
        icon={<FavoriteIcon />}
        onClick={() => history.push('/FavoriteHomePage')} />
      <BottomNavigationAction
        label="List of Dog Parks"
        icon={<ListIcon />}
        onClick={() => history.push('/DogParkList')} />
    </BottomNavigation>
  );
}

// function Footer() {


//   return (
//     <>

//       <Link className="navLink" to="/addParkForm">
//         Add a Park
//       </Link>
//       <Link className="navLink" to="/FavoriteHomePage">
//         Home
//       </Link>
//       <Link className="navLink" to="/DogParkList">
//         Dog Park List
//       </Link>

//     </>
//   )
// }

// export default Footer;
