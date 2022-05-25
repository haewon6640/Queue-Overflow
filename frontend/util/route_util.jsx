import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route, Redirect, withRouter } from 'react-router-dom';
const Auth = ({ component: Component, path, loggedIn, exact }) => (
  <Route path={path} exact={exact} render={(props) => (
    !loggedIn ? (
      <Component {...props} />
    ) : (
      <Redirect to="/" />
    )
  )} />
);

const Protected = ({ component: Component, path, loggedIn, exact }) => (
  <Route path={path} exact={exact} render={(props) => (
     loggedIn ? (
      <Component {...props} />
    ) : (
      <Redirect to="/login" />
    )
  )} />
);

const Home = ({ component: Component, path, loggedIn, exact }) => (
  <Route path={path} exact={exact} render={(props) => (
     loggedIn ? (
      null
    ) : (
      <Component {...props}/>
    )
  )} />
);

const UserHome = ({ component: Component, path, loggedIn, exact }) => (
  <Route path={path} exact={exact} render={(props) => (
     loggedIn ? (
      <Component {...props}/>
    ) : (
      null
    )
  )} />
);


const mapStateToProps = state => (
  {loggedIn: Boolean(state.session.currentUserId)}
);

export const AuthRoute = withRouter(connect(mapStateToProps)(Auth));

export const ProtectedRoute = withRouter(connect(mapStateToProps)(Protected));
export const HomeRoute = withRouter(connect(mapStateToProps)(Home));
export const UserHomeRoute = withRouter(connect(mapStateToProps)(UserHome));


