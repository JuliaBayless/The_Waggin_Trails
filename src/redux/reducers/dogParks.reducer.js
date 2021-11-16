import { combineReducers } from 'redux';


//reducer for park tags
const dogParks = (state = [], action) => {
    switch (action.type) {
        case 'SET_All_DOG_PARKS':
            return action.payload
        default:
            return state
    }
}


export default combineReducers({
    //reducers go here
    dogParks
});