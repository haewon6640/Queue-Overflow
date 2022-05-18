import * as PostApiUtil from "../util/post_api_util";
export const RECEIVE_POSTS = "RECEIVE_POSTS";
export const RECEIVE_POST = "RECEIVE_POST";
export const REMOVE_POST = "REMOVE_POST";
export const RECEIVE_POST_ERRORS = "RECEIVE_POST_ERRORS";

const receivePosts = posts => ({
    type: RECEIVE_POSTS,
    posts
})
const receivePost = post => ({
    type: RECEIVE_POST,
    post
})

const removePost = postId => ({
    type: REMOVE_POST,
    postId
})

export const receivePostErrors = (errors) => ({
    type: RECEIVE_POST_ERRORS,
    errors
})

export const fetchPosts = (data) => dispatch => (
    PostApiUtil.fetchPosts(data).then(posts=>
        dispatch(receivePosts(posts))
    , errors => dispatch(receivePostErrors(errors)))
)
export const fetchPost = (id) => dispatch => (
    PostApiUtil.fetchPosts(id).then(post=>
        dispatch(receivePost(post))
    , errors => dispatch(receivePostErrors(errors)))
)
export const createPost = (post) => dispatch => (
    PostApiUtil.createPost(post).then(post=>
        dispatch(receivePost(post))
    , errors => dispatch(receivePostErrors(errors)))
)

export const updatePost = (post) => dispatch => (
    PostApiUtil.updatePost(post).then(post=>
        dispatch(receivePost(post))
    , errors => dispatch(receivePostErrors(errors)))
)

export const deletePost = (postId) => dispatch => (
    PostApiUtil.deletePost(postId).then(post =>
        dispatch(removePost(postId))
    , errors => dispatch(receivePostErrors(errors)))
)