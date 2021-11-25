import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';


//fetch the average rating
function* fetchAverageRating(action) {
    try {
        const response = yield axios.get(`/api/ratings/Avg/${action.payload}`)
        console.log('=============', response.data)
        yield put({
            type: 'SET_AVERAGE_RATING_ON_PARK',
            payload: response.data
          });
    } catch (error) {
        yield put({ type: 'ERROR_IN_FETCH_AVERAGE_RATING' })
    }
} //end toggleIsFav





function* Favorites() {
    yield takeLatest('FETCH_AVERAGE_RATING', fetchAverageRating); 
}

export default Favorites;