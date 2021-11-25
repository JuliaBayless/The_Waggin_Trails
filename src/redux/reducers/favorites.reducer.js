import { combineReducers } from 'redux';


//reducer for park tags
const favorites = (state = [], action) => {
    switch (action.type) {
        //all favs for setting icon and rendering to favs page
        case 'SET_All_FAVORITES':
            return action.payload
        default:
            return state
    }
}


export default combineReducers({
    //reducers go here
    favorites
});