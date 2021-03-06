import { combineReducers } from "redux"; 
import sessionErrorsReducer from './errors/session_errors';
import postErrorsReducer from './errors/post_errors';
import commentErrorsReducer from './errors/comment_errors';
import voteErrorsReducer from './errors/vote_errors';
export default combineReducers({
    login: sessionErrorsReducer,
    post: postErrorsReducer,
    comment: commentErrorsReducer,
    vote: voteErrorsReducer
})