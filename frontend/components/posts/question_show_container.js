import { connect } from "react-redux";
import { fetchPost,createAnswer, receivePost } from "../../actions/post_actions";
import { createComment } from "../../actions/comment_actions";
import QuestionShow from "./question_show";


const mSTP = (state,ownProps) => ({
    question: state.entities.posts[ownProps.match.params.id],
    answers: Object.keys(state.entities.answers).map(key=> state.entities.answers[key]),
    // have to filter 
    comments: state.entities.comments,
    currUserId: state.session.currentUserId
})

const mDTP = dispatch => ({
    fetchPost: (postId) => dispatch(fetchPost(postId)),
    createAnswer: (answer) => dispatch(createAnswer(answer)),
    createComment: (comment) => dispatch(createComment(comment)),
    receivePost: (post) => dispatch(receivePost(post))
})

export default connect(mSTP, mDTP)(QuestionShow)