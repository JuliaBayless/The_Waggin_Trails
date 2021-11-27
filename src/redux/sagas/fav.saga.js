import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

//GET all favorites
function* fetchAllFavorites() {
    // get genre from the DB as response
    try {
        const response = yield axios.get(`/api/favorites`);
        yield put({
            type: 'SET_All_FAVORITES',
            payload: response.data
        });
    } catch (error) {
        yield put({ type: 'ERROR_IN_FETCH_FAVORITE' })
        console.log(error);
    }
} //end fetchAllTags

//POST to favorites
function* addToFavorites(action) {
    try {
        axios.post('/api/favorites', action.payload)
        // reset reducer  
        yield put({
            type: 'FETCH_ALL_FROM_FAVORITES_TABLE'
        })
    } catch {
        console.log('error');
        yield put({ type: 'ERROR_IN_ADD_FAVORITE' })
    }
} //end toggleIsFav

//DELETE from Favorites
function* deleteFavorite(action) {
    try {
        axios.delete(`/api/favorites`, {
            data: action.payload
        })
    } catch {
        console.log('error');
        yield put({ type: 'ERROR_IN_DELETE_FAVORITE' })
    }
}//end addTagInEditMode


function* Favorites() {
    yield takeLatest('ADD_TO_FAVORITES_TABLE', addToFavorites); 
    yield takeLatest('DELETE_FROM_FAVORITES_TABLE', deleteFavorite); 
    yield takeLatest('FETCH_ALL_FROM_FAVORITES_TABLE', fetchAllFavorites); 
}

export default Favorites;