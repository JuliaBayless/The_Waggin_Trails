import { combineReducers } from 'redux';


//reducer for park tags
const allDogParksInDB = (state = [], action) => {
    switch (action.type) {
        case 'SET_All_DOG_PARKS':
            return action.payload
        case 'SET_FAV_DOG_PARKS' :
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




//hold new dog park info until ready to send
const addTagsToDogPark = (state = [], action ) => {
    switch (action.type) {
            //adding the to the tags array that goes to that database 
        case 'ADD_TAG' :
            state.push(action.payload);
            return state  
            //delete from the tags array
        case 'DELETE_TAG' :
            return  state.filter(tag => tag !== action.payload)
            //empty reducer after park is submitted
        case 'CLEAR_USER_SELECTED_TAGS_ON_FORM' :
            return []
        default :
            return state
    }

}


export default combineReducers({
    //reducers go here
    allDogParksInDB,
    dogParkDetails,
    addTagsToDogPark
});