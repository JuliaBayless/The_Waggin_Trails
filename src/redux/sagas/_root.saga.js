import { all } from 'redux-saga/effects';
import loginSaga from './login.saga';
import registrationSaga from './registration.saga';
import userSaga from './user.saga';
<<<<<<< HEAD
import parkTags from './tags.saga';
import dogParks from './dogParks.saga';
import Favorites from './isFavDogPark.saga';
=======
import parkTagsSaga from './tags.saga';
import dogParksSaga from './dogParks.saga';
>>>>>>> feature-main

// rootSaga is the primary saga.
// It bundles up all of the other sagas so our project can use them.
// This is imported in index.js as rootSaga

// some sagas trigger other sagas, as an example
// the registration triggers a login
// and login triggers setting the user
export default function* rootSaga() {
  yield all([
    loginSaga(), // login saga is now registered
    registrationSaga(),
    userSaga(),
<<<<<<< HEAD
    parkTags(),
    dogParks(),
    Favorites()
=======
    parkTagsSaga(),
    dogParksSaga(),
>>>>>>> feature-main
  ]);
}
