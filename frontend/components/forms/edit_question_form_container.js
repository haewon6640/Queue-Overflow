import { connect } from "react-redux";
import { fetchPost,updatePost } from "../../actions/post_actions";
import EditQuestionForm from "./edit_question_form";

const mSTP = (state,ownProps) => ({
    currentUserId: state.session.currentUserId,
    question: state.entities.posts[ownProps.match.params.id],
    tags: state.entities.tags
})

const mDTP = dispatch => ({
    fetchPost: (postId) => dispatch(fetchPost(postId)),
    action: (post) => dispatch(updatePost(post))
})

export default connect(mSTP,mDTP)(EditQuestionForm)