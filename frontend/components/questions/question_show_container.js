import { connect } from "react-redux";
import { fetchPost } from "../../actions/post_actions";
import QuestionShow from "./question_show";


const mSTP = (state,ownProps) => ({
    question: state.entities.posts[ownProps.match.params.id]
})

const mDTP = dispatch => ({
    fetchPost: (postId) => dispatch(fetchPost(postId))
})

export default connect(mSTP, mDTP)(QuestionShow)