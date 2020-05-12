const initState = {
    posts: []
}

const postReducer = (state=initState, action) => {
    switch(action.type){
        case 'ADD_POST':
            return state;
        case 'ADD_POST_ERROR':
            console.log('Add post error: ', action.err)
        default:
            return state;
    }
}

export default postReducer;