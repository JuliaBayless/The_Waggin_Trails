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


//GET a specific dog park for details page
function* fetchSpecificDogPark(action) {
  console.log('This is fetchSpecificDogPark', action.payload)
  try {
    const response = yield axios.get(`/api/dogParks/${action.payload}`);
    console.log('GET YO DOG PARK', response.data);
    yield put({
      type: 'SET_DOG_PARK_DETAIL',
      payload: response.data
    });
  } catch (error) {
    yield put({ type: 'ERROR_IN_SET_DOG_PARK_DETAIL' })
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


function* editThisDogPark(action) {
  console.log('IN THE EDIT SAGA', action.payload)

  try {
    axios.put(`/api/dogParks/${action.payload.id}`, action.payload)
    //FETCH the new DB
    yield put({ type: 'FETCH_ALL_DOG_PARKS' });
  } catch (error) {
    yield put({ type: 'ERROR_IN_ADD_NEW_DOG_PARK' })
  }

}

function* dogParkSaga() {
  yield takeLatest('ADD_NEW_DOG_PARK', addNewDogPark);
  yield takeLatest('FETCH_ALL_DOG_PARKS', fetchAllDogParks);
  yield takeLatest('DELETE_THIS_DOG_PARK', deleteThisDogPark);
  yield takeLatest('EDIT_THIS_DOG_PARK', editThisDogPark);
  yield takeLatest('FETCH_DOG_PARK_DETAIL_VIEW', fetchSpecificDogPark)
}

export default dogParkSaga;