import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

import {
  AppBar,
  Toolbar,
  Typography,
  makeStyles,
  Button,
} from "@material-ui/core";
import { positions } from "@mui/system";

//import components
import LogOutButton from '../LogOutButton/LogOutButton';
import './Nav.css';
import useStyles from '../styles/styles';

// data containing routes for header links
const headersData = [
  {
      label: "Home",
      href: "/",
  },
  {
      label: "Log Out",
      href: "/AddMovie",
  },
]




function Nav() {
  const classes = useStyles();

  //stores
  const user = useSelector((store) => store.user);



  return (
    <div className="nav">
      <Link to="/home">
        <h2 className="nav-title">The Waggin' Trails</h2>
      </Link>
      <div>
        {/* If no user is logged in, show these links */}
        {user.id === null &&
          // If there's no user, show login/registration links
          <Link className="navLink" to="/login">
            Login / Register
          </Link>
        }

        {/* If a user is logged in, show these links */}
        {user.id && (
          <>


            <LogOutButton className="navLink" />
          </>
        )}

        <Link className="navLink" to="/about">
          About
        </Link>
      </div>
    </div>
  );
}

export default Nav;
