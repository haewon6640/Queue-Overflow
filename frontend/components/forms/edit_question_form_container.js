import { connect } from "react-redux";
import { fetchPost } from "../../actions/post_actions";
import EditQuestionForm from "./edit_question_form";

const mSTP = (state,ownProps) => ({
    currentUserId: state.session.currentUserId,
    question: state.entities.posts[ownProps.match.params.id]
})

const mDTP = dispatch => ({
    fetchPost: (postId) => dispatch(fetchPost(postId))
})

export default connect(mSTP,mDTP)(EditQuestionForm)