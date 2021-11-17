import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

//sagas for all things park tags related here


//GET all tags on tagList
function* fetchAllTags() {
    // get genre from the DB as response
    try {
        const response = yield axios.get(`/api/tagList`);
        console.log('GET ALL TAGS', response.data);
        yield put({
            type: 'SET_All_TAGS',
            payload: response.data
        });
    } catch (error){
       yield put({ type: 'ERROR_IN_SET_All_TAGS'})
       console.log(error);
    }
} //end fetchAllTags


//GET tags specific to dog park
function* fetchSpecificDogParkTags() {

    try {
        const response = yield axios.get(`/api/parkTags`);
        console.log('This is specific tags GET', response);
        yield put({
            type: 'SET_SPECIFIC_DOG_PARK_TAGS',
            payload: response
        });

    } catch {
        console.log('get all error');
        yield put({ type: 'ERROR_IN_FETCH_DOG_PARK_TAGS'})
    }
}//end fetchDogParkTags








//listener for 
function* parkTagSaga() {
    yield takeLatest('FETCH_DOG_PARK_TAGS', fetchSpecificDogParkTags);
    yield takeLatest('FETCH_ALL_TAGS', fetchAllTags);
  } //end parkTagSaga
  
  export default parkTagSaga;