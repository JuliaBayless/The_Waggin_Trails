import { combineReducers } from 'redux';


//reducer for park tags
const allTags = (state = [], action) => {
    switch (action.type) {
        //all tags for user interaction
        case 'SET_All_TAGS':
            return action.payload
        default:
            return state
    }
}


const specificTags = (state = [], action) => {
    switch (action.type) {
            //specific tags that go with the dog park
        case 'SET_SPECIFIC_DOG_PARK_TAGS' :
            return action.payload
        default:
            return state
    }
}


export default combineReducers({
    //reducers go here
    allTags, 
    specificTags
});