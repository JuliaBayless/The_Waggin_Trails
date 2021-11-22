import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';


//function to send a put to trigger toggle in database
function* toggleIsFav(action) {
    try {
        axios.put(`/api/ratings/isFav/${action.payload.id}`)
    } catch (error) {
        yield put({ type: 'ERROR_IN_TOGGLE_ISFAV_BOOLEAN_VALUE' })
    }
} //end toggleIsFav


//fetch the average rating
function* fetchAverageRating(action) {
    try {
        const response = yield axios.get(`/api/ratings/Avg/${action.payload}`)
        yield put({
            type: 'SET_AVERAGE_RATING_ON_PARK',
            payload: response.data
          });
    } catch (error) {
        yield put({ type: 'ERROR_IN_FETCH_AVERAGE_RATING' })
    }
} //end toggleIsFav





function* Favorites() {
    yield takeLatest('TOGGLE_ISFAV_BOOLEAN_VALUE', toggleIsFav);
    yield takeLatest('FETCH_AVERAGE_RATING', fetchAverageRating); 
}

export default Favorites;