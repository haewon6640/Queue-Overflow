import { connect } from 'react-redux';
import React from 'react';
import { Link } from 'react-router-dom';
import { signup, login, clearErrors } from '../../actions/session_actions';
import SignupForm from './signup_form';

const mapStateToProps = ({ errors }) => {
  return {
    errors: errors.login,
    formType: 'sign up',
    navLink: <div>Already have an account? <Link to="/login">Log in</Link></div>,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    processForm: (user) => dispatch(signup(user)),
    demoLogin: (demo) => dispatch(login(demo)),
    clearErrors: () => dispatch(clearErrors())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SignupForm);
