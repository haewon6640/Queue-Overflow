import { CLEAR_ANSWERS,RECEIVE_POST, RECEIVE_ANSWER} from "../actions/post_actions";
import { RECEIVE_COMMENT } from "../actions/comment_actions";
import { RECEIVE_VOTE, REMOVE_VOTE, REPLACE_VOTE } from "../actions/vote_actions";
export default (state = {}, action) => {
    Object.freeze(state);
    const newState = Object.assign({},state);
    switch(action.type) {
        case CLEAR_ANSWERS:
            return {}
        case RECEIVE_POST:
            return Object.assign({},action.answers)
        case RECEIVE_ANSWER:
            return Object.assign({},state,action.answer)
        case RECEIVE_COMMENT:
            if (action.comment.comment_type === "answer") {
                newState[action.comment.post_id].comments.push(action.comment.id)
            }
            return newState;
        case RECEIVE_VOTE:
            let key = Object.keys(action.vote)[0];
            if (action.vote[key].post_type != "answer") {
                return newState;
            }
            let postId = (action.vote[key].post_id);
            let value = (action.vote[key].vote) ? 1 : -1;
            newState[postId].score += value;
            return newState;
        case REMOVE_VOTE:
            key = Object.keys(action.vote)[0];
            if (action.vote[key].post_type != "answer") {
                return newState;
            }
            postId = (action.vote[key].post_id);
            value = (action.vote[key].vote) ? 1 : -1;
            newState[postId].score -= value;
            return newState;
        case REPLACE_VOTE:
            key = Object.keys(action.vote)[0];
            if (action.vote[key].post_type != "answer") {
                return newState;
            }
            postId = (action.vote[key].post_id);
            value = (action.vote[key].vote) ? 2 : -2;
            newState[postId].score += value;
            return newState;
        default: 
            return state;
    }
}