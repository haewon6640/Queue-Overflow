import { connect } from "react-redux";
import { toArr,sortByNew } from "../../reducers/selectors";
import {fetchPosts} from "../../actions/post_actions"
import QuestionIndex from "./question_index"
const mSTP = ({entities: {posts}}) => ({
    questions: sortByNew(toArr(posts))
})

const mDTP = dispatch => ({
    fetchPosts: (data) => dispatch(fetchPosts(data))
})

export default connect(mSTP,mDTP)(QuestionIndex);
