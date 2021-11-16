import { combineReducers } from 'redux';


//reducer for park tags
const allTags = (state = [], action) => {
    console.log('IN ALL TAGS REDUCER')
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