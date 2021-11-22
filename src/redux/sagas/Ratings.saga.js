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







function* Favorites() {
    yield takeLatest('TOGGLE_ISFAV_BOOLEAN_VALUE', toggleIsFav) 
}

export default Favorites;