import { connect } from "react-redux";
import { toArr,sortByNew } from "../../reducers/selectors";
import {fetchPosts} from "../../actions/post_actions"
import { fetchUsers } from "../../actions/session_actions";
import QuestionIndex from "./question_index"
const mSTP = ({entities: {posts,tags, users}},ownProps) => {
    let formType = "All Questions";
    let search = ownProps.location.search;
    if (search.length > 0) {
        search = search.slice(1).split("=");
        formType = `Questions tagged [${search[1].replace("%20"," ")}]`
    }
    return {
        questions: sortByNew(toArr(posts)),
        tags,
        formType,
        users
    }
}

const mDTP = (dispatch,ownProps) => ({
    fetchPosts: (data) => {
        let search = ownProps.location.search;
        if (search.length === 0) {
            search = {}
        } else {
            search = search.slice(1).split("=")
            search = {[search[0]]:search[1]}
        }
        return dispatch(fetchPosts(Object.assign({},data,search)))
    },
    fetchUsers: () => dispatch(fetchUsers())
})

export default connect(mSTP,mDTP)(QuestionIndex);