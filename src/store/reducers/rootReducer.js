import authReducer from "./authReducer";
import postReducer from "./postReducer";
//import combineReducer from the redux library
//to combine our reducers into one
import { combineReducers } from "redux";

const rootReducer = combineReducers({
    //setup property: value
    auth: authReducer,
    post: postReducer
});

export default rootReducer;