import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

//sagas for all things park tags related here


//GET all tags on tagList
function* fetchAllTags() {
    // get genre from the DB as response
    try {
        const response = yield axios.get(`/api/tagList`);
        yield put({
            type: 'SET_All_TAGS',
            payload: response.data
        });
    } catch (error) {
        yield put({ type: 'ERROR_IN_SET_All_TAGS' })
        console.log(error);
    }
} //end fetchAllTags


//GET tags specific to dog park
function* fetchSpecificDogParkTags() {

    try {
        const response = yield axios.get(`/api/parkTags`);
        yield put({
            type: 'SET_SPECIFIC_DOG_PARK_TAGS',
            payload: response.data
        });

    } catch {
        console.log('get all error');
        yield put({ type: 'ERROR_IN_FETCH_DOG_PARK_TAGS' })
    }
}//end fetchDogParkTags

//add tags associated with specific dog parks
function* addTagInEditMode(action) {
    try {
        axios.post('/api/parkTags', action.payload)
        // reset reducer  
        yield put({
            type: 'FETCH_DOG_PARK_TAGS'
        })
    } catch {
        console.log('error');
        yield put({ type: 'ERROR_IN_ADD_TAG_IN_EDIT_MODE' })
    }
}//end addTagInEditMode


//delete tags associated with specific dog parks
function* deleteTagInEditMode(action) {
    console.log('IN DELETE SAGA', action.payload)
    try {
        axios.delete(`/api/parkTags`, {
            data: action.payload
        })
    } catch {
        console.log('error');
        yield put({ type: 'ERROR_IN_DELETE_TAG_IN_EDIT_MODE' })
    }
}//end addTagInEditMode


//listener for 
function* parkTagSaga() {
    yield takeLatest('FETCH_DOG_PARK_TAGS', fetchSpecificDogParkTags);
    yield takeLatest('FETCH_ALL_TAGS', fetchAllTags);
    yield takeLatest('DELETE_TAG_IN_EDIT_MODE', deleteTagInEditMode);
    yield takeLatest('ADD_TAG_IN_EDIT_MODE', addTagInEditMode);
} //end parkTagSaga

export default parkTagSaga;