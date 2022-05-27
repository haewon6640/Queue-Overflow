import * as SessionApiUtil from "../util/session_api_util";

export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER";
export const LOGOUT_CURRENT_USER = "LOGOUT_CURRENT_USER";
export const RECEIVE_USERS = "RECEIVE_USERS";
export const RECEIVE_SESSION_ERRORS = "RECEIVE_SESSION_ERRORS";
export const CLEAR_ERRORS = "CLEAR_ERRORS";
const receiveCurrentUser = (user) => ({
    type: RECEIVE_CURRENT_USER,
    user
})
const receiveUsers = (users) => ({
    type: RECEIVE_USERS,
    users
})

const logoutCurrentUser = () => ({
    type: LOGOUT_CURRENT_USER
})

export const receiveSessionErrors = (errors) => ({
    type: RECEIVE_SESSION_ERRORS,
    errors
})

export const clearErrors = () => ({
    type: CLEAR_ERRORS
})

export const login = (user) => dispatch => (
    SessionApiUtil.login(user).then(user=>
        dispatch(receiveCurrentUser(user)
    ), err => (
        dispatch(receiveSessionErrors(err.responseJSON))
    ))
)

export const logout = () => dispatch => (
    SessionApiUtil.logout().then(()=>
        dispatch(logoutCurrentUser()
    ), err => (
        dispatch(receiveSessionErrors(err.responseJSON))
    ))
)

export const signup = (user) => dispatch => (
    SessionApiUtil.signup(user).then(user=>
        dispatch(receiveCurrentUser(user)
    ), err => (
        dispatch(receiveSessionErrors(err.responseJSON))
    ))
)

export const fetchUsers = (data) => dispatch => (
    SessionApiUtil.fetchUsers(data).then(users=>
        dispatch(receiveUsers(users))
    , err=> dispatch(receiveSessionErrors(err.responseJSON)))
)