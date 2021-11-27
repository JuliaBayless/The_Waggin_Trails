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
import { AppBar, useScrollTrigger, Slide } from '@material-ui/core';

//components
import useStyles from '../styles/styles'




export default function FixedBottomNavigation() {
  //hooks
  const history = useHistory();
  const classes = useStyles();

  // const [value, setValue] = React.useState(1);
  const ref = React.useRef(null);


  interface Props {
    children: React.ReactElement;
  }

  function HideOnScroll({ children }: Props) {
    const trigger = useScrollTrigger();

    return (
      <Slide appear={false} direction={'down'} in={!trigger}>
        {children}
      </Slide>

    )
  }


  return (
    <HideOnScroll>
      <AppBar>
        <BottomNavigation
          showLabels
          // value={value}
          // onChange={(event, newValue) => {
          //   setValue(newValue);
          // }}
          className={classes.stickToBottom}
        >
          <BottomNavigationAction
            label="Add Park"
            icon={<AddCircleOutlineIcon />}
            onClick={() => history.push('/addParkForm')} />
          <BottomNavigationAction
            label="Favorites"
            icon={<FavoriteIcon />}
            onClick={() => history.push('/home')} />
          <BottomNavigationAction
            label="List of Dog Parks"
            icon={<ListIcon />}
            onClick={() => history.push('/DogParkList')} />
        </BottomNavigation>
      </AppBar>
    </HideOnScroll>
  );
}

