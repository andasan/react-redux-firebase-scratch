export const createPost = (post) => {
    // return {
    //     type: "ADD_POST",
    //     post: post
    // }
    //when we use thunk, we can now return a function
    //dispatch = is what dispatches an action to the reducer
    return (dispatch, getState) => {
        //make async call to database
        dispatch({type: 'ADD_POST', post: post});
        //ES6 - property name === value, just remain as post
        //dispatch({type: 'ADD_POST', post});
    }
}