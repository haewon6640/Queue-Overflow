import { connect } from "react-redux";
import {createPost} from "../../actions/post_actions"
import CreateQuestionForm from "./create_question_form"
const mSTP = state => ({
    currentUserId: state.session.currentUserId
})

const mDTP = dispatch => ({
    action: (formQuestion) => dispatch(createPost(formQuestion))
})

export default connect(mSTP, mDTP)(CreateQuestionForm)