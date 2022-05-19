import { RECEIVE_POSTS, RECEIVE_POST, REMOVE_POST} from "../actions/post_actions";

export default (state = {}, action) => {
    Object.freeze(state);
    const newState = Object.assign({},state);
    switch(action.type) {
        case RECEIVE_POSTS:
            return Object.assign({},action.posts)
        case RECEIVE_POST:
            console.log(action);
            newState[action.post.id] = action.post
            return newState;
        case REMOVE_POST:
            delete newState[action.postId]
            return newState;
        default: 
            return state;
    }
}