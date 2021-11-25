import { all } from 'redux-saga/effects';
import loginSaga from './login.saga';
import registrationSaga from './registration.saga';
import userSaga from './user.saga';
import parkTagsSaga from './tags.saga';
import dogParksSaga from './dogParks.saga';
import ratingSaga from './Ratings.saga';
import favorites from './fav.saga';


export default function* rootSaga() {

  yield all([
    loginSaga(), // login saga is now registered
    registrationSaga(),
    userSaga(),
    parkTagsSaga(), //handles all tags
    dogParksSaga(), //handles all parks
    ratingSaga(), //handles all ratings
    favorites(), //handles favorties
  ]);
}
