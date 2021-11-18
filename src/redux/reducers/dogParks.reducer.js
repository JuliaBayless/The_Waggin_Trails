import { combineReducers } from 'redux';


//reducer for park tags
const dogParks = (state = [], action) => {
    switch (action.type) {
        case 'SET_All_DOG_PARKS':
            return action.payload
        default:
            return state
    }
} //end dog parks

//separate reducer for dog park details
const dogParkDetails = (state = [], action) => {
    switch (action.type) {
        case 'SET_DOG_PARK_DETAIL':
            return action.payload[0]
        default:
            return state
    }
} //end dogParkDetails


export default combineReducers({
    //reducers go here
    dogParkDetails,
    dogParks
});