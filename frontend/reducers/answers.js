import { RECEIVE_POST, RECEIVE_ANSWER} from "../actions/post_actions";

export default (state = {}, action) => {
    Object.freeze(state);
    switch(action.type) {
        case RECEIVE_POST:
            return Object.assign({},action.answers)
        case RECEIVE_ANSWER:
            return Object.assign({},state,action.answer)
        default: 
            return state;
    }
}