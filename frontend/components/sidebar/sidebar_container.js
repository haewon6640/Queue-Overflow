import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import SideBar from "./sidebar";
const mSTP = state => ({
    loggedIn: Boolean(state.session.currentUserId)
})

export default withRouter(connect(mSTP)(SideBar));