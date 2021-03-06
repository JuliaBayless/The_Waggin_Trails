import React, { useEffect } from 'react';
import {
  HashRouter as Router,
  Redirect,
  Route,
  Switch,
} from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useMediaQuery } from 'react-responsive'


//page imports
import AboutPage from '../AboutPage/AboutPage';
import LandingPage from '../LandingPage/LandingPage';
import LoginPage from '../LoginPage/LoginPage';
import RegisterPage from '../RegisterPage/RegisterPage';
import FavoriteHomePage from '../FavoriteHomePage/FavoriteHomePage';
import './App.css';
import AddDogParkForm from '../AddParkForm/AddParkForm';
import DogParkList from '../DogParkList/DogParkList';
import Nav from '../Nav/Nav';
import Footer from '../Footer/Footer';
import DogParkDetails from '../DogParkDetails/_DogParkDetails';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';

//style imports
import {
  Typography, Container,
  createTheme, ThemeProvider
} from '@material-ui/core';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import "@fontsource/short-stack";
import "@fontsource/luckiest-guy";
import "@fontsource/poppins/500.css";
import "@fontsource/oxygen";
import "@fontsource/oxygen/700.css";
import "@fontsource/open-sans";
import "@fontsource/montserrat";
import useStyles from '../styles/styles';


const theme = createTheme({
  palette: {
    primary: {
      main: "#C03C3C",
    },
    secondary: {
      main: "#000000",
    },
  },
  // props: {
  //   MuiContainer: {
  //     maxWidth: "md",
  //   },
  // }
});




function App() {
  //hooks
  const dispatch = useDispatch();
  const classes = useStyles();

  //stores
  const user = useSelector(store => store.user);

  useEffect(() => {
    dispatch({ type: 'FETCH_USER' });
  }, []);

  return (
    <ThemeProvider theme={theme}>
      
        <Router>
          <div>
            <Nav />
            <Switch>
              {/* Visiting localhost:3000 will redirect to localhost:3000/home */}
              <Redirect exact from="/" to="/home" />

              {/* Visiting localhost:3000/about will show the about page. */}
              <Route
                // shows AboutPage at all times (logged in or not)
                exact
                path="/about"
              >
                <AboutPage />
              </Route>

              {/* For protected routes, the view could show one of several things on the same route.
            Visiting localhost:3000/user will show the UserPage if the user is logged in.
            If the user is not logged in, the ProtectedRoute will show the LoginPage (component).
            Even though it seems like they are different pages, the user is always on localhost:3000/user */}
              <ProtectedRoute
                // logged in shows UserPage else shows LoginPage
                exact
                path="/home"
              >
                <FavoriteHomePage />
              </ProtectedRoute>



              <ProtectedRoute
                // logged in shows the add form else shows LoginPage
                exact
                path="/addParkForm"
              >
                <AddDogParkForm />
              </ProtectedRoute>


              <ProtectedRoute
                // logged in shows InfoPage else shows LoginPage
                exact
                path="/DogParkList"
              >
                <DogParkList />
              </ProtectedRoute>


              <ProtectedRoute
                // logged in shows InfoPage else shows LoginPage
                exact
                path="/DogParkDetails/:dp_id"
              >
                <DogParkDetails />
              </ProtectedRoute>


              <Route
                exact
                path="/login"
              >
                {user.id ?
                  // If the user is already logged in, 
                  // redirect to the /user page
                  <Redirect to="/home" />
                  :
                  // Otherwise, show the login page
                  <LoginPage />
                }
              </Route>


              <Route
                exact
                path="/registration"
              >
                {user.id ?
                  // If the user is already logged in, 
                  // redirect them to the /user page
                  <Redirect to="/home" />
                  :
                  // Otherwise, show the registration page
                  <RegisterPage />
                }
              </Route>


              <Route
                exact
                path="/home"
              >
                {user.id ?
                  // If the user is already logged in, 
                  // redirect them to the /user page
                  <Redirect to="/home" />
                  :
                  // Otherwise, show the Landing page
                  <LoginPage />
                  // <LandingPage />
                }
              </Route>


              {/* If none of the other routes matched, we will show a 404. */}
              <Route>
                <Container
                  sx={{
                    display: 'flex', justifyContent: 'center', width: '90%'
                  }}>
                  <Typography
                    variant='h1'
                    className={classes.subHeader}
                  >404</Typography>
                  <Typography
                    variant='h5'
                    className={classes.subHeader}>
                    Opps...
                  </Typography>
                  <Typography
                    variant='h5'
                    className={classes.subHeader}>
                    Something went wrong!
                  </Typography>
                </Container>
              </Route>
            </Switch>


            {user.id &&
              <Footer />}

          </div>
        </Router>
    
    </ThemeProvider>
  );
}

export default App;
