import { RECEIVE_POST, RECEIVE_POSTS} from "../actions/post_actions";
import { CLEAR_COMMENTS, RECEIVE_COMMENT } from "../actions/comment_actions";

export default (state = {}, action) => {
    Object.freeze(state);
    switch(action.type) {
        case CLEAR_COMMENTS:
            return {}
        case RECEIVE_POST:
            return Object.assign({},action.comments);
        case RECEIVE_COMMENT:
            return Object.assign({},state,{[action.comment.id]:action.comment});
        default: 
            return state;
    }
}