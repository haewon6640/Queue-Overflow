import { connect } from "react-redux";
import { logout } from "../../actions/session_actions";
import { withRouter } from "react-router-dom";
import NavBar from "./navbar"
const mSTP = ({session, entities: {users}}) => ({
    currentUser: users[session.currentUserId]
})

const mDTP = dispatch => ({
    logout: () => dispatch(logout())
})

export default withRouter(connect(
    mSTP,
    mDTP
)(NavBar));