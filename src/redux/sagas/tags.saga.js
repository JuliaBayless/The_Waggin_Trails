import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

//sagas for all things park tags related here


//GET all tags on tagList
function* fetchAllTags() {
    // get genre from the DB as response
    try {
        const response = yield axios.get(`/api/tagList`);
        console.log('This is all genre GET', response.data);
        yield put({
            type: 'SET_All_TAGS',
            payload: response.data
        });
    } catch (error){
        console.log('get all tags error');
    }
} //end fetchAllTags









function* parkTagSaga() {
    yield takeEvery('FETCH_ALL_TAGS', fetchAllTags);

  }
  
  export default parkTagSaga;