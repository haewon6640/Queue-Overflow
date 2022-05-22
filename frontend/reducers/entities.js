import { combineReducers } from "redux";
import postsReducer from "../reducers/posts";
import usersReducer from "../reducers/users";
import answersReducer from "../reducers/answers";
export default combineReducers({
    posts: postsReducer,
    answers: answersReducer,
    users: usersReducer
})