import { connect } from "react-redux";
import { toArr,sortByNew } from "../../reducers/selectors";
import {fetchPosts} from "../../actions/post_actions"
import { fetchUsers } from "../../actions/session_actions";
import QuestionIndex from "../posts/question_index"
const mSTP = ({entities: {users,posts,tags}},ownProps) => ({
    questions: sortByNew(toArr(posts)),
    tags,
    formType: ""
})

const mDTP = (dispatch,ownProps) => ({
    fetchPosts: (data) => dispatch(fetchPosts(Object.assign({},data, {poster_id: ownProps.match.params.id}))),
    fetchUsers: () => dispatch(fetchUsers())
})

export default connect(mSTP,mDTP)(QuestionIndex);
