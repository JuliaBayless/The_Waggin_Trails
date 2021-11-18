import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

//sagas for all stuff park related here

//GET all dog parks in DB
function* fetchAllDogParks() {
  try {
    const response = yield axios.get(`/api/dogParks`);
    console.log('GET ALL DOG PARKS', response.data);
    yield put({
      type: 'SET_All_DOG_PARKS',
      payload: response.data
    });
  } catch (error) {
    yield put({ type: 'ERROR_IN_SET_All_DOG_PARKS' })
  }
} //end fetchAllTags


//POST NEW DOG PARK
function* addNewDogPark(action) {
  try {
    axios.post('/api/dogParks', action.payload)
    //FETCH the new DB
    // yield put({ type: 'FETCH_ALL_DOG_PARKS' });
  } catch (error) {
    yield put({ type: 'ERROR_IN_ADD_NEW_DOG_PARK' })
  }
} //end addNewDogPark


//saga to send a delete id to the router
function* deleteThisDogPark(action) {
  try {
    axios.delete(`/api/dogParks/${action.payload}`)
    //FETCH the new DB 
  
  } catch (error) {
    yield put({ type: 'ERROR_IN_ADD_NEW_DOG_PARK' })
  }
} //end addNewDogPark


// function* FetchThisODogPark(action) {
//   try {
//     axios.post('/api/dogParks', action.payload)
//     //FETCH the new DB
//     yield put({ type: 'FETCH_ALL_DOG_PARKS' });
//   } catch (error) {
//     yield put({ type: 'ERROR_IN_ADD_NEW_DOG_PARK' })
//   }
// }

function* dogParkSaga() {
  yield takeLatest('ADD_NEW_DOG_PARK', addNewDogPark);
  yield takeLatest('FETCH_ALL_DOG_PARKS', fetchAllDogParks);
  yield takeLatest('DELETE_THIS_DOG_PARK', deleteThisDogPark);
}

export default dogParkSaga;