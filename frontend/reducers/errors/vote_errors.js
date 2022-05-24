import { RECEIVE_VOTE_ERRORS, RECEIVE_VOTE, CLEAR_ERRORS } from "../../actions/vote_actions";
export default (state = [], action) => {
    Object.freeze(state)
    switch(action.type) {
        case RECEIVE_VOTE_ERRORS:
            return action.errors;
        case RECEIVE_VOTE:
            return [];
        case CLEAR_ERRORS: 
            return [];
        default:
            return state;

    }
}