import { connect } from "react-redux";
import React from "react";
import { Link } from "react-router-dom";
import { clearErrors, login } from "../../actions/session_actions";
import LoginForm from "./login_form";

const mapStateToProps = ({ errors }) => {
    return ({
        errors: errors.login,
        formType: "log in"
    });
    };

const mapDispatchToProps = (dispatch) => {
  return ({
    processForm: (user) => dispatch(login(user)),
    clearErrors: () => dispatch(clearErrors())
  });
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);
