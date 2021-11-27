import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useHistory } from "react-router";

import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  Button,
  IconButton,
  Switch,
  FormControlLabel,
  FormGroup,
  MenuItem,
  Menu,
  useTheme,
  useMediaQuery
} from "@material-ui/core";
import { positions } from "@mui/system";
import MenuIcon from '@mui/icons-material/Menu';
import AccountCircle from '@mui/icons-material/AccountCircle';

//import components
import LogOutButton from '../LogOutButton/LogOutButton';
import './Nav.css';
import useStyles from '../styles/styles';





export default function Nav() {
  //hooks
  const classes = useStyles();
  const history = useHistory();

  //stores
  const user = useSelector((store) => store.user);

  
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleChange = (event) => {
    setAuth(event.target.checked);
    
  };

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  }

  //send user home
  const handlePushList = () => {
    setAnchorEl(null);
    history.push('/DogParkList')
  };

  //send user to list
  const handlePushHome = () => {
    setAnchorEl(null);
    history.push('/home')
  };

//send use to form
  const handlePushForm = () => {
    setAnchorEl(null);
    history.push('/addParkForm')
  };

  //BreakPOints
  const theme = useTheme();


  const isMatch = useMediaQuery('960px')

  return (
    <Box sx={{ flexGrow: 1 }}>
    <AppBar position="static">
      <Toolbar>
       {user.id && <IconButton
       
          edge="start"
          color="inherit"
          aria-label="menu"
          onClick={handleMenu}
          sx={{ mr: 2 }}
        >
          <MenuIcon />
        </IconButton> }
        
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
     
          The Waggin' Trails
         
        </Typography>
        
        {user.id === null &&
          // If there's no user, show login/registration links
          <Link className="navLink" to="/login">
            Login / Register
          </Link>
        }
        {user.id && (
          <div>
            <IconButton
              // size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              
              color="inherit"
            >
              <AccountCircle />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorEl}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorEl)}
              onClose={handleClose}
            >
              <MenuItem onClick={handlePushForm}>Add A Park</MenuItem>
              <MenuItem onClick={handlePushHome}>Favorites</MenuItem>
              <MenuItem onClick={handlePushList}>List</MenuItem>
            </Menu>
          </div>
        )}
      </Toolbar>
    </AppBar>
  </Box>


    
    // <div className="nav">
    //   <Link to="/home">
    //     <h2 className="nav-title">The Waggin' Trails</h2>
    //   </Link>
    //   <div>
    //     {/* If no user is logged in, show these links */}
    //     {user.id === null &&
    //       // If there's no user, show login/registration links
    //       <Link className="navLink" to="/login">
    //         Login / Register
    //       </Link>
    //     }

    //     {/* If a user is logged in, show these links */}
    //     {user.id && (
    //       <>


    //         <LogOutButton className="navLink" />
    //       </>
    //     )}

    //     <Link className="navLink" to="/about">
    //       About
    //     </Link>
    //   </div>
    // </div>
  );
}


