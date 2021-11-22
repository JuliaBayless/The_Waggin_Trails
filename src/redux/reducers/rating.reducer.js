import { combineReducers } from 'redux';


//Set the average rating for each dog park
const averageRating = (state = [], action) => {
    switch (action.payload) {
        case 'SET_AVERAGE_RATING_ON_PARK':
            return action.payload
        default: 
            return state;
    }
}



export default combineReducers({
    averageRating
});