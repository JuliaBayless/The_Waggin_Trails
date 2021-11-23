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
const addDogPark = (state = [], action ) => {
    switch (action.type) {
            //adding the tags array to the data?
        case 'ADD_TAG' :
            console.log('in ADD_TAG', action.payload);
            state.push(action.payload);
            return state  
        case 'DELETE_TAG' :
            return  state.filter(tag => tag !== action.payload)
        default :
            return state
    }

}


export default combineReducers({
    //reducers go here
    allDogParksInDB,
    dogParkDetails,
    addDogPark

});