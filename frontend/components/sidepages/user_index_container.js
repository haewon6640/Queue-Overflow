import { connect } from "react-redux";
import {fetchUsers} from "../../actions/session_actions";
import UserIndex from "./user_index";
const mSTP = state => ({
    users: Object.keys(state.entities.users).map(key=> state.entities.users[key])
})

const mDTP = dispatch => ({
    fetchUsers: () => dispatch(fetchUsers())
})

export default connect(mSTP, mDTP)(UserIndex)