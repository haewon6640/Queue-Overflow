import * as CommentApiUtil from "../util/comment_api_util";
export const RECEIVE_COMMENT = "RECEIVE_COMMENT";
export const RECEIVE_COMMENT_ERRORS = "RECEIVE_COMMENT_ERRORS";
export const CLEAR_ERRORS = "CLEAR_ERRORS";

export const receiveComment = (comment) => ({
    type: RECEIVE_COMMENT,
    comment,
});

export const receiveCommentErrors = (errors) => ({
    type: RECEIVE_COMMENT_ERRORS,
    errors,
});
export const clearErrors = () => ({
    type: CLEAR_ERRORS
})

export const createComment = (comment) => (dispatch) =>
    CommentApiUtil.createComment(comment).then(
        (comment) => dispatch(receiveComment(comment)),
        (errors) => dispatch(receiveCommentErrors(errors))
    );

