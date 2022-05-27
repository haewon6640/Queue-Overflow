import { connect } from "react-redux";
import {fetchUsers} from "../../actions/session_actions";
import UserIndex from "./user_index";
import {toArr, sortByReputation} from "../../reducers/selectors";
const mSTP = state => ({
    users: sortByReputation(toArr(state.entities.users))
})

const mDTP = dispatch => ({
    fetchUsers: () => dispatch(fetchUsers())
})

export default connect(mSTP, mDTP)(UserIndex)