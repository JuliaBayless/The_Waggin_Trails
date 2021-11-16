import { combineReducers } from 'redux';

const allTags = (state = [], action) => {
    switch (action.type) {
        case 'SET_All_TAGS':
            return action.payload
        default:
            return state
    }
}





export default combineReducers({
    //reducers go here
    allTags
});