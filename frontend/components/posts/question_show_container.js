import { connect } from "react-redux";
import { fetchPost,createAnswer, receivePost, clearAnswers, deletePost } from "../../actions/post_actions";
import { clearComments, createComment } from "../../actions/comment_actions";
import QuestionShow from "./question_show";
import { deleteVote,createVote, updateVote } from "../../actions/vote_actions";

const mSTP = (state,ownProps) => ({
    question: state.entities.posts[ownProps.match.params.id],
    answers: Object.keys(state.entities.answers).map(key=> state.entities.answers[key]),
    // have to filter 
    comments: state.entities.comments,
    votes: Object.values(state.entities.votes),
    currUserId: state.session.currentUserId,
    tags: state.entities.tags
})

const mDTP = dispatch => ({
    fetchPost: (postId) => dispatch(fetchPost(postId)),
    deletePost: (postId) => dispatch(deletePost(postId)),
    createAnswer: (answer) => dispatch(createAnswer(answer)),
    createComment: (comment) => dispatch(createComment(comment)),
    createVote: (vote) => dispatch(createVote(vote)),
    deleteVote: (voteId) => dispatch(deleteVote(voteId)),
    updateVote: (vote) => dispatch(updateVote(vote)),
    receivePost: (post) => dispatch(receivePost(post)),
    clearComments: () => dispatch(clearComments()),
    clearAnswers: () => dispatch(clearAnswers())
})

export default connect(mSTP, mDTP)(QuestionShow)