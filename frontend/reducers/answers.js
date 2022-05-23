import { RECEIVE_POST, RECEIVE_ANSWER} from "../actions/post_actions";
import {RECEIVE_COMMENT} from "../actions/comment_actions";
export default (state = {}, action) => {
    Object.freeze(state);
    const newState = Object.assign({},state);
    switch(action.type) {
        case RECEIVE_POST:
            return Object.assign({},action.answers)
        case RECEIVE_ANSWER:
            return Object.assign({},state,action.answer)
        case RECEIVE_COMMENT:
            console.log(action);
            if (action.comment.comment_type === "answer") {
                newState[action.comment.post_id].comments.push(action.comment.id)
            }
            return newState;
        default: 
            return state;
    }
}