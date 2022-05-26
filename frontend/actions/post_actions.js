import * as PostApiUtil from "../util/post_api_util";
export const RECEIVE_POSTS = "RECEIVE_POSTS";
export const RECEIVE_POST = "RECEIVE_POST";
export const REMOVE_POST = "REMOVE_POST";
export const RECEIVE_POST_ERRORS = "RECEIVE_POST_ERRORS";
export const RECEIVE_ANSWER = "RECEIVE_ANSWER";
export const CLEAR_ERRORS = "CLEAR_ERRORS";
export const CLEAR_ANSWERS = "CLEAR_ANSWERS";
const receivePosts = (res) => ({
    type: RECEIVE_POSTS,
    posts: res.posts,
    tags: res.tags
});

export const clearAnswers = () => ({
    type: CLEAR_ANSWERS
})
export const receiveAnswer = (answer) => ({
    type: RECEIVE_ANSWER,
    answer,
});

export const receivePost = (res) => ({
    type: RECEIVE_POST,
    post: res.post,
    answers: res.answers,
    comments: res.comments,
    votes: res.votes,
    tags: res.tags
});

const removePost = (postId) => ({
    type: REMOVE_POST,
    postId,
});

export const receivePostErrors = (errors) => ({
    type: RECEIVE_POST_ERRORS,
    errors,
});
export const clearErrors = () => ({
    type: CLEAR_ERRORS
})

export const fetchPosts = (data) => (dispatch) =>
    PostApiUtil.fetchPosts(data).then(
        (res) => dispatch(receivePosts(res)),
        (errors) => dispatch(receivePostErrors(errors))
    );
export const fetchPost = (id) => (dispatch) =>
    PostApiUtil.fetchPost(id).then(
        (res) => dispatch(receivePost(res)),
        (errors) => dispatch(receivePostErrors(errors))
    );
export const createPost = (post) => (dispatch) =>
    PostApiUtil.createPost(post).then(
        (res) => dispatch(receivePost(res)),
        (errors) => dispatch(receivePostErrors(errors))
    );
export const updatePost = (post) => (dispatch) =>
    PostApiUtil.updatePost(post).then(
        (post) => dispatch(receivePost(post)),
        (errors) => dispatch(receivePostErrors(errors))
    );

export const deletePost = (postId) => (dispatch) =>
    PostApiUtil.deletePost(postId).then(
        (post) => dispatch(removePost(postId)),
        (errors) => dispatch(receivePostErrors(errors))
    );

export const createAnswer = (answer) => (dispatch) =>
    PostApiUtil.createPost(answer).then(
        (res) => dispatch(receiveAnswer(res)),
        (errors) => dispatch(receivePostErrors(errors))
    );
