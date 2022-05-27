import { RECEIVE_POSTS, RECEIVE_POST} from "../actions/post_actions";
import { RECEIVE_TAGS } from "../actions/tag_actions";
export default (state = {}, action) => {
    Object.freeze(state);
    switch(action.type) {
        case RECEIVE_POSTS:
            return Object.assign({},action.tags)
        case RECEIVE_POST:
            return Object.assign({},state,action.tags);
        case RECEIVE_TAGS:
            return Object.assign({},state,action.tags)
        default: 
            return state;
    }
}   