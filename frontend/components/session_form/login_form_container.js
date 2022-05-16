import { connect } from "react-redux";
import React from "react";
import { Link } from "react-router-dom";
import { login } from "../../actions/session_actions";
import LoginForm from "./login_form";

const mapStateToProps = ({ errors }) => {
    return {
        errors: errors.login,
        formType: "login",
        navLink: (
        <div>
            Don't have an account? <Link to="/signup">Sign up</Link>
        </div>
        ),
    };
    };

const mapDispatchToProps = (dispatch) => {
  return {
    processForm: (user) => dispatch(login(user)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);