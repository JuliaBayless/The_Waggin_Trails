import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

//GET all favorites
function* fetchAllFavorites() {
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

//POST to favorites
function* addToFavorites(action) {
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
} //end toggleIsFav

//DELETE from Favorites
function* deleteFavorite(action) {
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


function* Favorites() {
    yield takeLatest('ADD_TO_FAVORITES_TABLE', addToFavorites); 
    yield takeLatest('DELETE_FROM_FAVORITES_TABLE', deleteFavorite); 
    yield takeLatest('FETCH_ALL_FROM_FAVORITES_TABLE', fetchAllFavorites); 
}

export default Favorites;