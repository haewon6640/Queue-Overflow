import { combineReducers } from "redux";
import postsReducer from "../reducers/posts";
import usersReducer from "../reducers/users";
export default combineReducers({
    posts: postsReducer,
    users: usersReducer
})