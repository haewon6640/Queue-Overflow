import { RECEIVE_POST} from "../actions/post_actions";
import { RECEIVE_VOTE, REMOVE_VOTE, REPLACE_VOTE } from "../actions/vote_actions";

export default (state = {}, action) => {
    Object.freeze(state);
    const newState = Object.assign({},state);
    switch(action.type) {
        case RECEIVE_POST:
            return Object.assign({},action.votes);
        case RECEIVE_VOTE:
            let key = Object.keys(action.vote)[0];
            newState[key] = action.vote[key];
            return newState;
        case REMOVE_VOTE:
            delete newState[action.vote.id]
            return newState;
        case REPLACE_VOTE:
            key = Object.keys(action.vote)[0];
            newState[key] = action.vote[key];
            return newState;
        default: 
            return state;
    }
}