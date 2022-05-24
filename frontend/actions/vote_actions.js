import * as VoteApiUtil from "../util/vote_api_util";
export const RECEIVE_VOTE = "RECEIVE_VOTE";
export const RECEIVE_VOTE_ERRORS = "RECEIVE_COMMENT_ERRORS";
export const CLEAR_ERRORS = "RECEIVE_CLEAR_ERRORS";
export const REMOVE_VOTE = "REMOVE_VOTE";
export const REPLACE_VOTE = "REPLACE_VOTE";
export const receiveVote = (vote) => ({
    type: RECEIVE_VOTE,
    vote,
});
export const removeVote = (vote) => ({
    type: REMOVE_VOTE,
    vote,
});

export const replaceVote = (vote) => ({
    type: REPLACE_VOTE,
    vote
})

export const receiveVoteErrors = (errors) => ({
    type: RECEIVE_VOTE_ERRORS,
    errors,
});
export const clearErrors = () => ({
    type: CLEAR_ERRORS
})

export const createVote = (vote) => (dispatch) =>
    VoteApiUtil.createVote(vote).then(
        (res) => dispatch(receiveVote(res)),
        (errors) => dispatch(receiveVoteErrors(errors))
    );

export const updateVote = (vote) => (dispatch) =>
    VoteApiUtil.updateVote(vote).then(
        (res) => dispatch(replaceVote(res)),
        (errors) => dispatch(receiveVoteErrors(errors))
    );

export const deleteVote = (voteId) => (dispatch) =>
    VoteApiUtil.deleteVote(voteId).then(
        (res) => dispatch(removeVote(res)),
        (errors) => dispatch(receiveVoteErrors(errors))
    );



