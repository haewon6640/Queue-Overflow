import { RECEIVE_POSTS, RECEIVE_POST, REMOVE_POST} from "../actions/post_actions";
import { RECEIVE_COMMENT } from "../actions/comment_actions";
export default (state = {}, action) => {
    Object.freeze(state);
    const newState = Object.assign({},state);
    switch(action.type) {
        case RECEIVE_POSTS:
            return Object.assign({},action.posts)
        case RECEIVE_POST:
            newState[action.post.id] = action.post
            return newState;
        case REMOVE_POST:
            delete newState[action.postId]
            return newState;
        case RECEIVE_COMMENT:
            if (action.comment.comment_type === "question") {
                newState[action.comment.post_id].comments = [...newState[action.comment.post_id].comments,action.comment.id]
            }
            return newState;
        default: 
            return state;
    }
}