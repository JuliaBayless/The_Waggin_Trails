import { combineReducers } from 'redux';
import errors from './errors.reducer';
import user from './user.reducer';
import tagReducer from './tags.reducer';
import parkReducer from './dogParks.reducer';
import ratingReducer from './rating.reducer';
import favoritesReducer from './favorites.reducer';


const rootReducer = combineReducers({
  errors, // contains registrationMessage and loginMessage
  user, // will have an id and username if someone is logged in
  tagReducer, //all things tags related
  parkReducer, //all parks related
  ratingReducer, //all review and rating related
  favoritesReducer, //all favorites related
});

export default rootReducer;
